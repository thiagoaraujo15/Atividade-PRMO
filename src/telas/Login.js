import { View, Text, StyleSheet } from "react-native";
import Titulo from "../componentes/Titulo";

export default function Login() {
  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.titulo}>Maceió, Alagoas</Text>
      </View>
      <View> 
        <Text style={styles.subtitulo}>Next 7 Days</Text>
      </View>
      <View> 
        <View style={styles.sameLine}>
        <img src={require('assets\ícone-do-vetor-da-previsão-de-tempo-colorido-símbolo-nebuloso-liso-sol-isolado-no-fundo-branco-ilustração-eps-143407022.jpg')} alt="Logo" />;
            <Text style={styles.textoForte}>Monday, <Text style={styles.dateText}>3 Oct </Text></Text>
            <Text style={styles.temperatura}>32 <Text style={styles.dateText}>/31°</Text></Text>
        </View>
        <View style={styles.sameLine}>
          <Text style={styles.textoForte}>Tuesday, <Text style={styles.dateText}>4 Oct</Text></Text>
          <Text style={styles.temperatura}>22 <Text style={styles.dateText}>/23°</Text></Text>
        </View>

        <View style={styles.sameLine}>
          <Text style={styles.textoForte}>Wednesday, <Text style={styles.dateText}>5 Oct</Text></Text>
          <Text style={styles.temperatura}>30 <Text style={styles.dateText}>/31°</Text></Text>
        </View>
        <View style={styles.sameLine}>
          <Text style={styles.textoForte}>Thursday, <Text style={styles.dateText}>6 Oct</Text></Text>
          <Text style={styles.temperatura}>24 <Text style={styles.dateText}>/26°</Text></Text>
        </View>
        <View style={styles.sameLine}>
          <Text style={styles.textoForte}>Friday, <Text style={styles.dateText}>7 Oct</Text></Text>
          <Text style={styles.temperatura}>26 <Text style={styles.dateText}>/27°</Text></Text>
        </View>
        <View style={styles.sameLine}>
          <Text style={styles.textoForte}>Saturday, <Text style={styles.dateText}>8 Oct</Text></Text>
          <Text style={styles.temperatura}>27 <Text style={styles.dateText}>/28°</Text></Text>
        </View>
        <View style={styles.sameLine}>
          <Text style={styles.textoForte}>Sunday, <Text style={styles.dateText}>9 Oct</Text></Text>
          <Text style={styles.temperatura}>22 <Text style={styles.dateText}>/23°</Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#477FFF",
    height: "100vh",
    
  },
  titleView: {
    paddingTop: 20,
    alignItems: "left",
  },
  titleStyle: {
    color: "white",
    fontSize: 22,
    backgroundColor: "blue"
  },

  sameLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  dateText: {
    opacity: 0.6,
    color: 'white',
    paddingTop: 16,
    fontSize: 16
  },

  textoForte: {
    fontSize: 23,
    paddingTop: 16,
    color: 'white'
  },
  subtitulo: {
    fontSize: 25,
    paddingTop: 16,
    color: 'white'
  },
  titulo: {
    fontSize: 30,
    color: 'white',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center'
  },
  temperatura: {
    fontSize: 23,
    paddingTop: 16,
    color: 'white'
  }
});