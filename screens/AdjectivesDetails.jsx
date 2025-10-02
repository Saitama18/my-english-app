import React from "react";
import { ScrollView, Text, StyleSheet, View, FlatList } from "react-native";
import { Card } from "react-native-paper";
//import adj from "../assets/data/Adjectives.json";
const AdjectivesDetails = ({ adjective }) => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.titleCard}>
        <Text style={styles.titleText}>{adjective.type}</Text>
      </Card>
      <Card style={styles.descriptionCard} mode="contained">
        <Text style={styles.descriptionText}> {adjective.description} </Text>
      </Card>
      {adjective.adjectives.map((item, index) => (
        <Card style={styles.subCard} key={index} mode="contained">
          <Text style={styles.subText}>{item.word}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e0e0",
  },
  titleCard: {
    margin: 15,
    padding: 30,
    backgroundColor: "#a348e9",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "ComicNeueBold",
    fontSize: 35,
    color: "#fff",
  },
  descriptionCard: {
    marginBottom: 15,
    marginStart: 15,
    marginEnd: 15,
    padding: 30,
    backgroundColor: "#009688",
  },
  subCard: {
    marginTop: 15,
    marginStart: 50,
    marginEnd: 50,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#e9a347",
  },
  subText: {
    fontFamily: "ComicNeueBold",
    fontSize: 20,
  },
  descriptionText: {
    fontFamily: "ComicNeueBold",
    fontSize: 20,
    color: "white",
  },
});

export default AdjectivesDetails;
