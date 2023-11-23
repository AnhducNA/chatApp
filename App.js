import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import AuthStack from "./app/Navigation/AuthStack";
import AppStack from "./app/Navigation/AppStack";
import {COLORS} from "./app/Component/Constant/Color";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                detachInactiveScreens={false}
                initialRouteName={'Auth'}
                screenOptions={{
                    headerShown: false,
                    cardStyle: {backgroundColor: COLORS.white},
                    gestureEnabled: true,
                    backgroundColor:COLORS.button,
                    gestureDirection: 'horizontal',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                <Stack.Screen name="Auth" component={AuthStack}/>
                <Stack.Screen name="App" component={AppStack}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

