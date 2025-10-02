import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import grammar from "../assets/data/Grammar.json";

const GrammarList = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={grammar}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 25,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    backgroundColor: "#319CF5",
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 40,
  },
  text: {
    fontFamily: "ComicNeueBold",
    fontSize: 22,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e2e0e0",
  },
});

export default GrammarList;
