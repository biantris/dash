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

const { Sider, Content, Footer } = Layout;

import { Typography } from 'antd';
import { HeaderComponent } from '../components/header';

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
                  label: <NavLink href="/assets">Ativos</NavLink>,
                },
                {
                  key: '3',
                  icon: <TeamOutlined />,
                  label: <NavLink href="/users">Usuários</NavLink>,
                },
                {
                  key: '4',
                  icon: <DeploymentUnitOutlined />,
                  label: <NavLink href="/units">Unidades</NavLink>,
                },
                {
                  key: '5',
                  icon: <UnorderedListOutlined />,
                  label: <NavLink href="/companies">Empresas</NavLink>,
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <HeaderComponent />
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
