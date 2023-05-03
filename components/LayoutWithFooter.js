// components/LayoutWithFooter.js
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Footer from "./Footer";

const LayoutWithFooter = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LayoutWithFooter;
