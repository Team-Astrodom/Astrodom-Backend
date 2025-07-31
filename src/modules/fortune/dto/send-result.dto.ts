import { IsIn, IsString } from 'class-validator';

export class SendResultDto {
  @IsIn(['email', 'sms'])
  type: 'email' | 'sms';

  @IsString()
  target: string;

  @IsString()
  summary: string;

  @IsString()
  imageBase64: string;
}
