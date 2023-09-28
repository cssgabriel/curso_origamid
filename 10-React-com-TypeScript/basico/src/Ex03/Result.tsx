const Result = ({ data }: { data: DataAPI[] | null }) => {
  return (
    <section>
      <ul>
        {data?.map((item) => {
          return (
            <li key={item.id}>
              {item.nome}: {item.status}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Result;
