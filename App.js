import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.text}>search</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style={"auto"} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
  },
  text: {
    padding: 16,
  },
});
