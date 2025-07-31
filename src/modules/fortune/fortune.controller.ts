import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { FortuneService } from './fortune.service';
import { SajuRequestDto } from './dto/saju.dto';
import { SendResultDto } from './dto/send-result.dto';
import { FaceRequestDto } from './dto/face.dto';

@ApiTags('Fortune')
@Controller('api/fortune')
export class FortuneController {
  constructor(private readonly fortuneService: FortuneService) {}

  @Post('saju')
  @ApiOperation({ summary: '사주 분석 API' })
  @ApiBody({ type: SajuRequestDto })
  @ApiResponse({
    status: 200,
    description: '사주 분석 결과 반환',
    schema: {
      example: {
        personality: '도전적이며 리더십이 강한 성격입니다.',
        wealth: '재물운은 자수성가형입니다.',
        relationship: '의리 있고 직설적인 관계입니다.',
        caution: '성급한 결정에 주의하세요.',
      },
    },
  })
  analyzeSaju(@Body() body: SajuRequestDto) {
    return this.fortuneService.getSajuResult(body);
  }

  @Post('tarot')
  @ApiOperation({ summary: '타로 카드 결과 API' })
  @ApiResponse({
    status: 200,
    description: '랜덤으로 선택된 타로 카드 결과',
    schema: {
      example: {
        cardName: 'The Lovers',
        description: '당신의 관계에 중요한 선택이 다가오고 있습니다.',
        imageUrl: '/images/cards/the_lovers.png',
      },
    },
  })
  drawTarot() {
    return this.fortuneService.getRandomTarotCard();
  }

  @Post('face')
  @ApiOperation({ summary: '관상 분석 API (이미지 업로드)' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  @ApiBody({ type: FaceRequestDto })
  @ApiResponse({
    status: 200,
    description: '이미지를 분석한 관상 결과',
    schema: {
      example: {
        forehead: '총명하고 계획적인 타입',
        eyes: '관찰력이 뛰어난 사람',
        nose: '재물운이 좋음',
        mouth: '말솜씨와 대인관계에 강점',
      },
    },
  })
  analyzeFace(@UploadedFile() file: File) {
    return this.fortuneService.analyzeFace(file);
  }

  @Post('/send-result')
  @ApiOperation({ summary: '결과 전송 API (이메일 또는 문자)' })
  @ApiBody({ type: SendResultDto })
  @ApiResponse({
    status: 200,
    description: '성공 여부 반환',
    schema: {
      example: {
        success: true,
      },
    },
  })
  sendResult(@Body() body: SendResultDto) {
    return this.fortuneService.sendResult(body);
  }
}
