import { RiseOutlined, TeamOutlined, ThunderboltOutlined, UserSwitchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];
export const creatSideMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
  // Force break line
): MenuItem => ({ key, icon, children, label }) as MenuItem;

export const defaultSideMenuItems = [
  creatSideMenuItem('Overview', 'overview', <TeamOutlined />, [
    creatSideMenuItem('Popluation', 'popluation', <UserSwitchOutlined />),
    creatSideMenuItem('Economic', 'economic', <RiseOutlined />),
    creatSideMenuItem('Power Grid', 'power-grid', <ThunderboltOutlined />),
  ]),
] as MenuItem[];
