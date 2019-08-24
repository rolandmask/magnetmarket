/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, ItemID, paymentMethod, amount) {
  return { id, date, name, ItemID, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'BK-28192', 'XLM -> MAG', 3000),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'DL-23234', 'XLM -> MAG', 865),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'VID-38138', 'MAG -> MAG', 100),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'EP-22313', 'BTC -> MAG', 12000),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'BK-38183', 'XLM -> MAG', 220),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Item ID</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount(MAG)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.ItemID}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
