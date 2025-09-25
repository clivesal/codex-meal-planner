import { Ingredient } from '../ingredients/ingredient.entity';
import { MealPlan } from '../meal-plans/meal-plan.entity';
import { Recipe } from '../recipes/recipe.entity';

export interface GroceryListItem {
  ingredient: Ingredient;
  totalQuantity: number;
  unit: string;
  estimatedCost: number;
  substitution?: Ingredient | null;
  potentialSavings?: number;
}

export interface GroceryListSummary {
  items: GroceryListItem[];
  totalCost: number;
  potentialSavings: number;
}

export interface MealPlansSummary {
  plan: MealPlan;
  recipes: Recipe[];
}
