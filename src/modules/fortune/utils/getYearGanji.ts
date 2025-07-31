// utils/getYearGanji.ts

const heavenlyStems = [
  '갑',
  '을',
  '병',
  '정',
  '무',
  '기',
  '경',
  '신',
  '임',
  '계',
];
const earthlyBranches = [
  '자',
  '축',
  '인',
  '묘',
  '진',
  '사',
  '오',
  '미',
  '신',
  '유',
  '술',
  '해',
];

export function getYearGanji(year: number) {
  const stemIndex = (year - 4) % 10;
  const branchIndex = (year - 4) % 12;

  const stem = heavenlyStems[stemIndex];
  const branch = earthlyBranches[branchIndex];

  return stem + branch;
}
