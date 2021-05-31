import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ActionChainListView } from "../../screens/ActionChainList/ActionChainListView";
import { ScrapingActionListView } from "../../screens/ScrapingActionList/ScrapingActionListView";
import { ActionChainListNavParams } from "./ActionChainListNavParams";

export function ActionChainListNavigator() {
    const nav = createStackNavigator<ActionChainListNavParams>();

    return (
        <nav.Navigator>
            <nav.Screen name="ActionChainList" component={ActionChainListView} options={{ title: "Action Chains" }} />
            <nav.Screen name="ScrapingAction" component={ScrapingActionListView} options={{ title: "Scraping Action" }} />
        </nav.Navigator>
    );
}