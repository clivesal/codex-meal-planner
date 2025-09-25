import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Ingredient } from '../ingredients/ingredient.entity';
import { Recipe } from './recipe.entity';

@Entity()
export class RecipeIngredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    onDelete: 'CASCADE'
  })
  recipe!: Recipe;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipeIngredients, {
    eager: true,
    onDelete: 'CASCADE'
  })
  ingredient!: Ingredient;

  @Column('float')
  quantity!: number;

  @Column({ default: 'unit' })
  unit!: string;
}
