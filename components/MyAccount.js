import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ProfileImage from "../assets/picboard.png";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MyAccount() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Minha Conta</Text>
      <View style={{ flex: 1 }}>
        <Profile />
      </View>
    </View>
  );
}

function Profile() {
  const navigation = useNavigation();
  const handleLogOut = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={ProfileImage} />
      <Text style={styles.profileName}>Nome Completo Exemplo</Text>
      <Text style={styles.meusDados}>Meus Dados</Text>
      <View style={styles.infoContainerBox}>
        <View style={styles.infoContainerRow}>
          <Text style={[styles.infoContainer, styles.orangeText]}>Email:</Text>
          <Text style={[styles.infoContainer, { color: "#fff" }]}>
            exemplo@exemplo.com
          </Text>
        </View>
        <View style={styles.infoContainerRow}>
          <Text style={[styles.infoContainer, styles.orangeText]}>CPF:</Text>
          <Text style={[styles.infoContainer, { color: "#fff" }]}>
            123.456.789-00
          </Text>
        </View>
        <View style={styles.infoContainerRow}>
          <Text style={[styles.infoContainer, styles.orangeText]}>
            Universidade:
          </Text>
          <Text style={[styles.infoContainer, { color: "#fff" }]}>
            Universidade Exemplo
          </Text>
        </View>
      </View>
      <View style={styles.changePassword}>
        <Text>Alterar senha</Text>
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={handleLogOut}>
        <Ionicons name="exit" size={20} color="#fff" />
        <Text style={styles.signOutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    margin: 20,
    fontSize: 20,
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 240,
    height: 240,
    borderRadius: 200,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "orange",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoContainerBox: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 10,
    fontSize: 15,
  },
  infoContainerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  orangeText: {
    color: "orange",
    fontWeight: "bold",
  },
  signOutButton: {
    width: 200,
    marginTop: 100,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "gray",
  },
  signOutText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  meusDados: {
    color: "orange",
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  changePassword: {
    width: 220,
    height: 40,
    backgroundColor: "#AB4A04",
    marginTop: 20,
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FBFBFB",
    color: "orange",
  },
};
