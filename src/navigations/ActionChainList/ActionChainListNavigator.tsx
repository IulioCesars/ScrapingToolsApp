import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ActionChainListView } from "../../screens/ActionChainList/ActionChainListView";
import { ScrapingActionView } from "../../screens/ScrapingActionList/ScrapingActionView";
import { ActionChainListNavParams } from "./ActionChainListNavParams";
import { getDefaultScreenOptions } from "../ScreenOptions";

export function ActionChainListNavigator() {
    const nav = createStackNavigator<ActionChainListNavParams>();

    return (
        <nav.Navigator screenOptions={{ ...getDefaultScreenOptions() }} >
            <nav.Screen name="ActionChainList" component={ActionChainListView} options={{ title: "Action Chains" }} />
            <nav.Screen name="ScrapingAction" component={ScrapingActionView} options={{ title: "Scraping Action" }} />
        </nav.Navigator>
    );
}