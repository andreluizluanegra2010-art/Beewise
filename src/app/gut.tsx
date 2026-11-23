import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

import React from 'react';
export default function GutScreen() {
    const [gravidade, setGravidade] = useState(0);
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matriz GUT</Text>

<View style={styles.orangeLine} />

      <Text style={styles.subtitle}>
        Organize e priorize os problemas do seu negócio.
      </Text>
    <Text style={styles.label}>Descreva o problema:</Text>

     <TextInput
    style={styles.input}
    placeholder="Ex.: Atraso nas entregas"
    placeholderTextColor="#888888"
     />
     <Text style={styles.label}>Gravidade:</Text>

<View style={styles.options}>
  {[1, 2, 3, 4, 5].map((nota) => (
    <Text
      key={nota}
      onPress={() => setGravidade(nota)}
      style={[
        styles.option,
        gravidade === nota && styles.selectedOption,
      ]}
    >
      {nota}
    </Text>
  ))}
</View>


<Text style={styles.description}>
  Quanto esse problema prejudica o negócio?
</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EBDD',
    padding: 24,
  },


options: {
  flexDirection: 'row',
  gap: 12,
  marginTop: 12,
},

option: {
  backgroundColor: '#FFFFFF',
  color: '#173B72',
  padding: 14,
  borderRadius: 10,
  fontWeight: 'bold',
},

selectedOption: {
  backgroundColor: '#173B72',
  color: '#FFFFFF',
},


description: {
  fontSize: 13,
  color: '#34445C',
  marginTop: 5,
},

label: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#173B72',
  marginTop: 25,
},

input: {
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  padding: 14,
  marginTop: 10,
  fontSize: 15,
  borderWidth: 1,
  borderColor: '#D9CBB8',
},

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#173B72',
  },

  orangeLine: {
  width: 60,
  height: 5,
  backgroundColor: '#D97916',
  borderRadius: 10,
  marginTop: 12,
},

  subtitle: {
    fontSize: 15,
    color: '#34445C',
    marginTop: 10,
  },
});