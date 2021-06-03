import { useRoute } from "@react-navigation/core";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, IconButton, TextInput } from "react-native-paper";
import { ActionChainModel } from "../../models/ActionChainModel";
import { ScrapingResultModel } from "../../models/ScrapingResultModel";
import { ScreenActionProps, ScreenActionRouteProp } from "../../navigations/ActionChainList/ActionChainListNavParams";
import { ScrapingToolsService } from "../../services/ScrapingToolsService";
import { getGeneralStyles } from "../../styles/GeneralStyles";
import { ScrapingResult } from "./components/ScrapingResult";

export function ScrapingActionView(props: ScreenActionProps) {
    const [ baseURL, setBaseURL ] = useState("")
    const [ loading, setLoading ] = useState(false);
    const [ result, setResult ] = useState<ScrapingResultModel>();
    const styles = getGeneralStyles();


    const { scrapingTask } = props.route.params;

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: (p) => 
                <View style={{ flex: 1, flexDirection: 'row' }}> 
                    {/* <IconButton color={p.tintColor} icon="lock-open" /> */}
                    <IconButton color={p.tintColor} icon="content-save" onPress={onPressSave} />
                </View>
        });
    }, [props.navigation]);

    useEffect(() => {
        if(scrapingTask.baseURL)
            setBaseURL(scrapingTask.baseURL);
    }, []);

    const onPressExecute = () => {
        if(baseURL.trim().length == 0)
        {
            console.log("Error")
            return;
        }

        var service = new ScrapingToolsService();
        setLoading(true)
        service.exec(baseURL, scrapingTask.template)
            .then(it => 
            {
                setResult(it)
            })
            .catch(it => console.log(it))
            .finally(() => setLoading(false))
    };

    const onPressSave = () => {

    };

    return(
        <View style={styles.container} >
            { (scrapingTask.taskName ?? '') != '' && <Text style={{ ... styles.control, fontWeight: 'bold' }}>Task Name: {scrapingTask.taskName}</Text> }
            <Text style={{ ... styles.control, fontWeight: 'bold' }}>Action Name: {scrapingTask.template}</Text>
            <TextInput disabled={loading} style={styles.control} label="Base URL" value={baseURL} onChangeText={it => setBaseURL(it)} />
            <Button style={styles.control} mode="contained" disabled={loading} loading={loading} onPress={onPressExecute}> Execute </Button>
            { result && <ScrapingResult value={result} /> }
        </View>
    )
}