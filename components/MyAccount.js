import { Text, View } from "react-native";
import Footer from "./Footer";

export default function MyAccount() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Minha Conta</Text>
      <View style={{ flex: 1 }}>{/* Conteúdo da sua tela aqui */}</View>
      <Footer />
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
};
