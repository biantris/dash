'use client';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
const { Title } = Typography;

export const CardUser = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://my-json-server.typicode.com/tractian/fake-api/users`
      );

      const data: any = await res.json();
      setData(data);
    }

    getData();
  }, []);

  return (
    <>
      <Title style={{ marginLeft: 20, marginTop: 0 }}>{data.length}</Title>
    </>
  );
};
