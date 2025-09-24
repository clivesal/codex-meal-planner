import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecipeIngredient } from '../recipes/recipe-ingredient.entity';

export type IngredientCategory =
  | 'produce'
  | 'protein'
  | 'dairy'
  | 'grain'
  | 'pantry'
  | 'spice';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ default: 'unit' })
  unit!: string;

  @Column('float')
  pricePerUnit!: number;

  @Column({ type: 'text', default: 'pantry' })
  category!: IngredientCategory;

  @OneToMany(() => RecipeIngredient, (ri) => ri.ingredient)
  recipeIngredients!: RecipeIngredient[];
}
