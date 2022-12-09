export default async function Page() {
  const res = await fetch(
    `https://my-json-server.typicode.com/tractian/fake-api/assets`
  );
  const data: any = await res.json();

  return (
    <>
      <h3>Ativos</h3>
      {data &&
        data.map((item: any) => {
          return (
            <>
              <p>
                <b>Nome:</b> {item.name}
              </p>
              <img
                src={item.image}
                style={{ width: 280, height: 250, padding: 10 }}
              />
              <p>
                <b>id:</b> {item.id}
              </p>
              <p>
                <b>Sensor:</b> {item.sensors}
              </p>
              <p>
                <b>Modelo:</b> {item.model}
              </p>
              <p>
                <b>Status:</b> {item.status}
              </p>
              <p>
                <b>Saúde:</b> {item.healthscore}
              </p>
              <p>
                <b>Métricas:</b>
              </p>
              <p>totalCollectsUptime: {item.metrics.totalCollectsUptime}</p>
              <p>totalUptime: {item.metrics.totalUptime}</p>
              <p>lastUptimeAt: {item.metrics.lastUptimeAt}</p>
              <p>
                <b>Especificações:</b>
              </p>
              <p>power: {item.specifications.power}</p>
              <p>maxTemp: {item.specifications.maxTemp}</p>
              <p>rpm: {item.specifications.rpm}</p>
              <p>
                <b>unitId:</b> {item.unitId}
              </p>
              <p>
                <b>companyId:</b> {item.companyId}
              </p>
              <hr />
            </>
          );
        })}
    </>
  );
}
