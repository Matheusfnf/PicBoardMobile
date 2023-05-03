import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/picboard.png")} style={styles.image} />
      <Text style={styles.Titulo}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TakePicture")}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Ainda não é inscrito? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.CadastroLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "orange",
    width: "80%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    color: "gray",
  },
  CadastroLink: {
    textDecorationLine: "underline",
    color: "blue",
  },
  Titulo: {
    fontWeight: "bold",
    fontSize: 28,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    textShadowColor: "#00000029",
    marginBottom: 20,
  },
});

export default LoginScreen;
