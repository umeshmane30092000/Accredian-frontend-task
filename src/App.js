// App.js
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const switchForm = (form) => {
    setCurrentForm(form);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} md={6}>
        {currentForm === 'login' ? <LoginForm switchForm={switchForm} /> : <SignUpForm switchForm={switchForm} />}
      </Grid>
    </Grid>
  );
};

export default App;
