import React from "react";
import { StyleSheet } from "react-native";

export function getGeneralStyles() 
{
    return StyleSheet.create({
        container: {
            padding: 10,
            flex: 1
        },
        control: {
            marginTop: 5,
            marginEnd: 5
        }
    });
}