import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { TableElement } from '@/components/widgets/table/table-comp';
// import { SlOptions } from 'react-icons/sl';
import { Button } from '@/components/ui/button';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';
import _ from 'lodash';

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  action?: React.ReactNode;
};

interface Heading<T> {
  name: string;
  accessor?: string;
  render?: (value: any, row: T) => React.ReactNode;
  className?: (value: any, row: T) => string;
  editable?: boolean;
  width?: string | number;
}

const tableJson: { headers: Heading<Transaction>[]; body: Transaction[] } = {
  headers: [
    {
      name: 'Id',
      editable: true,
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
      editable: false,
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

const modifiedHeadings: Heading<Transaction>[] = tableJson.headers.map(
  (col) => {
    const accessor = col.name.toLocaleLowerCase().replaceAll(' ', '_');
    // if (accessor === 'id') {
    //   return {
    //     ...col,
    //     accessor,
    //     className: (value: any) => (value == 1 ? 'bg-red-300 text-white' : ''),
    //      render: (value:any) =>value,
    //   };
    // }

    // if (accessor === 'description') {
    //   return {
    //     ...col,
    //     accessor,
    //     className: (value: any) =>
    //       value === 'Salary' ? 'bg-red-300 text-white' : '',
    //      render: (value:any) =>value,
    //   };
    // }

    // if (accessor === 'amount') {
    //   return {
    //     ...col,
    //     accessor,
    //     render: (value: number) => `₹${Math.abs(value).toLocaleString()}`,
    //     className: (value: number) =>
    //       value < 0 ? 'text-red-500' : 'text-green-600',
    //   };
    // }

    // if (accessor === 'action') {
    //   return {
    //     ...col,
    //     accessor,
    //     render: (_value: any, row: any) => (
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <button className="p-1 hover:bg-gray-200 rounded">
    //             <SlOptions className="w-4 h-4" />
    //           </button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuItem
    //             onClick={() =>
    //               alert(`Editing ${row.description + ' ' + row.id}`)
    //             }
    //           >
    //             Edit
    //           </DropdownMenuItem>
    //           <DropdownMenuItem
    //             onClick={() =>
    //               alert(`Deleting ${row.description + ' ' + row.id}`)
    //             }
    //           >
    //             Delete
    //           </DropdownMenuItem>
    //           <DropdownMenuItem
    //             onClick={() =>
    //               alert(`Sharing ${row.description + ' ' + row.id}`)
    //             }
    //           >
    //             Share
    //           </DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     ),
    //   };
    // }
    return { ...col, accessor };
  },
);

const columnHelper = createColumnHelper<Transaction>();

const TableComp = () => {
  const tablePerRows = 10;
  const [tableData, setTableData] = useState<Transaction[]>(
    tableJson.body as Transaction[],
  );
  const [tableEditedData, setTableEditedData] = useState<Transaction[]>(
    tableJson.body as Transaction[],
  );
  const isEditedData = _.isEqual(tableData, tableEditedData);
  const [editingCell, setEditingCell] = useState<{
    rowId: number;
    column: string;
  } | null>(null);

  const updateRow = (id: number, newValue: string | number, key: string) => {
    const newData = tableEditedData.map((item) =>
      item.id === id ? { ...item, [key]: newValue ? newValue : '' } : item,
    );

    setTableEditedData(newData as Transaction[]);
  };

  const saveData = () => {
    setTableData(tableEditedData);
    setEditingCell(null);
  };

  const discardEditedData = () => {
    setTableEditedData(tableData);
    setEditingCell(null);
  };

  const columns = modifiedHeadings.map((heading: any) => {
    return columnHelper.accessor(heading.accessor as any, {
      id: heading.accessor,
      header: () => (
        <div className="bg-[#F7AB79] text-white h-full flex justify-center items-center gap-2">
          <div>{heading.name}</div>
          {heading.editable && (
            <div>
              <FaRegEdit />
            </div>
          )}
        </div>
      ),
      cell: (info) => {
        const value = info.getValue();
        const row = info.row.original;
        const isEditedCellValue =
          info.getValue() !==
          (tableData[info.row.index] as Transaction)[
            heading.accessor as keyof Transaction
          ];

        const isEditing =
          editingCell?.rowId === row.id &&
          editingCell?.column === heading.accessor;
        const content = heading.render ? heading.render(value, row) : value;
        const className = heading.className
          ? heading.className(value, row)
          : '';

        const editableFields: string[] = [];
        if (heading.editable) {
          editableFields.push(heading.accessor);
        }

        if (isEditing) {
          return (
            <div>
              <div className="px-1 ">
                <input
                  className="border px-2 py-1 w-full bg-white"
                  value={value}
                  autoFocus
                  onChange={(e) =>
                    updateRow(row.id, e.target.value, heading.accessor)
                  }
                  onBlur={() => {
                    setEditingCell(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setEditingCell(null);
                    } else if (e.key === 'Escape') {
                      setEditingCell(null);
                    }
                  }}
                />
              </div>
              {/* <div className="relative ">
                <div
                  className={cn(
                    info.row.index === tablePerRows - 1
                      ? 'absolute bottom-0'
                      : 'absolute top-0',
                    'flex w-full justify-end gap-2',
                  )}
                >
                  <Button
                    className="bg-white cursor-pointer"
                    variant="outline"
                    onClick={() => {
                      setEditedValue(savedValue);
                      setEditingCell(null);
                    }}
                  >
                    Discard
                  </Button>
                  <Button
                    className="bg-[#F7AB79] hover:bg-[#d39a75] !text-white cursor-pointer"
                    variant="outline"
                    onClick={() => {
                      // updateRow(row.id, editedValue, heading.accessor);
                      setSavededValue(editedValue);
                      setEditingCell(null);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div> */}
            </div>
          );
        }

        return (
          <div
            className={cn(
              className,
              'grid items-center truncate p-2',
              cn(isEditedCellValue ? ' grid-cols-[auto_1fr]' : ' grid-cols-1'),
            )}
            style={{ width: heading.width, minHeight: '40px' }}
            onClick={() => {
              if (editableFields.includes(heading.accessor as string)) {
                setEditingCell({
                  rowId: row.id,
                  column: heading.accessor as string,
                });
              }
            }}
          >
            {isEditedCellValue && (
              <div>
                <MdOutlineEdit />
              </div>
            )}
            <div className="text-end">{content}</div>
          </div>
        );
      },
    });
  });

  const table = useReactTable({
    data: tableEditedData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: tablePerRows,
      },
    },
  });

  return (
    <div className={cn('rounded-[7px] p-4')}>
      <TableElement table={table} />
      <div className="flex justify-end pt-3 gap-3">
        <Button
          className="bg-white cursor-pointer"
          disabled={isEditedData}
          variant="outline"
          onClick={() => {
            discardEditedData();
          }}
        >
          Discard
        </Button>
        <Button
          className="bg-[#F7AB79] hover:bg-[#d39a75] !text-white cursor-pointer"
          disabled={isEditedData}
          variant="outline"
          onClick={() => {
            saveData();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default TableComp;
