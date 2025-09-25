import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecipeIngredient } from './recipe-ingredient.entity';

export type MealType = 'breakfast' | 'lunch' | 'dinner';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'text', nullable: true })
  description?: string | null;

  @Column({ type: 'text', default: 'lunch' })
  mealType!: MealType;

  @Column({ type: 'int', default: 30 })
  prepTimeMinutes!: number;

  @Column({ type: 'float', default: 1 })
  servings!: number;

  @OneToMany(() => RecipeIngredient, (ri) => ri.recipe, {
    cascade: true,
    eager: true
  })
  ingredients!: RecipeIngredient[];
}
