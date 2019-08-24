import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default function Listing() {
 

  return (
    <div id="ListingForm">
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Listing Form
      </Typography>
      <Grid container spacing={3}>
             
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="address1"
            label="ITEM NAME"
            fullWidth
          />
        </Grid>
                <Grid item xs={12} sm={6}>
          <TextField
            required
            label="PRICE"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField  label="DESCRIPTION" fullWidth />
        </Grid>
        
        <Grid item xs={12} >
          <FormControlLabel
            control={<Checkbox color="default" value="yes" style={{color: "#5fc092"}} />}
            label="PHYSICAL ITEM"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" value="yes" style={{color: "#5fc092"}} />}
            label="SERVICE"
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
    </div>
  );
}