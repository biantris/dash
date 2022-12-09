'use client';
import {
  DeploymentUnitOutlined,
  HeartTwoTone,
  PieChartOutlined,
  SlidersOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import NavLink from './nav-link';

import 'antd/dist/reset.css';

const { Header, Sider, Content, Footer } = Layout;

import { Typography } from 'antd';

const { Link } = Typography;

export default function RootLayout({ children }: { children: any }) {
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
                style={{ marginTop: '3rem' }}
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    icon: <PieChartOutlined />,
                    label: <NavLink href="/">Dashboard</NavLink>,
                  },
                  {
                    key: '2',
                    icon: <SlidersOutlined />,
                    label: <NavLink href="/assets">Assets</NavLink>,
                  },
                  {
                    key: '3',
                    icon: <TeamOutlined />,
                    label: <NavLink href="/users">Users</NavLink>,
                  },
                  {
                    key: '4',
                    icon: <DeploymentUnitOutlined />,
                    label: <NavLink href="/units">Units</NavLink>,
                  },
                  {
                    key: '5',
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
                margin: '24px 16px',
                padding: 24,
                height: '52rem',
                background: colorBgContainer,
                overflow: 'auto',
              }}
            >
              {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Made with {<HeartTwoTone twoToneColor="#993399" />} by{' '}
              <Link href="https://github.com/biantris" target="_blank">
                biantris
              </Link>
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
