export type BusinessType = 'gross' | 'ceded_treaty' | 'ceded_fac' | 'non_ri';
export type AccidentPeriod = 'Yearly' | 'Quarterly' | 'Monthly';
export type DevelopmentPeriod = 'Yearly' | 'Quarterly' | 'Monthly';
export type TriangleType =
  | 'Incurred Loss'
  | 'Paid Loss'
  | 'Reported Claims'
  | 'Settled Claims';

export interface SelectedState {
  business_type: string;
  ceded_type: string;
  accident_period: string;
  development_period: string;
  triangle_type: string;
}
