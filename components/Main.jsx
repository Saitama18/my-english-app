import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

import MenuP from "../screens/Menu.jsx";
import VerbsList from "../screens/VerbsList.jsx";
import VerbDetails from "../screens/VerbsDetails.jsx";
import Adjectives from "../screens/Adjectives.jsx";
import AdjectivesDetails from "../screens/AdjectivesDetails.jsx";
import GrammarList from "../screens/Grammar.jsx";
import GrammarDetails from "../screens/GrammarDetails.jsx";
import VerbPatterns from "../screens/VerbPatterns.jsx";
import PatternDetails from "../screens/VerbPatternDetails.jsx";

const Stack = createNativeStackNavigator();

export function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "#e2e0e0" } }}
      >
        <Stack.Screen name="Menu" component={PrincipalMenu} />
        <Stack.Screen name="List of verbs" component={VerbList} />
        <Stack.Screen name="Verb details" component={VerbDetailsScreen} />
        <Stack.Screen name="Types of adjectives" component={AdjectivesType} />
        <Stack.Screen
          name="Adjectives details"
          component={AdjectivesDetailsScreen}
        />
        <Stack.Screen name="Grammar list" component={GrammarScreen} />
        <Stack.Screen name="Grammar details" component={GrammarDetailsScreen} />
        <Stack.Screen name="Verb Patterns" component={VerbPatternsScreen} />
        <Stack.Screen
          name="Verb Patterns Details"
          component={VerbPatternsDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const PrincipalMenu = ({ navigation }) => (
  <MenuP onSelect={(pantalla) => navigation.navigate(pantalla)} />
);

const VerbList = ({ navigation }) => (
  <VerbsList
    onSelect={(verb) => navigation.navigate("Verb details", { verb })}
  />
);

const VerbDetailsScreen = ({ route }) => (
  <VerbDetails verb={route.params.verb} />
);

const AdjectivesType = ({ navigation }) => (
  <Adjectives
    onSelect={(adjective) =>
      navigation.navigate("Adjectives details", { adjective })
    }
  />
);

const AdjectivesDetailsScreen = ({ route }) => (
  <AdjectivesDetails adjective={route.params.adjective} />
);

const GrammarScreen = ({ navigation }) => (
  <GrammarList
    onSelect={(grammar) => navigation.navigate("Grammar details", { grammar })}
  />
);

const GrammarDetailsScreen = ({ route }) => (
  <GrammarDetails grammar={route.params.grammar} />
);

const VerbPatternsScreen = ({ navigation }) => (
  <VerbPatterns
    onSelect={(pattern) =>
      navigation.navigate("Verb Patterns Details", { pattern })
    }
  />
);

const VerbPatternsDetailsScreen = ({ route }) => (
  <PatternDetails pattern={route.params.pattern} />
);
/*
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff", //#47e9a3
  },
  navigation: {
    backgroundColor: "#fff", //#61DAFB
  },
});*/

export default Main;
