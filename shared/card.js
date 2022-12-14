import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

{
  /* <Card>
  <Text>Hello</Text>
  <Text>Hi, How are you?</Text>
</Card>; */
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadow: "#333",
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 8,
  },
  cardContent: {},
});
