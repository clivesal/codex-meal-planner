import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealPlansModule } from '../meal-plans/meal-plans.module';
import { RecipesModule } from '../recipes/recipes.module';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { GroceryModule } from '../grocery/grocery.module';
import { Ingredient } from '../ingredients/ingredient.entity';
import { Recipe } from '../recipes/recipe.entity';
import { RecipeIngredient } from '../recipes/recipe-ingredient.entity';
import { MealPlan } from '../meal-plans/meal-plan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_PATH ?? 'database.sqlite',
      entities: [Ingredient, Recipe, RecipeIngredient, MealPlan],
      synchronize: true
    }),
    IngredientsModule,
    RecipesModule,
    MealPlansModule,
    GroceryModule
  ]
})
export class AppModule {}
