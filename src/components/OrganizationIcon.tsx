import { ComponentCommonProps } from '@/models';
import { Avatar } from 'antd';
import React from 'react';

type Props = {
  size?: number;
} & ComponentCommonProps;

export const OrganizationIcon: React.FC<Props> = ({ className = '', size = 40 }) => {
  return <div className={`${className}`}>
    <Avatar shape="square" size={size} />
  </div>
};
