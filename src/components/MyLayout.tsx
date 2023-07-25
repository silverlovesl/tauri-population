import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { ComponentCommonProps } from "../models";

const { Header, Content, Footer, Sider } = Layout;

type Props = {} & ComponentCommonProps;

export const MyLayout: React.FC<Props> = ({ className = "", children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className={`${className} min-h-screen`}>
      <Sider width={60} className="border-r-[0.5px] border-gray-50">
        <div className="flex flex-col w-full px-2 items-center pt-4 gap-4">

        </div>
      </Sider>
      <Sider
        collapsible={false}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" />
      </Sider>
      <Layout>
        <Header className="p-0" style={{ background: "#ffffff" }} />
        <Content className="p-2" style={{ minHeight: "calc(100vh - 64px)" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
