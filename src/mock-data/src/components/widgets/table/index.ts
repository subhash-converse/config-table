import type {
  Heading,
  Transaction,
} from '@/types/src/components/widgets/table';

export const tableJson: {
  headers: Heading<Transaction>[];
  body: Transaction[];
} = {
  headers: [
    {
      name: 'Id',
      editable: false,
    },
    {
      name: 'Date',
      editable: true,
    },
    {
      name: 'Description',
      editable: true,
    },
    {
      name: 'Amount',
      editable: true,
    },
    {
      name: 'Type',
      editable: false,
    },
    {
      name: 'Action',
      editable: false,
    },
  ],
  body: [
    {
      id: 1,
      date: '2025-07-10',
      description: 'Salary',
      amount: 5000,
      type: 'credit',
    },
    {
      id: 2,
      date: '2025-07-11',
      description: 'Groceries',
      amount: -1200,
      type: 'debit',
    },
    {
      id: 3,
      date: '2025-07-12',
      description: 'Freelance',
      amount: 2000,
      type: 'credit',
    },
    {
      id: 4,
      date: '2025-07-10',
      description: 'Salary',
      amount: 5000,
      type: 'credit',
    },
    {
      id: 5,
      date: '2025-07-11',
      description: 'Groceries',
      amount: -1200,
      type: 'debit',
    },
    {
      id: 6,
      date: '2025-07-12',
      description: 'Freelance',
      amount: 2000,
      type: 'credit',
    },
    {
      id: 7,
      date: '2025-07-10',
      description: 'Salary',
      amount: 5000,
      type: 'credit',
    },
    {
      id: 8,
      date: '2025-07-11',
      description: 'Groceries',
      amount: -1200,
      type: 'debit',
    },
    {
      id: 9,
      date: '2025-07-12',
      description: 'Freelance',
      amount: 2000,
      type: 'credit',
    },
    {
      id: 10,
      date: '2025-07-10',
      description: 'Salary',
      amount: 5000,
      type: 'credit',
    },
    {
      id: 11,
      date: '2025-07-11',
      description: 'Groceries',
      amount: -1200,
      type: 'debit',
    },
    {
      id: 12,
      date: '2025-07-12',
      description: 'Freelance',
      amount: 2000,
      type: 'credit',
    },
    {
      id: 13,
      date: '2025-07-10',
      description: 'Salary',
      amount: 5000,
      type: 'credit',
    },
    {
      id: 14,
      date: '2025-07-11',
      description: 'Groceries',
      amount: -1200,
      type: 'debit',
    },
    {
      id: 15,
      date: '2025-07-12',
      description: 'Freelance',
      amount: 2000,
      type: 'credit',
    },
    {
      id: 16,
      date: '2025-07-10',
      description: 'Salary',
      amount: 5000,
      type: 'credit',
    },
    {
      id: 17,
      date: '2025-07-11',
      description: 'Groceries',
      amount: -1200,
      type: 'debit',
    },
    {
      id: 18,
      date: '2025-07-12',
      description: 'Freelance',
      amount: 2000,
      type: 'credit',
    },
    {
      id: 16,
      date: '2025-07-10',
      description: 'Salary',
      amount: 5000,
      type: 'credit',
    },
    {
      id: 17,
      date: '2025-07-11',
      description: 'Groceries',
      amount: -1200,
      type: 'debit',
    },
    {
      id: 18,
      date: '2025-07-12',
      description: 'Freelance',
      amount: 2000,
      type: 'credit',
    },
  ],
};
