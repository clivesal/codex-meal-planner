import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealPlansService } from './meal-plans.service';
import { MealPlansController } from './meal-plans.controller';
import { MealPlan } from './meal-plan.entity';
import { RecipesModule } from '../recipes/recipes.module';

@Module({
  imports: [TypeOrmModule.forFeature([MealPlan]), RecipesModule],
  providers: [MealPlansService],
  controllers: [MealPlansController],
  exports: [MealPlansService]
})
export class MealPlansModule {}
