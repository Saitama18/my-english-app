// src/components/ListaDeVerbos.js
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import verb from "../assets/data/Verbs.json";
import { TextInput } from "react-native-paper";

const ListVerbs = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [filteredVerbs, setFilteredVerbs] = useState(verb);

  useEffect(() => {
    const filtered = verb.filter((verb) =>
      verb.base.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredVerbs(filtered);
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search verb"
        value={search}
        onChangeText={setSearch}
        mode="outlined"
        underlineColor="none"
        outlineStyle={{ borderRadius: 15 }}
      />
      <FlatList
        data={filteredVerbs}
        keyExtractor={(item) => item.base}
        numColumns={2} // <- Muestra en 2 columnas
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Text style={styles.text}>{item.base}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e0e0",
    paddingBottom: 100,
  },
  listContent: {
    flexGrow: 1,
    //justifyContent: "flex-end", // Centrado vertical
    alignItems: "baseline", // Centrado horizontal
    padding: 10,
  },
  row: {
    //justifyContent: "center", // Espacio entre columnas
    marginBottom: 10,
  },
  item: {
    width: "40%",
    height: "90%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#319CF5",
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  text: {
    fontFamily: "ComicNeueBold",
    fontSize: 22,
    color: "white",
  },
  searchBar: {
    padding: 5,
    marginHorizontal: 20,
    backgroundColor: "#e2e0e0",
  },
});

export default ListVerbs;
