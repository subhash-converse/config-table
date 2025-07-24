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
    { code: 'qs', label: 'RI QS' },
    { code: 'xol', label: 'RI XOL' },
];

export const accident_period: { label: string; value: AccidentPeriod }[] = [
    { value: 'yearly', label: 'Yearly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'monthly', label: 'Monthly' },
];

export const development_period: { label: string; value: DevelopmentPeriod }[] = [
    { value: 'yearly', label: 'Yearly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'monthly', label: 'Monthly' },
];

export const triangle_type: { label: string; value: TriangleType }[] = [
    { value: 'incurred loss', label: 'Incurred Loss' },
    { value: 'paid loss', label: 'Paid Loss' },
    { value: 'reported claims', label: 'Reported Claims' },
    { value: 'settled claims', label: 'Settled Claims' },
];

export const tabContent: string[] = [
    'Triangle',
    'Increment Age to Age',
    'Benchmark Upload',
    'Pattern Selection',
    'Check Fit',
    'Results Impact',
];
