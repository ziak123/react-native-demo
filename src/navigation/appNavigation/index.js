import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes,headers} from '../../services';
import * as App from '../../screens/appFlow';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <AppStack.Navigator
        screenOptions={headers.screenOptions}
            initialRouteName={routes.mapscreen}
        >
            <AppStack.Screen name={routes.mapscreen} component={App.MapScreen}
                options={{
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppNavigation