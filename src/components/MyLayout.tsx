import { useOrganizationContext, useOrganizationDispatchContext } from '@/context';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { ComponentCommonProps, Organization } from '../models';
import { OrganizationIcon } from './OrganizationIcon';
import { defaultSideMenuItems } from './SideMenuItem';
const { Header, Content, Sider } = Layout;

type Props = {} & ComponentCommonProps;

export const MyLayout: React.FC<Props> = ({ className = '', children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { currentOrg, orginazations } = useOrganizationContext();
  const dispatch = useOrganizationDispatchContext();

  const orginazationChanged = (value: Organization) => {
    dispatch({ type: 'setCurrentOrg', payload: value });
  };

  return (
    <Layout className={`${className} min-h-screen`}>
      <Sider width={60} className="border-r-[0.5px] border-gray-50">
        <div className="flex flex-col w-full items-center px-3 pt-4 gap-2">
          {orginazations?.map((org) => <OrganizationIcon key={org.id} data={org} selected={currentOrg?.id === org.id} onSelect={orginazationChanged} />)}
        </div>
      </Sider>
      <Sider collapsible={false} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={defaultSideMenuItems} />
      </Sider>
      <Layout>
        <Header className="p-0" style={{ background: '#ffffff' }} />
        <Content className="p-2" style={{ minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
