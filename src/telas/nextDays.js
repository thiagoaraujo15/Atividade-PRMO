import react from "react";
import {View, Text, styleSheet} from "react-native";

export default function Titulo(props) {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleStyle}>{props.texto}</Text>
        <View > 
            <Text>Next 7 Days</Text>
        </View>
        <View> 
            <View>
                <Text>Monday, </Text>
                <Text>3 Oct </Text>
            </View>
            <View>
                <Text>Tuesday, </Text>
                <Text>4 Oct</Text>
                
            </View>
        </View>
      </View>

      
    );

  }
