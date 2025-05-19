import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // <-- IMPORTANTE
import { TouchableOpacity } from 'react-native';
const filtros = ['Todos', 'Café da manhã', 'Almoço', 'Jantar', 'Lanches'];

const imagens = [
  { uri: require('../../assets/cafe1.jpeg'), id: 1, descricao: 'Café da manhã leve com frutas' },
  { uri: require('../../assets/cafe2.jpeg'), id: 2, descricao: 'Café da manhã com pão e café' },
  { uri: require('../../assets/almoco1.jpg'), id: 3, descricao: 'Almoço com arroz, feijão e carne' },
  { uri: require('../../assets/almoco2.jpg'), id: 4, descricao: 'Almoço balanceado com salada' },
  { uri: require('../../assets/janta1.jpg'), id: 5, descricao: 'Jantar leve com legumes' },
  { uri: require('../../assets/janta2.jpg'), id: 6, descricao: 'Feijoada tradicional' },
  { uri: require('../../assets/lanche1.png'), id: 7, descricao: 'Lanche rápido com sanduíche' },
  { uri: require('../../assets/lanche2.jpg'), id: 8, descricao: 'Lanche doce com coxinha de frango' },
];

const categorias = {
  'Café da manhã': [1, 2],
  'Almoço': [3, 4],
  'Jantar': [5, 6],
  'Lanches': [7, 8],
};

export default function Home() {
  const navigation = useNavigation(); // <-- IMPORTANTE
  const [filtroSelecionado, setFiltroSelecionado] = useState('Todos');
  const [isHovered, setIsHovered] = useState(false);
  const imagensFiltradas = filtroSelecionado === 'Todos'
    ? imagens
    : imagens.filter((img) => categorias[filtroSelecionado]?.includes(img.id));
  const abrirReceita = (id) => {
    navigation.navigate(`receita${id}`);
  };
   return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtrosScroll}>
        {filtros.map((filtro) => (
          <Pressable
            key={filtro}
            onPress={() => setFiltroSelecionado(filtro)}
            style={[
              styles.filtroBotao,
              filtroSelecionado === filtro && styles.filtroSelecionado
            ]}
          >
            <Text style={[
              styles.filtroTexto,
              filtroSelecionado === filtro && { color: '#fff' }
            ]}>
              {filtro}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.gridContainer}>
        {imagensFiltradas.map((img) => (
          <TouchableOpacity key={img.id} style={styles.cardItem} onPress={() => abrirReceita(img.id)}>
            <Image source={img.uri} style={styles.imagemItem} />
            <Text style={styles.descricao}>{img.descricao}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filtrosScroll: {
    marginTop: 16,
    paddingHorizontal: 16,
    maxHeight: 60, 
  },
  cardItem: {
  width: '45%',
  marginBottom: 20,
},

descricao: {
  marginTop: 6,
  fontSize: 14,
  textAlign: 'center',
  color: '#333',
},

  filtroBotao: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40, 
  },
  filtroSelecionado: {
    backgroundColor: '#e74c3c',
  },
  filtroTexto: {
    fontSize: 14,
    color: '#000',
  },
  gridContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  paddingTop: 16,
  paddingBottom: 32,
},

  imagemItem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
});
