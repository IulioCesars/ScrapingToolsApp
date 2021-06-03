import React from "react";
import { Text, View } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { getGeneralStyles } from "../../../styles/GeneralStyles";
import { IsValidURL } from "../../../utils/Validations";
import Clipboard from 'expo-clipboard';
import { DownloadFile } from "../../../utils/Download";

export function ScrapingResultItem(props: { value: any }) {
    const { value } = props;
    const mainFields = ["id", "name"];
    const styles = getGeneralStyles();

    var fields = Object.keys(value)
        .map(it => {
            const fieldValue = value[it];
            return {
                name: it,
                value: fieldValue,
                index: mainFields.includes(it) ? -1 : 0,
                type: IsValidURL(fieldValue) ? 'URL' : 'Text'
            }
        }).sort((a, b) => a.index);
    
    const toTitleCase = (text: string) => {
        const [firstLetter, ...others] = text;
        return [firstLetter.toUpperCase(), ... others.map(it => it.toLowerCase())].join("");
    };
    const onCopyPress = (text: string) => { 
        Clipboard.setString(text);
        console.log("Copy")
    };
    const onDownloadPress = (url: string) => { 
        DownloadFile(url);
    };

    return (
        <Card style={styles.control} >
            <Card.Content>
            { fields.map((it, i) => 
                <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', paddingRight: 5 }} >{toTitleCase(it.name)}:</Text>
                    { it.type == 'Text' && <Text ellipsizeMode="tail" numberOfLines={1} >{it.value}</Text> } 
                    { it.type == 'URL' && 
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <IconButton icon="content-copy" onPress={() => onCopyPress(it.value)} />
                            <IconButton icon="download" onPress={() => onDownloadPress(it.value)} />
                        </View> 
                    }
                </View>
            )}
            </Card.Content>
        </Card>
    )
}
