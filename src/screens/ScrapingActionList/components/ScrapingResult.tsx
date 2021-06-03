import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ScrapingResultModel } from "../../../models/ScrapingResultModel";
import { getGeneralStyles } from "../../../styles/GeneralStyles";
import { ScrapingResultItem } from "./ScrapingResultItem";

export function ScrapingResult(props: { value: ScrapingResultModel }) {
    const { value } = props;
    const styles = getGeneralStyles();

    return (
        <View style={{ flex: 1 }}>
            { !value.success && <Text style={{ ...styles.control, color:'red', fontWeight: 'bold' }} >ERROR: {value.error_message}</Text> }
            <ScrollView scrollEnabled style={styles.control} >
                { value.url_resolved.map((it, i) => <ScrapingResultItem key={i} value={it} />) }
            </ScrollView>
        </View>
    )
}