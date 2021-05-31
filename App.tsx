import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigator } from './src/navigations/DrawerNavigator';

export default function App() {
  return (
      <DrawerNavigator />
  );
}