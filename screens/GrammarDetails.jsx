import { ScrollView, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const GrammarDetails = ({ grammar }) => {
  return (
    <ScrollView>
      <Card style={styles.titleCard}>
        <Text style={styles.titleText}>{grammar.name}</Text>
      </Card>
      <Card style={styles.descriptionCard} mode="contained">
        <Text style={styles.descriptionText}>{grammar.description}</Text>
      </Card>
      <Card style={styles.descriptionCard} mode="contained">
        <Text style={styles.descriptionText}>{grammar.structure}</Text>
      </Card>
      <Card style={styles.examplesCard}>
        <Text style={styles.titleText}>Examples</Text>
      </Card>
      {grammar.examples.map((exa, index) => (
        <Card style={styles.subCard} key={index} mode="contained">
          <Text style={styles.subText}>{exa}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    textAlign: "center",
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
    fontSize: 25,
  },
  descriptionText: {
    fontFamily: "ComicNeueBold",
    fontSize: 25,
    color: "white",
  },
  examplesCard: {
    padding: 10,
    marginTop: 20,
    marginStart: 100,
    marginEnd: 100,
    alignItems: "center",
    backgroundColor: "#a348e9",
  },
});

export default GrammarDetails;
