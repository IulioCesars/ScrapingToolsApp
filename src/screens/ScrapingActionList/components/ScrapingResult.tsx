import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ScrapingResultModel } from "../../../models/ScrapingResultModel";
import { ScrapingResultItem } from "./ScrapingResultItem";

export function ScrapingResult(props: { value: ScrapingResultModel }) {
    const { value } = props;



    return (
        <View>
            { !value.success && <Text style={{ color:'red', fontWeight: 'bold' }} >ERROR: {value.error_message}</Text> }
            <ScrollView>
                { value.url_resolved.map((it, i) => <ScrapingResultItem key={i} value={it} />) }
            </ScrollView>
        </View>
    )
}