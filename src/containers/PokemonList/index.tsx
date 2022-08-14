import customFetch from "../../hooks/useStaleWhileRevalidate/fetch";
import useStaleWhileRevalidate from "../../hooks/useStaleWhileRevalidate";

function PokemonList({ offset }: { offset: number }) {
  const { data, isLoading } = useStaleWhileRevalidate(
    customFetch,
    [`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`],
    [],
    10000
  );
  if (isLoading) return <p>loading...</p>;
  return (
    <>
      {data?.map((item: any) => (
        <li key={item.url}>
          <span>{item.name}</span>
        </li>
      ))}
    </>
  );
}

export default PokemonList;
