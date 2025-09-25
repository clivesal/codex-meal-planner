import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe, MealType } from './recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipesRepository: Repository<Recipe>
  ) {}

  findAll(): Promise<Recipe[]> {
    return this.recipesRepository.find({ order: { name: 'ASC' } });
  }

  findByMealType(type: MealType): Promise<Recipe[]> {
    return this.recipesRepository.find({ where: { mealType: type } });
  }

  async getAllGroupedByMealType(): Promise<Record<MealType, Recipe[]>> {
    const recipes = await this.findAll();
    return recipes.reduce(
      (acc, recipe) => {
        acc[recipe.mealType].push(recipe);
        return acc;
      },
      { breakfast: [], lunch: [], dinner: [] } as Record<MealType, Recipe[]>
    );
  }
}
