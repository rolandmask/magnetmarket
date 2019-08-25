import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import logo from '../images/logo.svg'

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            
          <center><img src={logo} alt="HTML5" width={100} height={100}></img></center>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
               <TextField
                  id="outlined-search"
                  label="Search"
                  type="search"
                  className={classes.textField}
                  
                  variant="outlined"
               />
               <Button id="searchButton" variant="contained" color="primary" className={classes.button}>
                  SEARCH
              </Button>
                </Grid>
                <Grid item>
                 
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="1">
        <span style={{padding:'10px', textAlign:'left'}}>RECOMMENDED LISTINGS</span>
          {/* End hero unit */}

          {/* Listings */}
          <Grid container spacing={4} style={{padding:'10px'}}>            
            {cards.map(card => (
              <Grid item key={card} xs={6} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/1600x900/?sell"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Item
                    </Typography>
                    <Typography>
                      Section to describe the content.
                    </Typography>
                    <Typography>
                      <strong>1000 MAG</strong>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                    size="small" 
                    color="primary"
                    style={{
                      backgroundColor: "#5fc092",
                      color:'white'
                  }}>
                      BUY
                    </Button>
                    <Button 
                    size="small" 
                    color="primary">
                      VIEW
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End of listings */}

        </Container>
      </main>

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

    </React.Fragment>
  );
}