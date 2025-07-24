export type BusinessType = 'gross' | 'ceded_treaty' | 'ceded_fac' | 'non_ri';
export type AccidentPeriod = 'yearly' | 'quarterly' | 'monthly';
export type DevelopmentPeriod = 'yearly' | 'quarterly' | 'monthly';
export type TriangleType =
  | 'incurred loss'
  | 'paid loss'
  | 'reported claims'
  | 'settled claims';

export interface SelectedState {
  business_type: string;
  ceded_type: string;
  accident_period: string;
  development_period: string;
  triangle_type: string;
}
