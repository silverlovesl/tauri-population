import { ComponentCommonProps } from '@/models';
import React from 'react';

type Props = {} & ComponentCommonProps;

export const JapanPage: React.FC<Props> = ({ className = '' }) => {
  return <div className={`${className}`}>Japan</div>;
};
