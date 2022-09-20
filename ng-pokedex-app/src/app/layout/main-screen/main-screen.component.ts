import { Component, OnInit } from '@angular/core';
import { PokemonlocaleapiService } from 'src/app/services/pokemonlocaleapi.service';
import { pokemonDataInterface } from 'src/interfaces/pokemon_data.interface';
import { header_pokemon } from 'src/interfaces/type.interface';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  display_data: pokemonDataInterface[] = [];
  list_header: header_pokemon[] = [];

  constructor(local_api_serice:PokemonlocaleapiService) {
    this.display_data = local_api_serice.getAllPokemon();
    this.list_header = local_api_serice.display_list_header;
   }

  ngOnInit(): void {
   console.log( this.display_data);
  }

}
