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
import TextField from '@material-ui/core/TextField';
import logo from '../images/logo.svg'


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "white",
    padding:"50px",
    width:"100%",
    margin:"auto",
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
    paddingTop: '46.25%', // 16:9
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
        <div style={{width:"100vw", margin:"auto"}}>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              
            <center><img src={logo} alt="HTML5" width={100} height={100}></img></center>

              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                <TextField
                    label="Search"
                    type="search"
                    variant="outlined"
                    style={{width:"20vw"}}
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

          <div style={{width:"80vw", margin:"auto"}}>
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
          </div>
        </div>
      </main>

      

    </React.Fragment>
  );
}