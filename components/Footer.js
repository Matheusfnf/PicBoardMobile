import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleTakePicture = () => {
    navigation.navigate("TakePicture");
  };
  const handleHome = () => {
    navigation.navigate("Home");
  };
  const handleMyAccount = () => {
    navigation.navigate("MyAccount");
  };
  const handleMyCollection = () => {
    navigation.navigate("MyCollection");
  };

  const getIconColor = (routeName) => {
    return route.name === routeName ? "orange" : "black";
  };

  const getTextStyle = (routeName) => {
    return route.name === routeName
      ? { ...styles.text, color: "orange" }
      : styles.text;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleHome}>
        <AntDesign name="home" size={24} color={getIconColor("Home")} />
        <Text style={getTextStyle("Home")}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
        <AntDesign
          name="camera"
          size={24}
          color={getIconColor("TakePicture")}
        />
        <Text style={getTextStyle("TakePicture")}>Tirar Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMyCollection}>
        <FontAwesome
          name="image"
          size={24}
          color={getIconColor("MyCollection")}
        />
        <Text style={getTextStyle("MyCollection")}>Coleção</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMyAccount}>
        <FontAwesome name="user" size={24} color={getIconColor("MyAccount")} />
        <Text style={getTextStyle("MyAccount")}>Minha Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
};
