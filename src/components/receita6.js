import { View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Receita6() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                    <Text style={styles.textoBotaoVoltar}>← Voltar</Text>
                  </Pressable>
      <Image source={require('../../assets/janta2.jpg')} style={styles.imagem} />
      <Text style={styles.titulo}>Café da manhã leve com frutas</Text>
      <Text style={styles.descricao}>
        Uma refeição leve e nutritiva com frutas variadas. Ideal para começar o dia com energia!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});
