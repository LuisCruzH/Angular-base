import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'krillin', power: 500 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'vergueta', power: 9000 }
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() }

    this.characters.push(newCharacter);
  }

  public DeleteCharacterById(id: string): void {

    this.characters = this.characters.filter(character => character.id !==id);
  }

}
