//let i: any;

// const usersArray: any = [];
// for (i in getData) {
//   //@ts-ignore
//   usersArray.push(`${usersArray[i]}`);
// }

// console.log('users', usersArray);

export default async function Page() {
  const res = await fetch(
    `https://my-json-server.typicode.com/tractian/fake-api/users`
  );
  const data = await res.json();
  console.log(data);

  return (
    <>
      {/* @ts-ignore */}
      {data &&
        // @ts-ignore
        data.map((item: any) => {
          return (
            <>
              <h3>nome: {item.name}</h3>
              <p>email: {item.email}</p>
              <p>id: {item.id}</p>
              <p>unitId: {item.unitId}</p>
              <p>companiId: {item.companyId}</p>
            </>
          );
        })}
    </>
  );
}
