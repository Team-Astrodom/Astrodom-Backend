import { IsDateString, IsIn, IsString } from 'class-validator';

export class SajuRequestDto {
  @IsDateString()
  birthDate: string;

  @IsString()
  birthTime: string;

  @IsIn(['male', 'female'])
  gender: string;
}
