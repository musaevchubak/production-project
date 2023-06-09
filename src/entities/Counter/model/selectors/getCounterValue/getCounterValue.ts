import { buildSelector } from '@/shared/lib/store';

// кортеж
export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value);
