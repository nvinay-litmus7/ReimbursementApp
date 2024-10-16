import React from 'react';
import {ReimbursementActiveIcon, ReimbursementInactiveIcon} from '@assets/svgs';

const ReimbursementIconComponent = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return focused ? (
    <ReimbursementActiveIcon width={size} height={size} fill={color} />
  ) : (
    <ReimbursementInactiveIcon width={size} height={size} fill={color} />
  );
};

export default React.memo(ReimbursementIconComponent);
