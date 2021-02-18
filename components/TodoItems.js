import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

export default function TodoItems() {
  const [isSelected, setSelction] = useState(false);

  return (
    <ScrollView>
      <View style={styles.ContainerData}>
        <View>
          <Text> Call Max</Text>
          <Text> 20:15- April 29</Text>
        </View>
        <CheckBox
          value={isSelected}
          onValueChange={setSelction}
          style={styles.checkBox}
        ></CheckBox>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ContainerData: {
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 28,
    paddingLeft: 25,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  checkBox: {
    marginRight: 25,
    paddingTop: 45,
  },
  todoItems: {},
});
