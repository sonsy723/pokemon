"use client";

import React, { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";
import axios from "axios";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await axios.get("/api/pokemons");
      console.log(response.data);
      setPokemons(response.data);
    };
    loadPokemon();
  }, []);

  // const onClickHandler = () => {};

  return (
    <div className="p-12 pt-24 grid grid-cols-6 gap-6">
      {pokemons.map((pokemon) => (
        <button
          key={pokemon.id}
          className="w-58 h-52 p-4 border-2 border-white rounded-xl"
        >
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="m-auto"
          />
          <p className="p-1">{pokemon.korean_name}</p>
          <p>도감번호 : {pokemon.id}</p>
        </button>
      ))}
    </div>
  );
};

export default PokemonList;
