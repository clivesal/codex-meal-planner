import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient, IngredientCategory } from './ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>
  ) {}

  findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  findByCategory(category: IngredientCategory): Promise<Ingredient[]> {
    return this.ingredientRepository.find({ where: { category } });
  }

  async findCheaperAlternative(
    ingredient: Ingredient
  ): Promise<Ingredient | null> {
    const candidates = await this.ingredientRepository.find({
      where: { category: ingredient.category }
    });
    const cheaper = candidates
      .filter((candidate) => candidate.id !== ingredient.id)
      .filter((candidate) => candidate.pricePerUnit < ingredient.pricePerUnit)
      .sort((a, b) => a.pricePerUnit - b.pricePerUnit)[0];
    return cheaper ?? null;
  }
}
