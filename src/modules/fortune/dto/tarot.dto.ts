import { IsInt } from 'class-validator';

export class TarotRequestDto {
  @IsInt()
  cardId: number;
}
