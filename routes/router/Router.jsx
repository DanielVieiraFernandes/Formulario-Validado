import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './Routers';

export default _ => {
  return (
    <NavigationContainer>
      <Routers/>
    </NavigationContainer>
  );
}