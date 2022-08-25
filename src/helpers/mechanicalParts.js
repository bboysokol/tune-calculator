import { TuningEnum } from '../enums/TuningEnum';

export const turbo = [{ name: TuningEnum.TURBO, stage: 1, price: 0.35 }];

export const suspension = [
  { name: TuningEnum.SUSPENSION, stage: 1, price: 0.1 },
  { name: TuningEnum.SUSPENSION, stage: 2, price: 0.15 },
  { name: TuningEnum.SUSPENSION, stage: 3, price: 0.2 },
  { name: TuningEnum.SUSPENSION, stage: 4, price: 0.25 },
  { name: TuningEnum.SUSPENSION, stage: 5, price: 0.3 },
  { name: TuningEnum.SUSPENSION, stage: 6, price: 0.35 },
];

export const engine = [
  { name: TuningEnum.ENGINE, stage: 1, price: 0.2 },
  { name: TuningEnum.ENGINE, stage: 2, price: 0.25 },
  { name: TuningEnum.ENGINE, stage: 3, price: 0.3 },
  { name: TuningEnum.ENGINE, stage: 4, price: 0.35 },
  { name: TuningEnum.ENGINE, stage: 5, price: 0.4 },
];

export const brakes = [
  { name: TuningEnum.BRAKES, stage: 1, price: 0.13 },
  { name: TuningEnum.BRAKES, stage: 2, price: 0.18 },
  { name: TuningEnum.BRAKES, stage: 3, price: 0.23 },
  { name: TuningEnum.BRAKES, stage: 4, price: 0.28 },
];

export const transmission = [
  { name: TuningEnum.TRANSMISSION, stage: 1, price: 0.18 },
  { name: TuningEnum.TRANSMISSION, stage: 2, price: 0.23 },
  { name: TuningEnum.TRANSMISSION, stage: 3, price: 0.28 },
  { name: TuningEnum.TRANSMISSION, stage: 4, price: 0.33 },
];
