import React from "react";
import { DrawerActions, useNavigation, useNavigationState } from "@react-navigation/native";
import { IconButton } from "react-native-paper";

function MenuIcon() {
    const navigation = useNavigation();
    const navigationState = useNavigationState(it => it);

    const isMainScreen = navigationState.index == 0;

    const onMenuPress = () => { navigation.dispatch(DrawerActions.toggleDrawer()); };
    const onBackPress = () => { navigation.goBack(); };

    return (isMainScreen ? <IconButton icon="menu" onPress={onMenuPress} /> : <IconButton icon="keyboard-backspace" onPress={onBackPress} />)
}

export function getDefaultScreenOptions() {
    return { headerLeft: (p: any) => <MenuIcon {...p} /> }
} 