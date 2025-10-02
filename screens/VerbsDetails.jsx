// src/components/DetalleVerbo.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-paper";

const VerbDetails = ({ verb }) => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>{verb.base}</Text>
      </Card>

      <Card style={styles.subcard} mode="contained">
        <Text style={styles.text}>Type: {verb.type}</Text>
      </Card>
      <Card style={styles.subcard} mode="contained">
        <Text style={styles.text}>Infinitive: To {verb.base}</Text>
      </Card>
      <Card style={styles.subcard} mode="contained">
        <Text style={styles.text}>Past: {verb.past}</Text>
      </Card>
      <Card style={styles.subcard} mode="contained">
        <Text style={styles.text}>Participle: {verb.participle}</Text>
      </Card>
      <Card style={styles.subcard} mode="contained">
        <Text style={styles.text}>Continous: {verb.continous}</Text>
      </Card>
      <Card style={styles.subcard} mode="contained">
        <Text style={styles.text}>Present: </Text>
        {Object.entries(verb.present).map(([present, forma], index) => (
          <Text style={styles.text} key={index}>
            {" "}
            • {present}: {forma}
          </Text>
        ))}
      </Card>

      <Card style={styles.card}>
        <Text style={styles.title}>Examples:</Text>
      </Card>
      {verb.examples.map((ejemplo, index) => (
        <Card style={styles.subcard} key={index} mode="contained">
          <Text style={styles.text}>• {ejemplo}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 30,
    backgroundColor: "#e2e0e0", // #FF6F61 -> Color salmon  //  #F5F7FA -> color blanco grisaseo // #1E1E1E -> negro   // #282C34 -> gris obscuro
  },
  title: {
    fontSize: 35,
    fontFamily: "ComicNeueBold",
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 25,
    marginBottom: 10,
    fontFamily: "ComicNeueBoldItalic",
    color: "#1E1E1E",
    textAlign: "center",
  },
  card: {
    margin: 25,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#a348e9",
    textDecorationColor: "#fff",
  },
  subcard: {
    padding: 15,
    marginStart: 30,
    marginEnd: 30,
    marginBottom: 15,
    backgroundColor: "#e9a347", //  color azul verdoso
    //alignItems: "center",
    //alignContent: "center",
  },
});

export default VerbDetails;
