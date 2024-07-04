"use client";

import React, { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";
import axios from "axios";
import Link from "next/link";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await axios.get("/api/pokemons");
      console.log(response.data);
      setPokemons(response.data);
    };
    loadPokemon();
  }, []);

  return (
    <div className="p-12 pt-24 grid grid-cols-6 gap-6">
      {pokemons.map((pokemon) => (
        <button
          key={pokemon.id}
          className="w-58 h-52 p-4 border-2 border-neutral-600 rounded-xl hover:w-62 hover:h-54 hover:bg-neutral-800 hover:border-neutral-400"
        >
          <Link href={`/pokemon/${pokemon.id}`}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="m-auto"
            />
            <p className="py-2">{pokemon.korean_name}</p>
            <p className="text-xs">NO. {pokemon.id}</p>
          </Link>
        </button>
      ))}
    </div>
  );
};

export default PokemonList;
