import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import {Routes} from './src/routes';
import {home} from './src/pages/home';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}