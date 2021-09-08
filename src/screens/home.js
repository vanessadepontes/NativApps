import * as React from 'react';
import {View, Text, FlatList, Button, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/home';
import {getImages} from '../services/services';

function HomeScreen({redux, onGetImages}) {
  !redux.data[0] && onGetImages();

  return (
    <View>
      <FlatList
        data={redux.data}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image style={{flex: 1}} source={{uri: item.Poster}} />
            <View style={styles.viewInfo}>
              <Text>Titulo: {item.Title}</Text>
              <Text>Año: {item.Year}</Text>
              <Text>Tipo: {item.Type}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        keyExtractor={item => item.imdbID}
        ListEmptyComponent={() => (
          <View style={styles.emptyView}>
            <Text>Error al obtener listado. Intente nuevamente</Text>
            <Button title="Aceptar" onPress={() => onGetImages()} />
          </View>
        )}
      />
    </View>
  );
}

const mapStateToProps = state => {
  const {redux} = state;
  return {redux};
};

const mapDispatchToProps = dispatch => ({
  onGetImages: page => dispatch(getImages(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
