import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    height: 32,
    flexGrow: 1,
    maxWidth: 1440,
    fontSize: 12,
    paddingTop: 8,
    color: '#7B8082',
  }
});


const index = () => {
  const classes = useStyles();
  return (
    <Box
    style={{
      backgroundColor: "#F7F8F8",
      fontWeight: "bold",
      textTransform: "capitalize",
      padding: '0 140px 0 0',
      textAlign: 'right'
    }}
    >
      <Button className={classes.root}>English</Button>
    </Box>
  )
}

export default index