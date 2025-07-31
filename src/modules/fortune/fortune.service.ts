import { Injectable } from '@nestjs/common';
import { SajuRequestDto } from './dto/saju.dto';
import { SendResultDto } from './dto/send-result.dto';
import { getYearGanji } from './utils/getYearGanji';
import { sajuMeaningMap } from './utils/saju-map';
import { tarotCards } from './utils/tarot-data';

@Injectable()
export class FortuneService {
  getSajuResult({ birthDate, birthTime, gender }: SajuRequestDto) {
    const year = new Date(`${birthDate}T${birthTime}:00`).getFullYear();
    const yearGanji = getYearGanji(year);
    const stem = yearGanji[0];

    const defaultMeaning = {
      personality: '분석할 수 없는 성격입니다.',
      wealth: '재물 정보 없음',
      relationship: '인간관계 분석 불가',
      caution: '주의 정보 없음',
    };

    const base = sajuMeaningMap[stem];
    if (!base) return defaultMeaning;

    return {
      personality: base.personality?.[gender] || defaultMeaning.personality,
      wealth: base.wealth,
      relationship: base.relationship,
      caution: base.caution,
    };
  }

  getRandomTarotCard() {
    const index = Math.floor(Math.random() * tarotCards.length);
    return tarotCards[index];
  }

  async analyzeFace(file: File) {
    return {
      forehead: '총명하고 계획적인 타입',
      eyes: '관찰력이 뛰어난 사람',
      nose: '재물운이 좋음',
      mouth: '말솜씨와 대인관계에 강점',
    };
  }

  async sendResult({ type, target, summary, imageBase64 }: SendResultDto) {
    if (type === 'email') {
      // 이메일 전송 로직
    } else if (type === 'sms') {
      // SMS 전송 로직
    }

    return { success: true };
  }
}
