import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Screen/Home";
import User from "../Screen/User";
import Auth from "../Screen/Auth";

const Stack = createStackNavigator();
const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AllUser" component={User} />
            <Stack.Screen name="SingleChat" component={Auth} />
        </Stack.Navigator>
    );
};

export default AppStack;