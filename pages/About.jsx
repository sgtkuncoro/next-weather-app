import React from "react";

import Typography from "@material-ui/core/Typography";

import Global from "../components/Global";

class About extends React.Component {
  render() {
    return (
      <Global>
        <Typography variant="h2" component="h1" gutterBottom>
          Next Weather
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <Typography variant="body1">Built with love.</Typography>
      </Global>
    );
  }
}

export default About;
