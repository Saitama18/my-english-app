import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import pattern from "../assets/data/VerbPatterns.json";

const VerbPatterns = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pattern}
        keyExtractor={(item) => item.type}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Text style={styles.text}>{item.type}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e0e0",
  },
  listContent: {
    flexGrow: 1,
    justifyContent: "center", // centra verticalmente si hay pocos ítems
    alignItems: "stretch",
    padding: 30,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#319CF5",
    borderRadius: 15,
    paddingHorizontal: 50,
    paddingVertical: 25,
    marginVertical: 10,
    alignItems: "center",
  },
  text: {
    fontFamily: "ComicNeueBold",
    textAlign: "center",
    fontSize: 22,
    color: "white",
  },
});

export default VerbPatterns;
