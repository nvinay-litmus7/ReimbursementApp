import {colors} from '@constants/themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface100,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: colors.line100,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: colors.surface100,
  },
  micButton: {
    paddingLeft: 5,
  },
  filterButton: {
    marginLeft: 10,
    height: 50,
    backgroundColor: colors.surface100,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
