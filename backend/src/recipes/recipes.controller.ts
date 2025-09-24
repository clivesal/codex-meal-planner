import { Controller, Get, Query } from '@nestjs/common';
import { MealType, Recipe } from './recipe.entity';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async list(@Query('mealType') mealType?: MealType): Promise<Recipe[]> {
    if (mealType) {
      return this.recipesService.findByMealType(mealType);
    }
    return this.recipesService.findAll();
  }
}
