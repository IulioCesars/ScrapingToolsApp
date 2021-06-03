import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ActionChainModel } from '../../models/ActionChainModel';
import { ScrapingToolsService } from '../../services/ScrapingToolsService';
import { ActionChainItem } from './componets/ActionChainItem';

export function ActionChainListView() {
    const [ actionChains, setActionChains ] = useState<ActionChainModel[]>([]);

    useEffect(()=> {
        var service = new ScrapingToolsService();
        service.getChainCollections()
            .then(it => {
                setActionChains(it.map(x => { return { name: x, actions: [] }; }))
            });
    }, []);

    return (
        <ScrollView>
            { actionChains.map((it, i) => <ActionChainItem key={i} model={it} />) }
        </ScrollView>
    );
}