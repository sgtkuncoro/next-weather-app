import React from "react";
import Link from "@material-ui/core/Link";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Built with love by the "}
      <Link color="inherit" href="https://sgtkuncoro.github.io">
        Kunc
      </Link>
    </Typography>
  );
}

export default function StickyFooter(props) {
  return (
    <footer className={props.classes.footer}>
      <Typography variant="body1">Next Weather</Typography>
      <MadeWithLove />
    </footer>
  );
}
