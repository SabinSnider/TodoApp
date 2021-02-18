import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Pressable,
} from "react-native";
import Colors from "./constants/Color";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ModalDemo from "./components/modal";
import TodoItems from "./components/TodoItems";
import FormData from "./components/Form";

export default function App() {
  // const [isSelected, setSelction] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <ModalDemo></ModalDemo>
    //<FormData></FormData>
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
        <ScrollView>
          <TodoItems></TodoItems>
          <TodoItems></TodoItems>
          <TodoItems></TodoItems>
          <TodoItems></TodoItems>
          <TodoItems></TodoItems>
          <TodoItems></TodoItems>
        </ScrollView>
        <Pressable style={styles.floatbutton} onPress={() => setIsOpen(true)}>
          <Ionicons name="add-outline" color={"#fff"} size={30}></Ionicons>
        </Pressable>
        <Modal
          visible={isOpen}
          transparent
          animationType="slide"
          statusBarTranslucent
        >
          <View style={styles.formcontainer}>
            <View style={styles.topbar}>
              <Text></Text>
              <Text style={styles.heading}> New Task</Text>
              <Ionicons
                name="close-outline"
                color={"#111"}
                size={30}
                onPress={() => setIsOpen(false)}
              ></Ionicons>
            </View>
            <FormData></FormData>
          </View>
          {/* <Button
                title="CloseModal"
                onPress={() => setIsOpen(false)}
              ></Button>
            */}
        </Modal>
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
  modalView: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBody: {
    padding: 30,
    backgroundColor: "#fff",
  },
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
});
