import { useOrganizationContext, useOrganizationDispatchContext } from '@/context';
import { useProvinceAPI } from '@/hooks';
import { OrderedListOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { ComponentCommonProps, Organization } from '../models';
import { OrganizationIcon } from './OrganizationIcon';
import { MenuItem, creatSideMenuItem, defaultSideMenuItems } from './SideMenuItem';
const { Header, Content, Sider } = Layout;

type Props = {} & ComponentCommonProps;

export const MyLayout: React.FC<Props> = ({ className = '', children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { currentOrg, orginazations } = useOrganizationContext();
  const { provinces } = useProvinceAPI(currentOrg?.id);
  const [sideMenus, setSideMenus] = useState<MenuItem[]>([]);
  const dispatch = useOrganizationDispatchContext();

  const orginazationChanged = (value: Organization) => {
    dispatch({ type: 'setCurrentOrg', payload: value });
    navigate(`/${value.countryCode}`);
  };

  useEffect(() => {
    let _sideMenu: MenuItem[] = defaultSideMenuItems;
    console.log('called ?');
    if (provinces?.length > 0) {
      const provinceMenus = provinces.map((province) => creatSideMenuItem(province.name, province.id));
      console.log(provinceMenus.length);
      const provinceParent = creatSideMenuItem('Province', 'province', <OrderedListOutlined />, provinceMenus);
      _sideMenu = [..._sideMenu, provinceParent];
      setSideMenus(_sideMenu);
    }
  }, [provinces]);

  return (
    <Layout className={`${className} min-h-screen`}>
      <Sider width={60} className="border-r-[0.5px] border-gray-50">
        <div className="flex flex-col w-full items-center px-3 pt-4 gap-2">
          {orginazations?.map((org) => <OrganizationIcon key={org.id} data={org} selected={currentOrg?.id === org.id} onSelect={orginazationChanged} />)}
        </div>
      </Sider>
      <Sider collapsible={false} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={250}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sideMenus} className="h-screen overflow-y-scroll" />
      </Sider>
      <Layout>
        <Header className="p-0" style={{ background: '#ffffff' }} />
        <Content className="p-2" style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Outlet />
          {/* {children} */}
        </Content>
      </Layout>
    </Layout>
  );
};
