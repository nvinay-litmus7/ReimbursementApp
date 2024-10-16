import React from 'react';
import {TravelActiveIcon, TravelInactiveIcon} from '@assets/svgs';

const TravelIconComponent = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return focused ? (
    <TravelActiveIcon width={size} height={size} fill={color} />
  ) : (
    <TravelInactiveIcon width={size} height={size} fill={color} />
  );
};

export default React.memo(TravelIconComponent);
