import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    height: '25%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 30,
  },
  container: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width,
  },
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default styles;
