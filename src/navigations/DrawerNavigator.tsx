import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ActionChainListNavigator } from './ActionChainList';

export function DrawerNavigator() {
    const nav = createDrawerNavigator();

    return (
        <NavigationContainer>
            <nav.Navigator>
                <nav.Screen name="ActionChainListNavigator" component={ActionChainListNavigator}
                    options={{ title: "Action Chains" }} />
            </nav.Navigator>
        </NavigationContainer>
    );
}