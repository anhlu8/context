import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const OutlinedTextFields = ({ classes, label, value, handleChange, name }) => {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        label={label}
        value={value}
        onChange={handleChange(name)}
      />
    </form>
  );
};

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
