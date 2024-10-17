import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ReimbursementInactiveIcon} from '@assets/svgs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './styles';

interface TravelCardProps {
  id: string;
  type: string;
  projectType: string;
  travellerType: string;
  status: string;
  date: string;
}

const TravelCard: React.FC<TravelCardProps> = ({
  id,
  type,
  projectType,
  travellerType,
  status,
  date,
}) => {
  dayjs.extend(customParseFormat);
  const formattedDate = dayjs(date, 'YYYY MMM DD').format('DD MMM YY');

  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContent}>
        <View style={styles.avatar} />
        <View style={styles.travelInfo}>
          <Text style={styles.travelId}>{id}</Text>
          <Text style={styles.travelType}>{type}</Text>
          <View style={styles.travellerInfo}>
            <Text style={styles.projectType}>{projectType}</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.travellerType}>{travellerType}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.statusRow}>
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  status === 'Pending'
                    ? 'rgba(255, 148, 17, 0.1)'
                    : 'rgba(50, 197, 131, 0.1)',
              },
            ]}>
            <Text
              style={[
                styles.statusText,
                {
                  color:
                    status === 'Pending'
                      ? 'rgba(255, 148, 17, 1)'
                      : 'rgba(50, 197, 131, 1)',
                },
              ]}>
              {status}
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{formattedDate}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.detailAvatar}>
          <ReimbursementInactiveIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TravelCard;
