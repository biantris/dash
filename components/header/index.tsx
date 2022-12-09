'use client';
import { UserOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';

import 'antd/dist/reset.css';

const { Header } = Layout;

import { Avatar } from 'antd';

export const HeaderComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header
        style={{
          display: 'flex',
          background: colorBgContainer,
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar icon={<UserOutlined />} />
          <span style={{ padding: 5 }}>Usuário test1</span>
        </div>
      </Header>
    </>
  );
};
