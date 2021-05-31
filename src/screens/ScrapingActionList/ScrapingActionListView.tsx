import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import { ScrapingResultModel } from "../../models/ScrapingResultModel";
import { ScrapingResult } from "./components/ScrapingResult";

export function ScrapingActionListView() {
    const [ baseURL, setBaseURL ] = useState("")
    const [ loading, setLoading ] = useState(false);
    const [ result, setResult ] = useState<ScrapingResultModel>();

    const onPressExecute = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    useEffect(() => {
        setResult({
            success: true,
            error_message: "TEST",
            url_resolved: ["test"]
        });
    }, []);

    return(
        <View>
            <TextInput label="Base URL" value={baseURL} onChangeText={it => setBaseURL(it)} />
            <Button mode="contained" disabled={loading} loading={loading} onPress={onPressExecute}> Execute </Button>
            { result && <ScrapingResult value={result} /> }
        </View>
    )
}