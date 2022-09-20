import { Injectable } from '@angular/core';
import { listOfPokemon } from 'src/mock_serrver/pokemon_data';

@Injectable({
  providedIn: 'root'
})
export class PokemonlocaleapiService {

   
local_pokemon_id: string[] = [];
display_list_header: {
  name: string;
  cle: string;
  polarity: number;
  key: number;
}[] = [
  { name: 'Nom', cle: 'name', polarity: 1, key: 0 },
  { name: 'Type', cle: 'apiTypes', polarity: 1, key: 1 },
  { name: 'Hp', cle: 'stats.HP', polarity: 1, key: 2 },
  { name: 'Attaque', cle: 'stats.attack', polarity: 1, key: 3 },
  { name: 'Att Spe', cle: 'stats.special_attack', polarity: 1, key: 4 },
  { name: 'Defense', cle: 'stats.defense', polarity: 1, key: 5 },
  { name: 'Def Spe', cle: 'stats.special_defense', polarity: 1, key: 6 },
  { name: 'Vitesse', cle: 'stats.speed', polarity: 1, key: 7 },
  { name: 'Generation', cle: 'apiGeneration', polarity: 1, key: 8 },
];
  constructor() { }
getAllPokemon(){
  return listOfPokemon;
}

}
