import type {
  AccidentPeriod,
  BusinessType,
  DevelopmentPeriod,
  TriangleType,
} from '@/types/src/pages/home';

export const business_type: { label: string; value: BusinessType }[] = [
  { label: 'Gross', value: 'gross' },
  { label: 'Ceded Treaty', value: 'ceded_treaty' },
  { label: 'Ceded FAC', value: 'ceded_fac' },
  { label: 'Non-RI', value: 'non_ri' },
];

export const ceded_type: { code: string; label: string }[] = [
  { code: 'QS', label: 'RI QS' },
  { code: 'XOL', label: 'RI XOL' },
];

export const accident_period: { label: string; value: AccidentPeriod }[] = [
  { value: 'Yearly', label: 'Yearly' },
  { value: 'Quarterly', label: 'Quarterly' },
  { value: 'Monthly', label: 'Monthly' },
];

export const development_period: { label: string; value: DevelopmentPeriod }[] =
  [
    { value: 'Yearly', label: 'Yearly' },
    { value: 'Quarterly', label: 'Quarterly' },
    { value: 'Monthly', label: 'Monthly' },
  ];

export const triangle_type: { label: string; value: TriangleType }[] = [
  { value: 'Incurred Loss', label: 'Incurred Loss' },
  { value: 'Paid Loss', label: 'Paid Loss' },
  { value: 'Reported Claims', label: 'Reported Claims' },
  { value: 'Settled Claims', label: 'Settled Claims' },
];

export const tabContent: string[] = [
  'Triangle',
  'Increment Age to Age',
  'Benchmark Upload',
  'Pattern Selection',
  'Check Fit',
  'Results Impact',
];
