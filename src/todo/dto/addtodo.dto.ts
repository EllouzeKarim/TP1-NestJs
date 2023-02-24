import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class addtodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'la taille minimal du champ est 6',
  })
  @MaxLength(25)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;
}
