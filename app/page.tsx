'use client';
import { Card, Col, Row, Typography } from 'antd';
import CarouselAssets from '../components/carousel';
import NavLink from './nav-link';

const { Title, Link } = Typography;

export default function Home() {
  return (
    <>
      <h3>Dashboard</h3>
      <Row>
        <Col style={{ padding: 5 }}>
          <Card
            style={{
              display: 'flex',
              width: 290,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Title level={4}>Ativos</Title>
            <Title>100</Title>
            <NavLink href="/assets">
              <Link style={{}}>ver detalhes</Link>
            </NavLink>
          </Card>
        </Col>
        <Col style={{ padding: 5 }}>
          <Card
            style={{
              display: 'flex',
              width: 290,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Title level={4}>Usuários</Title>
            <Title style={{ paddingLeft: 5 }}>100</Title>
            <NavLink href="/users">
              <Link>ver detalhes</Link>
            </NavLink>
          </Card>
        </Col>
        <Col style={{ padding: 5 }}>
          <Card
            style={{
              display: 'flex',
              width: 290,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Title level={4}>Unidades</Title>
            <Title style={{ paddingLeft: 10 }}>100</Title>
            <NavLink href="/units">
              <Link>ver detalhes</Link>
            </NavLink>
          </Card>
        </Col>
        <Col style={{ padding: 5 }}>
          <Card
            style={{
              display: 'flex',
              width: 290,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Title level={4}>Empresas</Title>
            <Title>100</Title>
            <NavLink href="/companies">
              <Link>ver detalhes</Link>
            </NavLink>
          </Card>
        </Col>

        <Col style={{ padding: 15 }}>
          <Card style={{ width: 500, height: 500 }}>
            <Title level={4}>Ativos | Status</Title>
            <CarouselAssets />
            <NavLink href="/assets">
              <Link>ver detalhes</Link>
            </NavLink>
          </Card>
        </Col>

        <Col style={{ padding: 15 }}>
          <Card style={{ width: 650, height: 500 }}>
            <Title level={4}>Ativos | Métricas</Title>
            {/* <GraphBarChart/> */}
            <NavLink href="/assets">
              <Link>ver detalhes</Link>
            </NavLink>
          </Card>
        </Col>
      </Row>
    </>
  );
}
