import { pokemonsType } from './type.interface';

export interface pokemonDataInterface {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  favoris?: boolean;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  apiTypes: pokemonsType[];
  apiGeneration: number;
  apiResistances: PokemonResistance[];
  resistanceModifyingAbilitiesForApi:
    | {
        name: string;
        slug: string;
      }[]
    | {
        name: string;
        slug: string;
      };
  apiEvolutions: PokemonEvolution[];
  apiPreEvolution: string | PokemonEvolution;
  apiResistancesWithAbilities: any[];
}

export interface PokemonEvolution {
  name: string;
  pokedexId?: number;
  pokedexIdd?: number;
}

export interface PokemonResistance {
  name: string;
  damage_multiplier: number;
  damage_relation: string;
}

