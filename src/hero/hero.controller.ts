import { Controller, Get, Param } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHeroes() {
    return this.heroService.getAllHeroes();
  }

  @Get(':universe')
  getHeroesByUniverse(@Param('universe') universe: string){
  return this.heroService.getHeroByUniverse(universe.toLowerCase());
  }
}
