import { CSSProperties } from 'react';

export type ComponentCommonProps = {
  /** スタイル */
  style?: CSSProperties;
  /** スタイル */
  className?: string;
  /** 子要素 */
  children?: React.ReactNode;
};
