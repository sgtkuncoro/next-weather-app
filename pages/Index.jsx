import React from "react";
import Head from "next/head";
import Link from "next/link";

import Global from "../components/Global";
import styles from "./Index.scss";

export default class Index extends React.Component {
  render() {
    return (
      <Global>
        <Head>
          <title>Home</title>
        </Head>
        <div className="index-wrapper">
          <h1 className="headline">Welcome to wild-next </h1>
          <Link href="/about">
            <a>About</a>
          </Link>
          <ul>
            <li>
              <pre>./components</pre> Holds all components (repeating sections /
              widgets) that are used by pages to composite pages.
            </li>
            <li>
              <pre>./pages</pre> Holds all pages (containers), each file should
              represent one route. They are automatically routed by their
              filename, but can have a custom route name (see readme).
              <ul>
                <li>
                  <pre>./pages/_app.js</pre> Next.js component that is wrapped
                  around every page and doesn’t re-render when a route changes.
                  Practical for holding global state that should not be reset on
                  page change, or things like background sounds.
                </li>
                <li>
                  <pre>./pages/_document.js</pre> The underlying html for every
                  page render. This is only rendered once on the server and
                  serves as the container for the react app from then on.
                </li>
                <li>
                  <pre>./pages/_errors.js</pre> 404 or 500 errors from both
                  client- and server side are handled by this component. We
                  again have a sane default here, which frankly can be
                  customized as needed.
                </li>
              </ul>
            </li>
            <li>
              <pre>./services</pre> Every piece of JavaScript that does not
              export a Component should be housed here. Classic candidates are
              Singletons that encapsulate functionality like SDKs.
            </li>
            <li>
              <pre>./middleware</pre> Express middlewares that extend backend
              functionality. For example custom APIs or endpoints for form
              processing
            </li>
            <li>
              <pre>./static</pre> Holds all static files (fonts / images /
              videos etc.), can also be used to transfer things like robots.txt
              or favicon.ico
            </li>
          </ul>
        </div>
        <style jsx>{styles}</style>
      </Global>
    );
  }
}
