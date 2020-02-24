import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home/Home'
import SignIn from '../Screens/SignIn/SignIn'


const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator headerMode='screen' initialRouteName="SIGNIN">
    <AuthStack.Screen name={"SIGNIN"} component={SignIn} />
    {/* <AuthStack.Screen name={"SIGNUP"} component={SignUp} /> */}
  </AuthStack.Navigator>
);

const HomeNavigator = () => (
  <HomeStack.Navigator headerMode='screen' initialRouteName="HOME">
    <HomeStack.Screen name={"HOME"} component={Home} />
  </HomeStack.Navigator>
);

export default class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator headerMode='none' initialRouteName="AuthNavigator">
          <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
          <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    )
  }
}