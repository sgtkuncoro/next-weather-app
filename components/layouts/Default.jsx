import { Grid } from "@material-ui/core";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../parts/Header";
// import Footer from "../parts/Footer";

const DefaultLayout = Styled.div``;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white"
  }
}));

export default props => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <DefaultLayout>
            <Header />
            {props.children}
            {/* <Footer classes={classes.footer} /> */}
          </DefaultLayout>
        </Grid>
      </Grid>
    </div>
  );
};
