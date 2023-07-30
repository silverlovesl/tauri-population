import { ComponentCommonProps } from '@/models';
import React from 'react';

type Props = {} & ComponentCommonProps;

export const USPage: React.FC<Props> = ({ className = '' }) => {
  return <div className={`${className}`}>US</div>;
};
