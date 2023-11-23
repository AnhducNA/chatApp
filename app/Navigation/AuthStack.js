import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from "../Screen/Home";
import User from "../Screen/User";
import Auth from "../Screen/Auth";
import Login from "../Screen/Auth/Login";
import Register from "../Screen/Auth/Register";
import {COLORS} from "../Component/Constant/Color";

const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor: 'green'},
                gestureEnabled: true,
                backgroundColor:COLORS.button,
                gestureDirection: 'horizontal',
                ...TransitionPresets.SlideFromRightIOS,
            }}
            initialRouteName={'Login'}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    );
};
