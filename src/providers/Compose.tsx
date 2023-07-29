import { ComponentCommonProps } from '@/models';
import { JSXElementConstructor, PropsWithChildren } from 'react';

type Props = {
  components: JSXElementConstructor<PropsWithChildren<any>>[];
} & ComponentCommonProps;

export const Compose = (props: Props) => {
  const { components = [], children } = props;
  return (
    <>
      {components.reduceRight(
        (acc, Comp) => (
          <Comp>{acc}</Comp>
        ),
        children
      )}
    </>
  );
};
