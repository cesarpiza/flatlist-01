import React, { useCallback } from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  View,
  Image,
  Dimensions,
  Text,
  ActivityIndicator,
} from 'react-native';
import { coffeeList } from './data';
import Item from './components/item/index'

const { width, height } = Dimensions.get('window');

function ListHeaderComponent() {
  return (
    <View>
      <Image
        style={{
          width: '100%',
          height: width * 0.5,
          resizeMode: 'cover',
        }}
        source={require('./assets/coffee/coffee-cover.jpg')}
      />
      <Text style={{
        backgroundColor: 'brown',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingVertical: 10,
        letterSpacing: 5,
      }}>
        Types of Coffee
      </Text>
    </View>
  )
}

function ItemSeparatorComponent() {
  return (
    <View
      style={{
        width: '100%',
        height: 5,
        backgroundColor: '#555',
      }}
    />
  )
}

export default function App() {

  //Evitar função anônima em renderItem

  //Para componentes funcionais, mova a função para fora do JSX retornado.Além disso, certifique - se de que ele esteja enrolado em um gancho para evitar que ele seja recriado a cada renderização.renderItemuseCallback

  //Para componentes de classe, mova a função para fora da função de renderização, para que ela não se recrie sempre que a função de renderização for chamada.renderItem

  const renderItem = useCallback(({ item }) => {
    return <Item {...item} />
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <FlatList
        contentContainerStyle={{
          padding: 10,
        }}
        showsHorizontalScrollIndicator={false}
        // Para renderizar um componente externo
        ListHeaderComponent={ListHeaderComponent}
        // Para renderizar "Separadores de itens" usando um componente
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={coffeeList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        // Só para mostrar que da para colocar um componente no final da lista.
        ListFooterComponent={<ActivityIndicator />}
      />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});