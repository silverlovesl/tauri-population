import { OrganizationContext, OrganizationDispatchContext, organizationReducer, organizationStateInit } from '@/context';
import { useOrganizationAPI } from '@/hooks';
import { FC, useEffect, useReducer } from 'react';

type OrganizaionProviderProps = {
  children: React.ReactNode;
};

export const OrganizaionProvider: FC<OrganizaionProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(organizationReducer, organizationStateInit());
  const { orginazations } = useOrganizationAPI();
  useEffect(() => {
    if (orginazations?.length > 0) {
      dispatch({ type: 'setOrginazations', payload: orginazations });
      dispatch({ type: 'setCurrentOrg', payload: orginazations[0] });
    }
  }, [orginazations]);
  return (
    <OrganizationContext.Provider value={state}>
      <OrganizationDispatchContext.Provider value={dispatch}>{children}</OrganizationDispatchContext.Provider>
    </OrganizationContext.Provider>
  );
};
