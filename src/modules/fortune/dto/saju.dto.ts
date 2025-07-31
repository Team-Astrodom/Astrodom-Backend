import { IsDateString, IsIn, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SajuRequestDto {
  @ApiProperty({
    example: '2000-05-24',
    description: '출생 날짜 (YYYY-MM-DD)',
  })
  @IsDateString()
  birthDate: string;

  @ApiProperty({
    example: '13:00',
    description: '출생 시각 (24시간 형식, HH:mm)',
  })
  @IsString()
  birthTime: string;

  @ApiProperty({
    example: 'female',
    enum: ['male', 'female'],
    description: '성별 (male 또는 female)',
  })
  @IsIn(['male', 'female'])
  gender: 'male' | 'female';
}
