const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/", "Index");
routes.add("about", "/about", "About");
