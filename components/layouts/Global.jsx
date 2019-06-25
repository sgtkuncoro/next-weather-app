import Head from "next/head";
import React from "react";
import styled from "styled-components";

import styles from "../Global.scss";

const GlobalLayoutStyled = styled.div``;

const defaultMetadata = {
  title: "Next Weather",
  description: "The next city weather",
  image: "/assets/logos/weather-climate-logo.png",
  keywords: "city weather",
  url: "",
  type: "blog"
};

export default class HomeLayout extends React.Component {
  render = () => {
    const { children, metadata = defaultMetadata, scripts = [] } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            href="/assets/favicon/favicon.ico"
            type="image/x-icon"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.5/css/weather-icons.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/icons/logo_16x16.png"
          />
          {/* <link rel="manifest" href="/assets/manifest.json" /> */}
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/assets/icons/logo_16x16.png"
          />
          <meta name="theme-color" content="#ffffff" />

          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />

          {/* open graph */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:type" content={metadata.type} />
          <meta property="og:url" content={metadata.url} />
          <meta property="og:image" content={metadata.image} />
          <meta property="og:description" content={metadata.description} />

          {/* twitter card */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@nextweather" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content={metadata.image} />

          {scripts.length > 0
            ? scripts.map((n, key) => {
                return <script src={n.src} key={key} />;
              })
            : null}

          <style jsx global>
            {styles}
          </style>
        </Head>

        <GlobalLayoutStyled>{children}</GlobalLayoutStyled>
      </React.Fragment>
    );
  };
}
