import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { calcular, factorial } from './src/calculos'; // Importar la función factorial
import buttonStyle from './css/button_style'; // Estilos de los botones
import styles from './css/styles';

const App = (): React.JSX.Element => {
  const [display, setDisplay] = useState<string>(''); // Pantalla de la calculadora
  const [result, setResult] = useState<string>(''); // Resultado de la operación

  const handlePress = (value: string) => {
    if (value === 'C') {
      setDisplay(''); // Limpiar toda la expresión
      setResult('');
    } else if (value === 'del') {
      setDisplay(display.slice(0, -1)); // Limpiar un carácter
    } else if (value === '=') {
      setResult(calcular(display)); // Llamar a la función calcular
    } else if (value === '+/-') {
      // Invierte el signo del número actual en el display
      if (display) {
        if (display.startsWith('-')) {
          setDisplay(display.slice(1)); // Si ya es negativo, lo vuelve positivo
        } else {
          setDisplay('-' + display); // Si es positivo, lo vuelve negativo
        }
      }
    } else {
      setDisplay(display + value); // Concatenar el valor presionado
    }
  };

  const buttons = [
    [{ label: 'C', size: 1 }, { label: '+/-' }, { label: 'del' },{ label: '÷' }],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    [{ label: '0', size: 2 }, '.', '='],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display || '0'}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, colIndex) => {
              const isObject = typeof button === 'object';
              const label = isObject ? button.label : button;
              const size = isObject && button.size ? button.size : 1;

              return (
                <TouchableOpacity
                  key={colIndex}
                  style={[
                    buttonStyle.button,
                    size > 1 && { flex: size }, // Ajusta el tamaño del botón dinámicamente
                  ]}
                  onPress={() => handlePress(label)}>
                  <Text style={buttonStyle.buttonText}>{label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};


export default App;
