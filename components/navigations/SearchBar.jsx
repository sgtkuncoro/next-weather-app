import React from "react";
import { MenuItem, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const SearchField = ({ handleChange, activeCity, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <MenuItem>
        <TextField
          placeholder="Search Location"
          type="text"
          fullWidth
          onChange={handleChange}
          value={activeCity}
          label="Search Location"
        />
        {/* <Button
          type="submit"
          onClick={handleSubmit}
          className="location-button"
        >
          <i className="fas fa-search" />
        </Button> */}
      </MenuItem>
    </form>
  </div>
);

export default SearchField;
