import { Injectable } from '@nestjs/common';
import { Http2ServerResponse } from 'http2';
import{ Hero } from './hero.model'

@Injectable()
export class HeroService{
marvelHero: Hero[] = [
  {name: 'Spiderman', powers:['Web'], universe:'Marvel'},
  {name: 'Thor', powers:['strenght'], universe:'Marvel'},
  {name: 'Black Panther', powers:['strenght'], universe:'Marvel'}
]

dcHero: Hero[]=[
  {name: 'Batman', powers:['fast'], universe:'DC'},
  {name: 'Superman', powers:['Fly'], universe:'Marvel'}

];
getAllHeroes(): Hero[]{
  const heroes = [...this.marvelHero, ...this.dcHero];
  return heroes;
    
}

getHeroByUniverse(universe: string): Hero[]{
  const heroes =[...this.marvelHero,...this.dcHero].filter(
    (hero) => hero.universe.toLocaleLowerCase() === universe); 

  
  return heroes;
}

}