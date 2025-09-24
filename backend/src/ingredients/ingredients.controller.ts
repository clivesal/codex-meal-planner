import { Controller, Get, Query } from '@nestjs/common';
import { Ingredient, IngredientCategory } from './ingredient.entity';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  async list(
    @Query('category') category?: IngredientCategory
  ): Promise<Ingredient[]> {
    if (category) {
      return this.ingredientsService.findByCategory(category);
    }
    return this.ingredientsService.findAll();
  }
}
