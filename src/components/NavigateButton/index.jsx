import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const NavigateButton = ({ navigateDest, text, params }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateDest, { person: params })} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NavigateButton;
