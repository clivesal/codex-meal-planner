import { Controller, Get } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { GroceryListSummary } from './grocery.types';

@Controller('grocery-list')
export class GroceryController {
  constructor(private readonly groceryService: GroceryService) {}

  @Get('current')
  async getCurrentList(): Promise<GroceryListSummary | null> {
    return this.groceryService.getCurrentList();
  }
}
