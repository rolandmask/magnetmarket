/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>({
  depositContext: {
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  
}));

export default function Upload() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{justifyContent:'center', textAlign:'center', padding:'20px'}}>
        <Title>INSTANT LISTING</Title>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Upload Files
          </Button>
        </label>
        <Typography color="textSecondary" className={classes.depositContext}>
          or
        </Typography>
        
            <Link color="primary" href="javascript:;">
              Link URL
            </Link>
          <div>
        </div>
      </div>
    </React.Fragment>
  );
}
