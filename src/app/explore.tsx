import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function ExploreScreen() {
 
return (
  <View style={styles.container}>

    <View style={styles.header}>
      <View>
        <Text style={styles.logo}>BeeWise</Text>
        <Text style={styles.subtitle}>
          ORGANIZAÇÃO E GESTÃO
        </Text>
      </View>

      <Text style={styles.greeting}>
        Olá! Vamos organizar seu negócio?
      </Text>

<Pressable style={styles.button}>
  <Text style={styles.buttonText}>Minhas tarefas</Text>
</Pressable>


<Pressable
  style={styles.buttonTools}
 onPress={() => router.push('/gut')}
>
  <Text style={styles.buttonText}>Ferramentas</Text>
</Pressable>
    </View>

  </View>
)};


const styles = StyleSheet.create({
  
header: {
  gap: 20,
  marginTop: 20,
},

logo: {
  fontSize: 32,
  fontWeight: 'bold',
  color: '#173B72',
},

subtitle: {
  fontSize: 11,
  letterSpacing: 2,
  color: '#D97916',
  fontWeight: 'bold',
},

greeting: {
  fontSize: 20,
  fontWeight: '600',
  color: '#173B72',
},

button: {
  backgroundColor: '#173B72',
  padding: 16,
  borderRadius: 12,
  alignItems: 'center',
},

buttonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
},


buttonTools: {
  backgroundColor: '#D97916',
  padding: 16,
  borderRadius: 12,
  alignItems: 'center',
},


  container: {
    flex: 1,
    backgroundColor: '#F5EBDD',
    padding: 24,
  },
});
