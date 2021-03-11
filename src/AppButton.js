import React, {useState} from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export const AppButton = ({ onPress, title }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#8b3457",
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 10
    },
    appButtonText: {
      fontSize: 14,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });