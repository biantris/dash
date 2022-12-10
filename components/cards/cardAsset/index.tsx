'use client';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
const { Title } = Typography;

export const CardAsset = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://my-json-server.typicode.com/tractian/fake-api/assets`
      );

      const data: any = await res.json();
      setData(data);
    }

    getData();
  }, []);

  return (
    <>
      <Title style={{ marginTop: 0, marginLeft: 5 }}>{data.length}</Title>
    </>
  );
};
