const express = require("express");
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.APP_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use("/assets", express.static(`${__dirname}/static`));

  /**
   * here you could do some express stuff if you fancy, eg. running custom middleware or offering an API
   */
  // server.get('/api', (req, res) => {
  //   return res.send({ version: 1.0 })
  // });

  /** always make sure the handler is the last route entry  */
  server.use(handler);

  const port = process.env.PORT || 8000;
  server.listen(port, err => {
    if (err) throw err;
    console.log(
      `> Env ${process.env.APP_ENV} Ready on http://localhost:${port}`
    ); // eslint-disable-line no-console
  });
});
