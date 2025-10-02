import { ScrollView, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const PatternDetails = ({ pattern }) => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.titleCard}>
        <Text style={styles.titleText}>{pattern.type}</Text>
      </Card>
      {pattern.note && (
        <Card style={styles.descriptionCard}>
          <Text style={styles.descriptionText}>{pattern.note}</Text>
        </Card>
      )}
      {pattern.list.map((item, index) => (
        <Card style={styles.subCard} key={index}>
          <Text style={styles.subText}>{item.word}</Text>
        </Card>
      ))}
      <Card style={styles.titleCard}>
        <Text style={styles.titleText}>Examples</Text>
      </Card>
      {pattern.examples.map((item, index) => (
        <Card style={styles.subCard} key={index}>
          <Text style={styles.subText}>{item}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e0e0",
    paddingBottom: 100,
  },
  titleCard: {
    margin: 15,
    padding: 30,
    backgroundColor: "#a348e9",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 20,
  },
  descriptionText: {
    fontFamily: "ComicNeueBold",
    fontSize: 20,
    color: "white",
  },
});

export default PatternDetails;
