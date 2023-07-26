import { ComponentCommonProps } from '@/models';
import { Avatar } from 'antd';
import React from 'react';

type Props = {
  size?: number;
  icon?: string;
} & ComponentCommonProps;

export const OrganizationIcon: React.FC<Props> = ({ className = '', size = 40, icon }) => {
  return (
    <div className={`${className}`}>
      <Avatar shape="square" size={size} icon={icon} />
    </div>
  );
};
