import {StyleSheet} from 'react-native';
import {colors} from '@constants/themes';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.navigationTextColor,
  },
  notificationButton: {
    padding: 8,
  },
  notificationBell: {
    width: 24,
    height: 24,
  },
});

export default styles;
