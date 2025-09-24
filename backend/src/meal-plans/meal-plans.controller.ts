import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common';
import { MealPlan } from './meal-plan.entity';
import { MealPlansService } from './meal-plans.service';
import { GenerateMealPlanDto } from './dto/generate-meal-plan.dto';
import { MealPlansSummary } from '../grocery/grocery.types';

@Controller('meal-plans')
export class MealPlansController {
  constructor(private readonly mealPlansService: MealPlansService) {}

  @Get('current')
  async getCurrentPlan(): Promise<MealPlan | null> {
    return this.mealPlansService.getCurrentPlan();
  }

  @Get(':id')
  async getPlanById(@Param('id', ParseIntPipe) id: number): Promise<MealPlan> {
    return this.mealPlansService.getPlanById(id);
  }

  @Get('current/summary')
  async getCurrentSummary(): Promise<MealPlansSummary | null> {
    const plan = await this.mealPlansService.getCurrentPlan();
    if (!plan) {
      return null;
    }
    return this.mealPlansService.summarizePlan(plan);
  }

  @Post('generate')
  async generate(@Body() dto: GenerateMealPlanDto): Promise<MealPlan> {
    return this.mealPlansService.generateWeeklyPlan(dto);
  }
}
