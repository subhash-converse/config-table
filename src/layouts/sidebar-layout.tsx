import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link, Outlet } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export const modules = [
  {
    name: 'Data Checks Module',
    link: '/data-checks-module',
    icon: 'icon-home',
  },
  {
    name: 'LDF Selection Module',
    link: '/ldf-selection-module',
    icon: 'icon-card',
  },
  {
    name: 'Assumption Bulk Upload',
    link: '/assumption-bulk-upload',
    icon: 'icon-box',
  },
  {
    name: 'Valuation Module',
    link: '/valuation-module',
    icon: 'icon-arrow-swap',
  },
  {
    name: 'Bulk Allocation Trigger',
    link: '/bulk-allocation-trigger',
    icon: 'icon-wallet-export',
  },
  {
    name: 'Allocation Process',
    link: '/allocation-process',
    icon: 'icon-file',
  },
  {
    name: 'Custom Allocation',
    link: '/custom-allocation',
    icon: 'icon-card',
  },
  {
    name: 'Discounting Process',
    link: '/discounting-process',
    icon: 'icon-wallet-export',
  },
];

const SidebarLayout = () => {
  const [open, setOpen] = useState(true);
  const [profile, setProfile] = useState(false);

  return (
    <div
      className={cn(
        'h-screen w-full bg-white text-black grid duration-500 font-myfont',
        open ? 'grid-cols-[290px_1fr]' : 'grid-cols-[65px_1fr]',
      )}
    >
      <div className="grid grid-rows-[65px_1fr] duration-500 overflow-hidden rounded-md">
        <div
          className={cn(
            'grid border-b w-full border-gray-400 bg-[#FB4E0B] items-center ',
            open ? 'grid-cols-[65px_1fr_65px] ' : 'grid-cols-1',
          )}
        >
          {open && (
            <>
              <div className="flex justify-center">
                <i className="icon-logo text-white text-[20px] "></i>
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

        <div className=" grid grid-rows-[1fr_auto_auto] justify-center whitespace-nowrap overflow-hidden bg-[#F37F33A8]">
          <div className={cn('w-full border-b')}>
            {modules.map(({ name, link, icon }) => (
              <Link
                key={name}
                to={link}
                className={cn(
                  'group grid grid-rows-[50px] w-full items-center rounded text-white hover:text-[#FB4E0B] transition',
                  open ? 'grid-cols-[65px_1fr_65px] ' : 'grid-cols-1',
                )}
              >
                <div className="flex justify-center items-center">
                  {' '}
                  <i
                    className={cn(
                      'text-[20px] transition-colors text-white group-hover:text-[#FB4E0B]',
                      icon,
                    )}
                  ></i>
                </div>
                {open && (
                  <>
                    <div className="text-sm">{name}</div>
                    <div className=""></div>
                  </>
                )}
              </Link>
            ))}
          </div>

          <div className="border-b grid grid-rows-[50px_50px] py-[10px]">
            <div
              className={cn(
                'grid w-full cursor-pointer items-center ',
                open ? 'grid-cols-[65px_1fr] ' : 'grid-cols-1',
              )}
            >
              <div className="flex justify-center">
                <i className={cn('text-[20px] text-white icon-chat')}></i>
              </div>
              {open && (
                <div className="text-white whitespace-nowrap">Support</div>
              )}
            </div>
            <div
              className={cn(
                'grid  w-full cursor-pointer items-center ',
                open ? 'grid-cols-[65px_1fr_65px] ' : 'grid-cols-1 relative',
              )}
            >
              <div className="flex justify-center">
                <i className="icon-notification text-white text-[20px] "></i>
              </div>
              {open && (
                <div className="text-white whitespace-nowrap">
                  Documentation
                </div>
              )}
              <div
                className={cn(
                  'flex justify-center items-center',
                  !open && 'absolute top-0 right-0',
                )}
              >
                <Badge className="bg-red-600 rounded-[50%] size-[20px]" asChild>
                  <div>1</div>
                </Badge>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[360px]">
            <div
              className={cn(
                'grid pt-[10px] pb-[7px] items-center w-full',
                open ? 'grid-cols-[65px_1fr]' : 'grid-cols-1',
              )}
            >
              <div className="flex justify-center">
                <Popover open={profile} onOpenChange={setProfile}>
                  <PopoverTrigger
                    asChild
                    onMouseEnter={() => setProfile(true)}
                    onMouseLeave={() =>
                      setTimeout(() => setProfile(false), 150)
                    }
                  >
                    <div className="size-[40px] rounded-full bg-[#D8D9D4] overflow-hidden flex justify-center items-center text-[#898C81] cursor-pointer">
                      D
                    </div>
                  </PopoverTrigger>

                  <PopoverContent
                    align="start"
                    className="w-[289px] rounded-1 p-2 px-2.5"
                    sideOffset={8}
                    alignOffset={-15}
                    onMouseEnter={() => setProfile(true)}
                    onMouseLeave={() => setProfile(false)}
                  >
                    <div className="text-sm text-gray-700">
                      <div className="border-b grid grid-cols-[auto_1fr] gap-7  pb-1">
                        <div>
                          <div className="relative ">
                            <div className="size-[65px] rounded-full bg-[#D8D9D4] overflow-hidden flex justify-center items-center text-[#898C81] cursor-pointer">
                              D
                            </div>
                            <div className="absolute bottom-0 right-0">
                              <i className="icon-clock-filled "></i>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="py-1 pt-2 font-bold">Daniel Moss</div>
                          <div className="text-[12px]">Head Underwritter</div>
                          <div className="text-[12px]">Last seen Yesterday</div>

                          <div className="grid grid-cols-4 pt-2 text-[15px]">
                            <div>
                              <i className="icon-website cursor-pointer"></i>
                            </div>
                            <div>
                              <i className="icon-phone !text-[13px] cursor-pointer"></i>
                            </div>
                            <div>
                              <i className="icon-mail cursor-pointer"></i>
                            </div>
                            <div>
                              <i className="icon-link-logo cursor-pointer"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col text-[12px] gap-1 pt-2">
                        <div className="grid grid-cols-[auto_1fr] gap-3 ">
                          <div>
                            <i className="icon-user-admin text-[15px]"></i>
                          </div>
                          <div>Admin Role</div>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] gap-3">
                          <div>
                            <i className="icon-location text-[15px]"></i>
                          </div>
                          <div>Minories, London, UK</div>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] gap-3">
                          <div className="flex justify-center">
                            <i className="icon-clock text-[13px]"></i>
                          </div>
                          <div>Tuesday, Dec 27 2022 16:25:39 GMT+0000</div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {open && (
                <div className="text-[#36434D] whitespace-nowrap">
                  <div className="text-[14px]">Daniel Moss</div>
                  <div className="text-[12px]">danielmoss@insurer.com</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-[1fr_57px] ">
        <div className="">
          <Outlet />
        </div>
        <div className="flex justify-between items-center text-[#4A4B53] text-[15px] font-semibold px-16 border-t border-[#D8D9D4]">
          <div className="cursor-pointer">Change User Profile</div>
          <div className="flex gap-8">
            <div className="cursor-pointer">Terms & Conditions</div>
            <div className="cursor-pointer">FAQ</div>
            <div className="cursor-pointer">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
