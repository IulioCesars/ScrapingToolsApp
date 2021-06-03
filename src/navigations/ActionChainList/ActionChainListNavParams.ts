import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ActionChainModel } from "../../models/ActionChainModel";
import { ScrapingTask } from "../../models/ScrapingTask";

export type ActionChainListNavParams = {
    ActionChainList: undefined,
    ScrapingAction: {
        scrapingTask: ScrapingTask
    }
}

export type ScreenActionRouteProp = RouteProp<ActionChainListNavParams, 'ScrapingAction'>;
export type ScreenActionNavigationProp = StackNavigationProp<ActionChainListNavParams, 'ScrapingAction'>
export type ScreenActionProps = { route: ScreenActionRouteProp, navigation: ScreenActionNavigationProp }
