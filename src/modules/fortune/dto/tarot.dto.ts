import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class TarotRequestDto {
  @ApiProperty({
    example: 3,
    description:
      '클라이언트가 선택한 카드 ID (0부터 시작, 내부적으로 무시될 수도 있음)',
  })
  @IsInt()
  cardId: number;
}
