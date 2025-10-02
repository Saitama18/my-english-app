import { useState, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  View,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import adjectives from "../assets/data/Adjectives.json";

const Adjectives = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [filteredVerbs, setFilteredVerbs] = useState(adjectives);

  useEffect(() => {
    const filtered = adjectives.filter((adj) =>
      adj.type.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredVerbs(filtered);
  }, [search]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={filteredVerbs}
        keyExtractor={(item) => item.type}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.item}
            onPress={() => onSelect(item)}
          >
            <Text style={styles.text}>{item.type}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 25,
    borderBottomWidth: 1,
    alignItems: "center",
    backgroundColor: "#319CF5",
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 40,
  },
  listContent: {
    flexGrow: 1,
    justifyContent: "center", // centra verticalmente si hay pocos ítems
    alignItems: "stretch",
    padding: 30,
  },
  text: {
    fontFamily: "ComicNeueBold",
    fontSize: 22,
    color: "white",
  },
  list: {
    backgroundColor: "#e2e0e0",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Adjectives;
