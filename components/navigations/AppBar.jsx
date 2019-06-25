import React, { Component } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Toolbar, Menu, MenuItem, IconButton, Button } from "@material-ui/core";

import { Link, Router } from "../../routes";

const ITEM_HEIGHT = 45;
const URL_LOGO = "/assets/logos/weather-climate-logo.png";

class ApplicationBar extends Component {
  state = {
    anchorEl: null,
    user: null
  };

  handleMenuClick = path => {
    Router.pushRoute(`${path}`);
  };

  setUser(user) {
    this.setState({
      user: user
    });
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Toolbar className="menu">
          <IconButton
            aria-owns={anchorEl ? "simple-menu" : null}
            onClick={this.handleOpen}
            aria-label="More"
            aria-haspopup="true"
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200
              }
            }}
          >
            <MenuItem onClick={() => this.handleMenuClick("/")}>Home</MenuItem>
            <MenuItem onClick={() => this.handleMenuClick("/about")}>
              About
            </MenuItem>
          </Menu>
        </Toolbar>
      </div>
    );
  }
}

export default ApplicationBar;
