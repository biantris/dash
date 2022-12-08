"use client";
import NavLink from "./nav-link";
import React from "react";
import {
  PieChartOutlined,
  UnorderedListOutlined,
  SlidersOutlined,
  TeamOutlined,
  DeploymentUnitOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

import "antd/dist/reset.css";

const { Header, Sider, Content, Footer } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <html>
      <head />
      <body>
        <Layout>
          <Sider trigger={null}>
            <div className="logo" />
            <nav>
              <Menu
                theme="dark"
                mode="inline"
                style={{ marginTop: "3rem" }}
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    icon: <PieChartOutlined />,
                    label: <NavLink href="/">Dashboard</NavLink>,
                  },
                  {
                    key: "2",
                    icon: <SlidersOutlined />,
                    label: <NavLink href="/assets">Assets</NavLink>,
                  },
                  {
                    key: "3",
                    icon: <TeamOutlined />,
                    label: <NavLink href="/users">Users</NavLink>,
                  },
                  {
                    key: "4",
                    icon: <DeploymentUnitOutlined />,
                    label: <NavLink href="/units">Units</NavLink>,
                  },
                  {
                    key: "5",
                    icon: <UnorderedListOutlined />,
                    label: <NavLink href="/companies">Company</NavLink>,
                  },
                ]}
              />
            </nav>
          </Sider>
          <Layout className="site-layout">
            <Header style={{ background: colorBgContainer }} />
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                height: "52rem",
                background: colorBgContainer,
              }}
            >
              {children}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Made with {<HeartTwoTone twoToneColor="#993399" />} by @biantris
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
