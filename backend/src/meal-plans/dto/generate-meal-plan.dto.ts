import { IsDateString, IsOptional, IsString } from 'class-validator';

export class GenerateMealPlanDto {
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsString({ each: true })
  highlightedRecipes?: string[];
}
