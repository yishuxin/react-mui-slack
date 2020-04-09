import React from 'react'

import { AppBar, Toolbar, Box, Button } from '@material-ui/core'

import { NavLink as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import firebase from '../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  grow: {
    flexGrow: 1,
  },
  list: {
    display: 'flex',
  },
  item: {
    color: 'white',
  },
  toolBar: {
    backgroundColor: 'red',
  },
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar color="transparent">
        <Box as="nav">
          <Toolbar>
            <div>logo</div>
            <div className={classes.grow} />
            <Button onClick={() => firebase.logout()}>Logout</Button>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  )
}

export default Navbar
