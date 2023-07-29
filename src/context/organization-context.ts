import { Organization } from '@/models';
import { Dispatch, createContext, useContext } from 'react';

export type OrganizationState = {
  currentOrg: Organization | null;
  orginazations: Organization[];
};

export type OrganizationAction =
  | {
      type: 'setCurrentOrg';
      payload: Organization;
    }
  | { type: 'setOrginazations'; payload: Organization[] };

export const organizationStateInit = (): OrganizationState => {
  return { currentOrg: null, orginazations: [] };
};

export const organizationReducer = (state: OrganizationState, action: OrganizationAction): OrganizationState => {
  switch (action.type) {
    case 'setCurrentOrg':
      return { ...state, currentOrg: action.payload };
    case 'setOrginazations':
      return { ...state, orginazations: action.payload };
  }
};

export const useOrganizationContext = () => {
  return useContext(OrganizationContext);
};

export const useOrganizationDispatchContext = () => {
  return useContext(OrganizationDispatchContext);
};

export const OrganizationContext = createContext<OrganizationState>(organizationStateInit());
export const OrganizationDispatchContext = createContext<Dispatch<OrganizationAction>>(null);
