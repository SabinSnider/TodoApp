import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Color";
export default function FormData() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <View style={styles.formcontainer}>
    //    <View style={styles.topbar}>
    //     <Text></Text>
    //     <Text style={styles.heading}> New Task</Text>
    //     <Ionicons
    //       name="close-outline"
    //       color={"#111"}
    //       size={30}
    //       onPress={() => setIsOpen(false)}
    //     ></Ionicons>
    //   </View>
    <View style={styles.formBody}>
      <View style={styles.input}>
        <Text style={{ color: "#777" }}> What are you planning?</Text>
        <TextInput
          multiline
          maxLength={900}
          numberOfLines={4}
          allowFontScaling
          style={{ borderBottomWidth: 2 }}
        />
      </View>
      <View style={styles.Contents}>
        <Ionicons
          name="notifications-outline"
          color={Colors.primaryBlue}
          size={25}
        />
        <Text style={styles.description}> May 29, 14:00</Text>
      </View>
      <View style={styles.Contents}>
        <Ionicons
          name="document-outline"
          color={Colors.primaryBlue}
          size={25}
        />
        <Text style={styles.description}>Add note</Text>
      </View>
      <View style={styles.Contents}>
        <Ionicons
          name="pricetag-outline"
          color={Colors.primaryBlue}
          size={25}
        />
        <Text style={styles.description}>Category</Text>
      </View>
      <View style={styles.createbutton}>
        <Text style={styles.createText}>Create</Text>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  formcontainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  heading: {
    fontSize: 21,
    fontWeight: "100",
  },
  input: {
    marginHorizontal: 25,
    marginBottom: 30,
  },
  formBody: {
    width: "100%",
    height: 200,
    marginTop: 30,
  },
  Contents: {
    flexDirection: "row",
    marginHorizontal: 18,
    marginBottom: 8,
  },
  description: {
    padding: 5,
    marginLeft: 10,
  },
  createbutton: {
    width: "100%",
    height: 50,
    marginTop: 40,
    backgroundColor: "#5786FF",
    justifyContent: "center",
    alignItems: "center",
  },
  createText: {
    color: "#fff",
    fontSize: 18,
  },
});
