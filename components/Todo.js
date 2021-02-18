import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Color";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function Todo() {
  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <Ionicons
          name="chevron-back-outline"
          color={"#fff"}
          size={30}
        ></Ionicons>
        <Ionicons
          name="ellipsis-vertical-outline"
          color={"#fff"}
          size={30}
        ></Ionicons>
        <StatusBar style="auto" />
      </View>

      <View style={styles.topContainer}>
        <View style={styles.circularImage}>
          <Ionicons name="clipboard-outline" size={30}></Ionicons>
        </View>
        <Text style={styles.textHeading}> All</Text>
        <Text style={styles.text}> 23 Tasks</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.floatbutton}>
          <Ionicons name="add-outline" color={"#fff"} size={30}></Ionicons>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryBlue,
  },
  topBar: {
    marginHorizontal: 10,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topContainer: {
    marginVertical: 21,
    width: "100%",
    height: 180,
    justifyContent: "center",
    paddingLeft: 20,
  },
  circularImage: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginBottom: 9,
  },
  textHeading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 44,
  },
  text: {
    color: "#eee",
    fontSize: 21,
  },
  mainContainer: {
    width: "100%",
    height: 500,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  floatbutton: {
    width: 60,
    height: 60,
    position: "absolute",
    right: 40,
    bottom: 200,
    borderRadius: 30,
    backgroundColor: Colors.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
});
