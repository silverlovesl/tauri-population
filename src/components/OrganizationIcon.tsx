import { ComponentCommonProps, Organization } from '@/models';
import { Avatar } from 'antd';
import React from 'react';

type Props = {
  size?: number;
  selected?: boolean;
  data: Organization;
  onSelect?: (value: Organization) => void;
} & ComponentCommonProps;

export const OrganizationIcon: React.FC<Props> = ({ className = '', size = 36, selected = false, data, onSelect }) => {
  const icon = data.flag;
  return (
    <a className={`${className}flex`} onClick={() => onSelect?.(data)}>
      <div
        className={`rounded-lg border-[3px] border-transparent flex p-[2px] cursor-pointer ${
          selected ? 'border-white' : 'hover:border-[#bfbfbf]'
        } transition-all duration-300`}
      >
        <Avatar shape="square" size={size} src={icon} />
      </div>
    </a>
  );
};
