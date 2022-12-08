'use client';
import { Card, Col, Row, Typography } from 'antd';
import CarouselAssets from '../components/carousel';

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <h3>Dashboard route</h3>
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
            <Title>100</Title>
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
            <Title>100</Title>
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
          </Card>
        </Col>

        <Col style={{ padding: 15 }}>
          <Card style={{ width: 500, height: 500 }}>
            <Title level={4}>Ativos | Status</Title>
            <CarouselAssets />
          </Card>
        </Col>

        <Col style={{ padding: 15 }}>
          <Card style={{ width: 650, height: 500 }}>
            <Title level={4}>Ativos | Métricas</Title>
            {/* <GraphBarChart/> */}
          </Card>
        </Col>
      </Row>
    </>
  );
}
