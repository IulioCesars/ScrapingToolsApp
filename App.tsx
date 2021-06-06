import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { setupDatabaseAsync } from './src/context/SQLiteContext';
import { DrawerNavigator } from './src/navigations/DrawerNavigator';

export default function App() {
  useEffect(()=> {
    setupDatabaseAsync()
      .then(() => console.log("INIT"))
      .catch(it => console.log("ERROR setupDatabaseAsync", it));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <DrawerNavigator />
    </SafeAreaView>
  );
}