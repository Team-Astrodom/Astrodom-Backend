import { IsIn, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SendResultDto {
  @ApiProperty({
    example: 'email',
    enum: ['email', 'sms'],
    description: '전송 방식: 이메일 또는 문자',
  })
  @IsIn(['email', 'sms'])
  type: 'email' | 'sms';

  @ApiProperty({
    example: 'user@example.com',
    description: '전송 대상 이메일 주소 또는 휴대폰 번호',
  })
  @IsString()
  target: string;

  @ApiProperty({
    example: '당신의 사주 결과입니다.',
    description: '전송할 메시지 요약 내용',
  })
  @IsString()
  summary: string;

  @ApiProperty({
    example: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
    description: '결과 이미지의 base64 인코딩 문자열',
  })
  @IsString()
  imageBase64: string;
}
