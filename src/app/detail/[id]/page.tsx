import { Pokemon } from "@/app/types/pokemon";
import axios from "axios";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";

const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/pokemons/${id}`);
  return response.json();
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const pokemonData: Pokemon = await fetchPokemonData(params.id);
  return {
    title: pokemonData.korean_name,
    description: "포켓몬의 모든 것을 알려드려요!",
  };
}

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData: Pokemon = await fetchPokemonData(params.id);

  return (
    <div className="w-1/2 h-auto pb-12 m-auto mt-12 bg-white text-black rounded-xl font-Galmuri9">
      <div className="bg-neutral-200 text-center py-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">{pokemonData.korean_name}</h3>
        <p>NO.{pokemonData.order}</p>
      </div>
      <div className="px-16 pb-12 text-center">
        <img
          src={pokemonData.sprites.front_default}
          alt={pokemonData.korean_name}
          className="m-auto pb-2 w-32"
        />
        <p className="pb-2">이름 : {pokemonData.korean_name}</p>
        <p className="text-sm pb-2">
          키 : {pokemonData.height / 10}m &nbsp;&nbsp; 무게 :{" "}
          {pokemonData.weight / 10}kg
        </p>
        <p className="font-bold pb-2">
          타입 :{" "}
          {pokemonData.types.map((type) => {
            return <span>{type.type.korean_name}</span>;
          })}
          &nbsp;&nbsp; 특성 :{" "}
          {pokemonData.abilities.map((ability) => {
            return <span>{ability.ability.korean_name} </span>;
          })}
        </p>
        <p className="font-bold pb-2">[ 기술 ]</p>
        <p>
          {pokemonData.moves.map((move) => {
            return <span>{move.move.korean_name} </span>;
          })}
        </p>
      </div>
      <Link href={"/"}>
        <button className="w-28 h-10 text-lg m-auto flex place-content-center rounded-xl font-bold item-center text-black hover:text-rose-500">
          ▶ 뒤로 가기
        </button>
      </Link>
    </div>
  );
};

export default DetailPage;
