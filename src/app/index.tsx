import React from 'react';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>BeeWise</Text>
        <Text style={styles.subtitle}>ORGANIZAÇÃO E GESTÃO</Text>
      </View>

      <Image
      source={require('@/assets/images/imagem.mascote.png.png')}
        style={styles.mascot}
        contentFit="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Seja bem-vindo!</Text>

        <Text style={styles.description}>
          Organize suas ideias, planeje suas tarefas
          e faça seu negócio crescer.
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => router.push('/explore')}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </Pressable>

      <Text style={styles.slogan}>
        Seja sábio como umaabelha
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EBDD',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 12,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#173B72',
  },
  subtitle: {
    fontSize: 11,
    letterSpacing: 2,
    color: '#D97916',
    fontWeight: 'bold',
  },
  mascot: {
    width: 230,
    height: 300,
  },
  content: {
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173B72',
  },
  description: {
    fontSize: 15,
    color: '#34445C',
    textAlign: 'center',
    lineHeight: 23,
  },
  button: {
    backgroundColor: '#173B72',
    width: '100%',
    maxWidth: 320,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  slogan: {
    color: '#D97916',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
