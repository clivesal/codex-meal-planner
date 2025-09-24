import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  GenerateMealPlanRequest,
  GroceryListSummary,
  MealPlan,
  MealPlanSummary,
  Recipe
} from '../types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  getCurrentMealPlan(): Observable<MealPlan | null> {
    return this.http.get<MealPlan | null>(`${this.baseUrl}/meal-plans/current`);
  }

  generateMealPlan(payload: GenerateMealPlanRequest): Observable<MealPlan> {
    return this.http.post<MealPlan>(`${this.baseUrl}/meal-plans/generate`, payload);
  }

  getMealPlanSummary(): Observable<MealPlanSummary | null> {
    return this.http.get<MealPlanSummary | null>(
      `${this.baseUrl}/meal-plans/current/summary`
    );
  }

  getGroceryList(): Observable<GroceryListSummary | null> {
    return this.http.get<GroceryListSummary | null>(
      `${this.baseUrl}/grocery-list/current`
    );
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/recipes`);
  }
}
