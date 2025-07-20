import TableComp from '@/components/widgets/table';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('bg-white flex gap-4 px-5 py-4 h-full ')}>
      <div
        className={cn(
          'border border-gray-400 rounded-[7px] duration-500',
          open ? 'w-[260px]' : 'w-[60px]',
        )}
        onClick={() => setOpen((prev: boolean) => !prev)}
      ></div>
      <div className={cn('border flex-1 border-gray-400 rounded-[7px] p-4')}>
        <TableComp />
      </div>
    </div>
  );
}
