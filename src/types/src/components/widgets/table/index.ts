export type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  action?: React.ReactNode;
};

export interface Heading<T> {
  name: string;
  accessor?: string;
  render?: (value: any, row: T) => React.ReactNode;
  className?: (value: any, row: T) => string;
  editable?: boolean;
  width?: string | number;
}
