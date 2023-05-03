import { View, Text } from "react-native";
import Footer from "./Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, Matheus!</Text>
      <View style={{ flex: 1 }}>{/* Conteúdo da sua tela aqui */}</View>
      
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
