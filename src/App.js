import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Signup from "./components/Signup";
import ItemPage from "./components/ItemPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Listing from "./components/Listing";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://magnet.market/">
        Magnet Market
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">

        <BrowserRouter>
          <div>
            <Navigation/>
                <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/ItemPage" component={ItemPage}/>
                  <Route path="/Signup" component={Signup}/>
                  <Route path="/Dashboard" component={Dashboard}/>
                  <Route path="/Login" component={Login}/>
                  <Route path="/Listing" component={Listing}/>
                  <Route component={Error}/>
                </Switch>
          </div>
        
        </BrowserRouter>
     {/* Footer */}
     <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Terms and policies ·&nbsp;
          News ·&nbsp;
          Links 
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}

export default App;
