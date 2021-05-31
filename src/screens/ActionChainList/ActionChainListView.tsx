import React, { useEffect, useState } from 'react';
import { Text } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { ActionChainModel } from '../../models/ActionChainModel';
import { ActionChainItem } from './componets/ActionChainItem';

export function ActionChainListView() {
    const [ actionChains, setActionChains ] = useState<ActionChainModel[]>([]);

    useEffect(()=> {
        setActionChains([
            { name: "TEST", actions: [] }
        ]);
    }, []);

    return (
        <ScrollView>
            { actionChains.map((it, i) => <ActionChainItem key={i} model={it} />) }
        </ScrollView>
    );
}