import {StyleSheet} from 'react-native';
import {colors} from '@constants/themes';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '98%',
    marginBottom: 16,
  },
  leftContent: {
    flexDirection: 'row',
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
  },
  detailAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelInfo: {
    flexDirection: 'column',
    gap: 8,
  },
  travelId: {
    fontSize: 12,
    color: colors.secondary200,
  },
  travelType: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.secondary400,
  },
  travellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  projectType: {
    fontSize: 12,
    color: colors.secondary300,
  },
  separator: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.secondary100,
  },
  travellerType: {
    fontSize: 12,
    color: colors.secondary300,
  },
  rightContent: {
    alignItems: 'flex-end',
    gap: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusContainer: {
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  dateContainer: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: colors.surface200,
  },
  dateText: {
    fontSize: 12,
    color: colors.secondary400,
  },
});

export default styles;
