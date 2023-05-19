import { StyleSheet, View, Text,TextInput,Button, Pressable,Image } from "react-native"


export default function InputView({setIsModalVisible,onChangeText,text,onPressButton }) {
  return (
      <View style={styles.inputContainer}>
          <Image
              // style={{width:300}}
              source={require('../assets/logocmpc-dark.png')}
          />
          <TextInput
              style={styles.textInput}
              onChangeText={onChangeText}
              placeholder='Ingresa Algo'
              value={text}
          />
          <View style={styles.buttonContainer}>
              <Button
                  title="Agregar"
                  onPress={onPressButton}
              />
              <Button
                  title="Cancelar"
                  onPress={() => setIsModalVisible(false)}
              />

          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // backgroundColor: '#fff',
        // borderBottomWidth: 1,
        // borderBottomColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        // marginBottom: 24
        // width:'100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 12,
        gap: 12
    },
    textInput: {
        width: '90%',
        padding: 8,
        borderColor: 'grey',
        borderWidth: 1
    }
});


