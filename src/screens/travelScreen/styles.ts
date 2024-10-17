import {colors} from '@constants/themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 480,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.surface50,
  },
  flatList: {
    width: '100%',
    marginTop: 24,
  },
  flatListContent: {
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  divider: {
    width: '100%',
    marginTop: 16,
  },
});

export default styles;
