export default async function Page() {
  const res = await fetch(
    `https://my-json-server.typicode.com/tractian/fake-api/units`
  );
  const data: any = await res.json();

  return (
    <>
      <h3>Unidades</h3>
      {data &&
        data.map((item: any) => {
          return (
            <>
              <p>
                <b>Nome:</b> {item.name}
              </p>
              <p>
                <b>id:</b> {item.id}
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
