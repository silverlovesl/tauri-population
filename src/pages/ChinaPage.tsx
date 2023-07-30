import { ComponentCommonProps } from '@/models';
import React from 'react';

type Props = {} & ComponentCommonProps;

export const ChinaPage: React.FC<Props> = ({ className = '' }) => {
  return <div className={`${className}`}>China</div>;
};
