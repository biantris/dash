export default async function Page() {
  const res = await fetch(
    `https://my-json-server.typicode.com/tractian/fake-api/users`
  );
  const data: any = await res.json();

  return (
    <>
      <h3>Usuários</h3>
      {data &&
        data.map((item: any) => {
          return (
            <>
              <p>
                <b>Nome:</b> {item.name}
              </p>
              <p>
                <b>Email:</b> {item.email}
              </p>
              <p>
                <b>id:</b> {item.id}
              </p>
              <p>
                <b>unitId:</b> {item.unitId}
              </p>
              <p>
                <b>companiId:</b> {item.companyId}
              </p>
              <hr />
            </>
          );
        })}
    </>
  );
}
