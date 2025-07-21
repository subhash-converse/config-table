'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, Outlet } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export const modules = [
  {
    name: 'Data Checks Module',
    link: '/data-checks-module',
    icon: <MdKeyboardDoubleArrowRight />,
  },
  {
    name: 'LDF Selection Module',
    link: '/ldf-selection-module',
    icon: <MdKeyboardDoubleArrowRight />,
  },
  {
    name: 'Assumption Bulk Upload',
    link: '/assumption-bulk-upload',
    icon: <MdKeyboardDoubleArrowRight />,
  },
  {
    name: 'Valuation Module',
    link: '/valuation-module',
    icon: <MdKeyboardDoubleArrowRight />,
  },
  {
    name: 'Bulk Allocation Trigger',
    link: '/bulk-allocation-trigger',
    icon: <MdKeyboardDoubleArrowRight />,
  },
  {
    name: 'Allocation Process',
    link: '/allocation-process',
    icon: <MdKeyboardDoubleArrowRight />,
  },
  {
    name: 'Custom Allocation',
    link: '/custom-allocation',
    icon: <MdKeyboardDoubleArrowRight />,
  },
  {
    name: 'Discounting Process',
    link: '/discounting-process',
    icon: <MdKeyboardDoubleArrowRight />,
  },
];

const SidebarLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={cn(
        'h-screen w-full bg-white text-black grid duration-500',
        open ? 'grid-cols-[290px_1fr]' : 'grid-cols-[65px_1fr]',
      )}
    >
      <div className="grid grid-rows-[65px_1fr] border-r  border-gray-400 duration-500 overflow-hidden rounded-md">
        <div
          className={cn(
            'grid border-b w-full border-gray-400 bg-[#FB4E0B] items-center ',
            open ? 'grid-cols-[65px_1fr_65px] ' : 'grid-cols-1',
          )}
        >
          {open && (
            <>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                >
                  <path
                    d="M13.9287 19.5703C13.6499 20.0421 13.1334 20.333 12.5752 20.333H5.48633L10.9141 11.1484C11.1929 10.6768 11.7094 10.3867 12.2676 10.3867H19.3564L13.9287 19.5703ZM6.47949 12.8496C6.20067 13.3214 5.68418 13.6123 5.12598 13.6123H-1.96289L3.46484 4.42871C3.74366 3.95697 4.26016 3.66602 4.81836 3.66602H11.9072L6.47949 12.8496Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-white whitespace-nowrap">Reserving Hub</div>
            </>
          )}
          <div
            className={cn(
              'flex justify-center text-[#B0B2A8] hover:text-white cursor-pointer duration-500 ',
              open ? 'rotate-180' : 'rotate-0',
            )}
            onClick={() => setOpen((prev) => !prev)}
          >
            <MdKeyboardDoubleArrowRight />
          </div>
        </div>

        <div className=" flex justify-center whitespace-nowrap overflow-hidden bg-[#F37F33A8]">
          <div className={cn('w-full')}>
            {modules.map(({ name, link, icon }) => (
              <Link
                key={name}
                to={link}
                className={cn(
                  'grid grid-rows-[50px] w-full items-center rounded text-white hover:text-[#FB4E0B] transition',
                  open ? 'grid-cols-[65px_1fr_65px] ' : 'grid-cols-1',
                )}
              >
                <div className="flex justify-center items-center">{icon}</div>
                {open && (
                  <>
                    <div className="text-sm">{name}</div>
                    <div className=""></div>
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-rows-[65px_1fr]">
        <div className="border-b border-gray-400 flex justify-center items-center">
          Top-nav Bar
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
