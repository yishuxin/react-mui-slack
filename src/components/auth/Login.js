import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  FormHelperText,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import Image from '../../assets/ginger-cat.png'
import firebase from '../../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto 0',
    height: '100vh',
    width: '100vw',
    background:
      'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    '& > *': {
      margin: theme.spacing(2),
      width: '30ch',
    },
  },
  margin: {
    margin: theme.spacing(2),
  },
  form: {
    padding: '20px 20px',
    backgroundColor: 'white',
    height: '50vh',
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textField: {
    width: '25ch',
    display: 'block',
    zIndex: 1000,
  },
  imageContainer: {
    position: 'absolute',
    top: '-3%',
    left: '0',
    width: '50%',

    '& img': {
      width: '100%',
      height: '100%',
    },
  },
}))

const Login = () => {
  const { register, handleSubmit, errors, formState } = useForm()
  const history = useHistory()
  const classes = useStyles()

  const onSubmit = async ({ email, password }) => {
    try {
      await firebase.login(email, password)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Box as="section" className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          autoComplete="off"
          id="email"
          label="Email"
          className={clsx(classes.margin, classes.textField)}
          inputRef={register({
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          name="email"
          error={errors.email && Object.keys(errors.email).length > 0}
        />
        {errors.email && errors.email.type === 'required' && (
          <FormHelperText error>Email is required</FormHelperText>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <FormHelperText error>Email is not valid</FormHelperText>
        )}
        <TextField
          className={clsx(classes.margin, classes.textField)}
          type="password"
          id="password"
          label="Password"
          inputRef={register({ required: true })}
          name="password"
        />
        {errors.password && (
          <FormHelperText error>Password is required</FormHelperText>
        )}
        <Button
          type="submit"
          variant="outlined"
          className={classes.margin}
          disabled={Object.keys(errors).length > 0}
          style={{ zIndex: 1000 }}
        >
          {!formState.isSubmitting ? 'Login ' : <CircularProgress size={20} />}
        </Button>
        <Typography className={classes.margin} color="primary">
          Don't have an account?
        </Typography>
        <Button component={Link} to={'/register'} variant="contained">
          Register
        </Button>
      </form>
      <div className={classes.imageContainer}>
        <img src={Image} alt="" />
      </div>
    </Box>
  )
}

export default Login
