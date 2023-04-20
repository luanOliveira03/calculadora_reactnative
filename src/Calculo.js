import React from 'react'
import styles from '../estilo'
import {View, TouchableOpacity,Text} from 'react-native'

export default Comp =>{
  return(
  <View style={styles.buttons}>
        {Comp.buttons.map((button) =>
          button === '=' ? ( // Mapeamento do botão =
            <TouchableOpacity
              onPress={() => Comp.action(button)}
              key={button}
              style={[styles.button, { backgroundColor: 'blue' }]}>
              <Text
                style={[styles.textButton, { color: 'white', fontSize: 40 }]}>
                {button}
              </Text>
            </TouchableOpacity>
          ) : (
            // Mapeamento dos outros botões
            <TouchableOpacity
              onPress={() => Comp.action(button)}
              key={button}
              style={styles.button}>
              <Text
                style={[
                  styles.textButton,
                  { color: typeof button === 'number' ? 'blue' : 'white' },
                ]}>
                {button}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
  )
}