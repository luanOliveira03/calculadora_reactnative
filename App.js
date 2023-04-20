import React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estilo from './estilo';
import Calculo from './src/Calculo'

export default function App() {
  //botões que vão ser utilizados
  const buttons = ['LIMPAR','RETIRAR','%','/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','+/-','=','^ 3','^ 2','^','()'];
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    let operacao = ' ';
    let atual = 0;
    let novo = parseFloat(splitNumbers[0]); // recebe o número novo
    let index = 1;
    while (index <= splitNumbers.length - 1) {
      operacao = splitNumbers[index];
      atual = parseFloat(splitNumbers[index + 1]);

      if (!isNaN(atual)) {
        // Executa a ação, recebendo os números para cálculo
        switch (operacao) {
          case '+':
            novo = novo + atual;
            break;
          case '-':
            novo = novo - atual;
            break;
          case 'x':
            novo = novo * atual;
            break;
          case '/':
            novo = novo / atual;
            break;
          case '^':
            novo = Math.pow(novo, atual);
            break;
        }

        index = index + 2;
      } else {
        return;
      }
    }

    setCurrentNumber(novo.toString());
  }

  function handleInput(buttonPressed) {
    switch (buttonPressed) {
      case '+': case '-': case 'x': case '/':case '^':
        setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
        return;
      case '^ 2': case '^ 3':
        setCurrentNumber(currentNumber + ' ' + buttonPressed);
        return;
      case 'RETIRAR':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        calculator();
        return;
      case '+/-':
        setCurrentNumber((-1 * currentNumber).toString());
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View style={estilo.container}>
      <View style={estilo.results}>
        <Text style={estilo.historyText}>{lastNumber}</Text>
        <Text style={estilo.resultText}>{currentNumber}</Text>
      </View>

    <Calculo
    buttons = {buttons}
    action = {handleInput}
    />
    </View>
  );
}
