import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  getpremier(): string {
    return 'Get premier';
  }
  @Post()
  postpremier(): string {
    return 'Post premier';
  }
  @Delete()
  deletepremier(): string {
    return 'Delete premier';
  }
  // @Patch()
  // patchpremier(): string {
  //   return 'Patch premier';
  // }
  @Put()
  putpremier(): string {
    return 'Put premier';
  }
}
