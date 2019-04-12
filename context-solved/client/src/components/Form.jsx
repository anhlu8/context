import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import InputField from "./FormComp/InputField";
import { FormContextConsumer } from "../utils/FormContext";
import Divider from "@material-ui/core/Divider";
const uuidv4 = require("uuid/v4");

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class Form extends Component {
  state = {
    name: "",
    company: "",
    city: "",
    state: ""
  };
  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <FormContextConsumer>
        {value => (
          <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
              <Paper className={classes.paper}>
                {value.state.data.map(i => (
                  <Fragment key={uuidv4()}>
                    <InputField
                      key={uuidv4()}
                      value={this.state.name === "" ? i.name : this.state.name}
                      label="Name"
                      handleChange={this.handleInputChange}
                      name="name"
                    />

                    <InputField
                      key={uuidv4()}
                      value={
                        this.state.company === ""
                          ? i.company
                          : this.state.company
                      }
                      label="Company"
                      handleChange={this.handleInputChange}
                      name="company"
                    />

                    <InputField
                      key={uuidv4()}
                      value={this.state.city === "" ? i.city : this.state.city}
                      label="City"
                      handleChange={this.handleInputChange}
                      name="city"
                    />

                    <InputField
                      key={uuidv4()}
                      value={
                        this.state.state === "" ? i.state : this.state.state
                      }
                      label="State"
                      handleChange={this.handleInputChange}
                      name="state"
                    />

                    <Divider />
                  </Fragment>
                ))}
              </Paper>
            </main>
          </React.Fragment>
        )}
      </FormContextConsumer>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
