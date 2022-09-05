import { StyleSheet, Text, View } from "react-native";

export default function Titulo(props) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleStyle}>{props.texto}</Text>;
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    paddingTop: 20,
    alignItems: "left",
  },
  titleStyle: {
    color: "white",
    fontSize: 22,

  },

  dateText: {
    opacity: 0.8,
    color: 'black'
  },
});