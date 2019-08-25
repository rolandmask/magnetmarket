import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../images/logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://magnet.market/">
        Magnet.Market
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 380,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function ItemPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div id="ItemPage">
      <CssBaseline />
    <React.Fragment>
      <Grid container spacing={3}>
             
        <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Product"
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <SearchIcon /> More
        </Button>
      
      </CardActions>
    </Card>
        </Grid>
                <Grid item xs={12} sm={6}>
                <Typography id="ItemTxt" variant="h4" gutterBottom>
                ITEM NAME
                </Typography>

                <Typography variant="body2" gutterBottom style={{ marginBottom: "20px"}} >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>

          <Button onClick={() => {alert('Item Bought!')}} 
            variant="contained"
            color="primary"
            style={{ margin: "2px", padding: "14px",}} 
          >
            BUY NOW
          </Button>
          &nbsp;
          <Button onClick={() => {alert('Item Added to cart!')}} 
            variant="contained"
            color="default"
            style={{ margin: "2px", padding: "14px", }} 
          >
            + <CartIcon/>
          </Button>

        </Grid>
        <Grid item xs={12} >

        <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="User Reviews" {...a11yProps(1)} />
       
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="body2" gutterBottom style={{ color:"gray"}}>
        Detailed description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography variant="body2" gutterBottom  style={{ color:"gray"}}>
      User review: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </TabPanel>
     
     
    </div>

        </Grid>
      </Grid>
    </React.Fragment>
    <Box mt={8}>
        <Copyright />
    </Box>
    </div>
  );
}