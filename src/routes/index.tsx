import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';

export function Routes() {
  const [ authlogin, setAuthlogin ] = useState(true);
  function handleAuthLogin(){
    setAuthlogin(false);
  }
  return (
    <NavigationContainer>
      {authlogin ? <SignIn handleAuthLogin={handleAuthLogin} /> : <AppRoutes  />}
    </NavigationContainer>
  )
}