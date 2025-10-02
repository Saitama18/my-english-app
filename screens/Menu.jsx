import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const MenuP = ({ onSelect }) => {
  //console.log("Hola");
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelect("Grammar list")}>
        <Card style={styles.card}>
          <Text style={styles.text}>Grammar</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect("List of verbs")}>
        <Card style={styles.card}>
          <Text style={styles.text}>Verbs</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect("Types of adjectives")}>
        <Card style={styles.card}>
          <Text style={styles.text}>Adjectives</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect("Verb Patterns")}>
        <Card style={styles.card}>
          <Text style={styles.text}>Verb Patterns</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e2e0e0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    margin: 20,
    padding: 40,
    backgroundColor: "#319CF5", //Morado -> #a348e9, Verde azulado /> #009688
    alignItems: "center",
  },
  text: {
    fontFamily: "ComicNeueBold",
    fontSize: 30,
    color: "#fff",
  },
});

export default MenuP;
