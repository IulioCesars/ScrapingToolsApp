import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { List } from "react-native-paper";
import { ActionChainModel } from "../../../models/ActionChainModel";
import { ScreenActionNavigationProp } from "../../../navigations/ActionChainList/ActionChainListNavParams";


export function ActionChainItem(props: {model: ActionChainModel }) {
    const { model } = props;
    const [expanded, setExpanded] = useState(false);
    const navigator = useNavigation<ScreenActionNavigationProp>();
    
    const onPressAccordion = () => setExpanded(!expanded);
    const onPressAddNew = () => {
        navigator.navigate("ScrapingAction", { 
            scrapingTask: {
                template: model.name,
                baseURL: "",
                taskName: ""
            }
         });
    };

    return (
        <List.Accordion title={model.name} 
            expanded={expanded} 
            onPress={onPressAccordion} 
            left={p => <List.Icon {...p} icon="folder" />}
            >
            <List.Item title="Add new" onPress={onPressAddNew} left={p => <List.Icon {...p} icon="plus" />} />
        </List.Accordion>
    )
}