import { ApiProperty } from '@nestjs/swagger';

export class FaceRequestDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: '업로드할 얼굴 이미지 파일',
  })
  image: any;
}
