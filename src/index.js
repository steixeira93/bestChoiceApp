import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
  StatusBar
} from "react-native";

export default function AppDesafio() {
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const result = alcool / gasolina;
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
        <Image style={{top: -30, left: 100}} source={require('./pictures/logo.png')}></Image>
      <StatusBar
          backgroundColor="#212121"
          barStyle="light-content"
          translucent={false}
        />
      <View style={styles.logoContainer}>
        
        <Text style={styles.sectionTitle}>Qual a melhor opção?</Text>
      </View>
      <View style={styles.containerField}>
        <Text style={styles.text}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAlcool(text)}
          value={alcool}
          keyboardType="numbers-and-punctuation"
        />
      </View>
      <View style={styles.containerField}>
        <Text style={styles.text}>Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setGasolina(text)}
          value={gasolina}
          keyboardType="numbers-and-punctuation"
        />
      </View>
      <View style={styles.containerField}>
        <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={open} animationType="slide" transparent={true}>
        <View
          style={styles.container}
          behavior={Platform.OS === "android" ? "" : "padding"}
        >
          <View style={styles.logoContainer}>
              <Image style={{ top: -30 }} source={require('./pictures/gas.png')}></Image>
            
            <Text style={styles.modalTitle}>
              {result < 0.7 ? "Compensa usar Álcool" : "Compensa usar Gasolina"}
            </Text>
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.text}>Com os preços:</Text>
            <Text style={styles.textModal}>Álcool: R$ {alcool}</Text>
            <Text style={styles.textModal}>Gasolina: R$ {gasolina}</Text>
          </View>
          <View style={styles.containerField}>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => setOpen(false)}
            >
              <Text style={styles.buttonTextModal}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B5B5B5",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 30,
    top: -10,
    fontWeight: "bold",
    color: "#fff",
  },
  textModal: {
    fontSize: 20,
    color: "#fff",
  },
  modalTitle: {
    fontSize: 30,
    top: -10,
    fontWeight: "bold",
    color: "#00EF7D",
  },
  containerField: {
    padding: 15,
  },
  modalContainer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  input: {
    color: "#000",
    fontSize: 20,
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#FF410D",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonModal: {
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "#FF410D",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonTextModal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF410D",
  },
});
