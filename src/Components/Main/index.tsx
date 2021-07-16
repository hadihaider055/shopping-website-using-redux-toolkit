import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Home from "../Home";
import Checkout from "../Checkout";
import ScrollToTop from "../Scroll To Top";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#efefef",
    margin: "0 auto",
  },
});

const Main = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Checkout />
          </Route>
        </Switch>

        <BottomNavigation
          style={{ marginTop: "300px" }}
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="Home"
            component={Link}
            to="/"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/cart"
            label="Cart"
            value="Cart"
            icon={<ShoppingCartIcon />}
          />
        </BottomNavigation>
      </Router>
    </>
  );
};

export default Main;
