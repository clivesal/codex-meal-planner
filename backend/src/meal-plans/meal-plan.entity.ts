import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { MealType } from '../recipes/recipe.entity';

export interface PlannedMeal {
  recipeId: number;
  recipeName: string;
  mealType: MealType;
}

export interface DayPlan {
  date: string;
  meals: Record<MealType, PlannedMeal>;
}

@Entity()
export class MealPlan {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'date' })
  startDate!: string;

  @Column({ type: 'date' })
  endDate!: string;

  @Column({ type: 'simple-json' })
  days!: DayPlan[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
