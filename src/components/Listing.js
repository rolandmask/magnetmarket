import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Upload from './ListingUpload';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
    height: 160,
  },
}));


export default function Listing() {
  const classes = useStyles();

  return (
    <div id="ListingForm">
      
      <CssBaseline />
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Listing Form
      </Typography>
      <Grid container spacing={3} style={{marginTop:'20px'}}>

      <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          + ADD PHOTO
        </Button>
     </CardActions>

    </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Upload/>
        </Grid>
             
      <Grid item xs={12} sm={6}>
          <TextField
            
            required
            label="ITEM NAME"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="PRICE"
            fullWidth
            variant="outlined"
          />
        </Grid>
                <Grid item xs={12} sm={6}>
          <TextField
            required
            label="QUANTITY"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} >
        <TextField
        label="DESCRIPTION"
        multiline
        rows="4"
        margin="normal"
        variant="outlined"
        fullWidth
      />
        </Grid>
        
        <Grid item xs={12} >
          <FormControlLabel
            control={<Checkbox color="default" value="yes" style={{color: "#5fc092"}} />}
            label="PHYSICAL ITEM"
          />
        </Grid>
        <grid>
          <Button onClick={() => {alert('Item Listed!')}} 
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", padding: "16px"}} 
          >
            List Item Now
          </Button>
         
        </grid> 
      </Grid>
    </React.Fragment>
      <Box mt={8}>
    </Box>
    </div>
  );
}