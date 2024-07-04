import axios from "axios";
import { Metadata } from "next";

const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/pokemons/${id}`);
  return response.json();
};

export const metadata: Metadata = {
  title: "Pokemon Book",
  description: "Pokemon Book",
};

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData = await fetchPokemonData(params.id);
  return (
    <div className="w-1/2 h-auto pb-4 m-auto mt-12 bg-white text-black rounded-xl font-Galmuri9">
      <div className="bg-neutral-200 text-center py-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">{pokemonData.korean_name}</h3>
        <p>NO.{pokemonData.order}</p>
      </div>
      <div className="p-6 text-center">
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
        <p className="font-bold pb-2">타입 : &nbsp;&nbsp; 특성 :</p>
        <p className="font-bold pb-2">기술 :</p>
        <p>{pokemonData.move}</p>
      </div>
      <button className="w-28 h-10 m-auto flex place-content-center rounded-xl font-bold item-center text-black hover:text-rose-500">
        ▶ 뒤로 가기
      </button>
    </div>
  );
};

export default DetailPage;
