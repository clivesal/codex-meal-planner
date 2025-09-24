import { Module } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { GroceryController } from './grocery.controller';
import { MealPlansModule } from '../meal-plans/meal-plans.module';
import { IngredientsModule } from '../ingredients/ingredients.module';

@Module({
  imports: [MealPlansModule, IngredientsModule],
  providers: [GroceryService],
  controllers: [GroceryController]
})
export class GroceryModule {}
