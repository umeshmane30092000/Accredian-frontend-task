// LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';

const LoginForm = ({ switchForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //  To Perform login logic
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form style={{ width: '100%', marginTop: '20px' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username or Email"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="button" fullWidth variant="contained" color="primary" onClick={handleLogin}>
            Sign In
          </Button>
        </form>
        <Button fullWidth color="primary" onClick={() => switchForm('signup')}>
          Don't have an account? Sign Up
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginForm;
