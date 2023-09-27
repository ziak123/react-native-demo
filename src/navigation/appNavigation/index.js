import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes,headers} from '../../services';
import * as App from '../../screens/appFlow';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <AppStack.Navigator
        screenOptions={headers.screenOptions}
            initialRouteName={routes.product}
        >
             <AppStack.Screen name={routes.product} component={App.Product}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen name={routes.mapscreen} component={App.MapScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen name={routes.userlist} component={App.UserList}
                options={{
                    headerShown: true,
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppNavigation