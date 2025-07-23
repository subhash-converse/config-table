import DynamicTabs from '@/components/custom/dynamic-tabs';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import TableComp from '@/components/widgets/table';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { RiCollapseDiagonalLine } from 'react-icons/ri';

type BusinessType = 'gross' | 'ceded_treaty' | 'ceded_fac' | 'non_ri';
type AccidentPeriod = 'Yearly' | 'Quarterly' | 'Monthly';
type DevelopmentPeriod = 'Yearly' | 'Quarterly' | 'Monthly';
type TriangleType =
  | 'Incurred Loss'
  | 'Paid Loss'
  | 'Reported Claims'
  | 'Settled Claims';

interface SelectedState {
  business_type: string;
  ceded_type: string;
  accident_period: string;
  development_period: string;
  triangle_type: string;
}

const business_type: { label: string; value: BusinessType }[] = [
  { label: 'Gross', value: 'gross' },
  { label: 'Ceded Treaty', value: 'ceded_treaty' },
  { label: 'Ceded FAC', value: 'ceded_fac' },
  { label: 'Non-RI', value: 'non_ri' },
];

const ceded_type: { code: string; label: string }[] = [
  { code: 'QS', label: 'RI QS' },
  { code: 'XOL', label: 'RI XOL' },
];

const accident_period: { label: string; value: AccidentPeriod }[] = [
  { value: 'Yearly', label: 'Yearly' },
  { value: 'Quarterly', label: 'Quarterly' },
  { value: 'Monthly', label: 'Monthly' },
];

const development_period: { label: string; value: DevelopmentPeriod }[] = [
  { value: 'Yearly', label: 'Yearly' },
  { value: 'Quarterly', label: 'Quarterly' },
  { value: 'Monthly', label: 'Monthly' },
];

const triangle_type: { label: string; value: TriangleType }[] = [
  { value: 'Incurred Loss', label: 'Incurred Loss' },
  { value: 'Paid Loss', label: 'Paid Loss' },
  { value: 'Reported Claims', label: 'Reported Claims' },
  { value: 'Settled Claims', label: 'Settled Claims' },
];

const tabContent: string[] = [
  "Triangle",
  "Increment Age to Age",
  "Benchmark Upload",
  "Pattern Selection",
  "Check Fit",
  "Results Impact"
];

export default function HomePage() {
  const [selectOpen, setSelectOpen] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ [key: string]: string }>({});
  const [triggerWidth, setTriggerWidth] = useState<number>(0);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleSelect = <K extends keyof SelectedState>(
    value: SelectedState[K],
    key: K,
  ) => {
    setSelected((prev) => {
      const updatedValue = {
        ...prev,
        [key]: value,
      };
      setSelectOpen(null);
      return updatedValue;
    });
  };

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [open]);

  return (
    <div className="h-full grid grid-rows-[65px_1fr] px-[17px] pb-4">
      <div className="200 pt-3 grid grid-cols-[237px_1fr]">
        <div className="bg-[#FB4E0B] rounded-md pl-6 flex items-center text-[18px] text-white font-medium">
          Selected Profiles
        </div>
        <div className="px-[42px] pr-[34px]">
          <div className="h-full border border-[#898C81] rounded-md w-full grid grid-cols-4 py-[6px] justify-around px-12 gap-[60px] text-[18px] text-[#6C757D] font-medium">
            <div className="h-full border border-[#FB4E0B] rounded-md pl-6 flex items-center">
              Aerospace
            </div>
            <div className="h-full border border-[#FB4E0B] rounded-md pl-6 flex items-center">
              Damage
            </div>
            <div className="h-full border border-[#FB4E0B] rounded-md pl-6 flex items-center">
              Attrition
            </div>
            <div className="h-full border border-[#FB4E0B] rounded-md pl-6 flex items-center">
              2024Q3
            </div>
          </div>
        </div>
      </div>
      <div className={cn('flex py-4 pt-[22px] h-full ')}>
        <div
          className={cn(
            'duration-500 overflow-hidden grid',
            open ? 'w-[237px]' : 'w-[60px]',
          )}
        >
          {open ? (
            <div className="grid grid-rows-[50px_1fr]">
              <div className="bg-[#FB4E0B] grid grid-cols-[1fr_50px] text-[18px] pl-6 whitespace-nowrap text-white font-medium ">
                <div className="flex  items-center">Choose Options</div>
                <div
                  className="flex justify-center items-center text-[20px] cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <RiCollapseDiagonalLine />
                </div>
              </div>
              <div className="bg-[#F7AB79] p-3">
                <div className="grid grid-rows-6 h-full py-10">
                  <Popover
                    open={selectOpen === 'business_type'}
                    onOpenChange={(open) =>
                      setSelectOpen(open ? 'business_type' : null)
                    }
                  >
                    <PopoverTrigger className="w-full h-[50px]" asChild>
                      <Button
                        className="grid grid-cols-[1fr_auto]"
                        variant="outline"
                        ref={triggerRef}
                      >
                        <div className="text-start text-[#54595E] text-[16px]">
                          {selected.business_type
                            ? business_type.find(
                              (o: any) => o.value === selected.business_type,
                            )?.label
                            : 'Gross'}
                        </div>
                        <i className="icon-right-arrow rotate-90 text-[#ABB5BE] text-[20px]"></i>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent style={{ width: triggerWidth }}>
                      <div className="flex flex-col gap-2">
                        {business_type.map((opt) => (
                          <label
                            key={opt.value}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() =>
                              handleSelect(opt.value, 'business_type')
                            }
                          >
                            <Checkbox
                              className="data-[state=checked]:bg-[#FB4E0B] data-[state=checked]:border-[#FB4E0B]"
                              checked={selected.business_type === opt.value}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Popover
                    open={selectOpen === 'ceded_type'}
                    onOpenChange={(open) =>
                      setSelectOpen(open ? 'ceded_type' : null)
                    }
                  >
                    <PopoverTrigger
                      className="w-full h-[50px]"
                      disabled={selected.business_type === 'gross'}
                      asChild
                    >
                      <Button
                        className="grid grid-cols-[1fr_auto]"
                        variant="outline"
                        ref={triggerRef}
                      >
                        <div className="text-start text-[#54595E] text-[16px]">
                          {selected.ceded_type
                            ? ceded_type.find(
                              (o) => o.code === selected.ceded_type,
                            )?.label
                            : 'Ceded Type'}
                        </div>
                        <i className="icon-right-arrow rotate-90 text-[#ABB5BE] text-[20px]"></i>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent style={{ width: triggerWidth }}>
                      <div className="flex flex-col gap-2">
                        {ceded_type.map((opt) => (
                          <label
                            key={opt.code}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => handleSelect(opt.code, 'ceded_type')}
                          >
                            <Checkbox
                              className="data-[state=checked]:bg-[#FB4E0B] data-[state=checked]:border-[#FB4E0B]"
                              checked={selected.ceded_type === opt.code}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Popover
                    open={selectOpen === 'accident_period'}
                    onOpenChange={(open) =>
                      setSelectOpen(open ? 'accident_period' : null)
                    }
                  >
                    <PopoverTrigger className="w-full h-[50px]" asChild>
                      <Button
                        className="grid grid-cols-[1fr_auto]"
                        variant="outline"
                        ref={triggerRef}
                      >
                        <div className="text-start text-[#54595E] text-[16px]">
                          {selected.accident_period
                            ? accident_period.find(
                              (o: any) =>
                                o.value === selected.accident_period,
                            )?.label
                            : 'Accident Period'}
                        </div>
                        <i className="icon-right-arrow rotate-90 text-[#ABB5BE] text-[20px]"></i>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent style={{ width: triggerWidth }}>
                      <div className="flex flex-col gap-2">
                        {accident_period.map((opt) => (
                          <label
                            key={opt.value}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() =>
                              handleSelect(opt.value, 'accident_period')
                            }
                          >
                            <Checkbox
                              className="data-[state=checked]:bg-[#FB4E0B] data-[state=checked]:border-[#FB4E0B]"
                              checked={selected.accident_period === opt.value}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Popover
                    open={selectOpen === 'development_period'}
                    onOpenChange={(open) =>
                      setSelectOpen(open ? 'development_period' : null)
                    }
                  >
                    <PopoverTrigger className="w-full h-[50px]" asChild>
                      <Button
                        className="grid grid-cols-[1fr_auto]"
                        variant="outline"
                        ref={triggerRef}
                      >
                        <div className="text-start text-[#54595E] text-[16px]">
                          {selected.development_period
                            ? development_period.find(
                              (o: any) =>
                                o.value === selected.development_period,
                            )?.label
                            : 'Development Period'}
                        </div>
                        <i className="icon-right-arrow rotate-90 text-[#ABB5BE] text-[20px]"></i>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent style={{ width: triggerWidth }}>
                      <div className="flex flex-col gap-2">
                        {development_period.map((opt) => (
                          <label
                            key={opt.value}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() =>
                              handleSelect(opt.value, 'development_period')
                            }
                          >
                            <Checkbox
                              className="data-[state=checked]:bg-[#FB4E0B] data-[state=checked]:border-[#FB4E0B]"
                              checked={
                                selected.development_period === opt.value
                              }
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Popover
                    open={selectOpen === 'triangle_type'}
                    onOpenChange={(open) =>
                      setSelectOpen(open ? 'triangle_type' : null)
                    }
                  >
                    <PopoverTrigger className="w-full h-[50px]" asChild>
                      <Button
                        className="grid grid-cols-[1fr_auto]"
                        variant="outline"
                        ref={triggerRef}
                      >
                        <div className="text-start text-[#54595E] text-[16px]">
                          {selected.triangle_type
                            ? triangle_type.find(
                              (o) => o.value === selected.triangle_type,
                            )?.label
                            : 'Triangle Type'}
                        </div>
                        <i className="icon-right-arrow rotate-90 !text-[#ABB5BE] text-[20px]"></i>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent style={{ width: triggerWidth }}>
                      <div className="flex flex-col gap-2">
                        {triangle_type.map((opt) => (
                          <label
                            key={opt.value}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() =>
                              handleSelect(opt.value, 'triangle_type')
                            }
                          >
                            <Checkbox
                              className="data-[state=checked]:bg-[#FB4E0B] data-[state=checked]:border-[#FB4E0B]"
                              checked={selected.triangle_type === opt.value}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <div className="text-center ">
                    {' '}
                    <Button
                      type="button"
                      className="h-[45px] w-[100px] bg-[#FB4E0B] text-white border-none text-[16px] cursor-pointer"
                      variant="outline"
                      onClick={() => {
                        console.log(selected);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="bg-[#FB4E0B] grid justify-center items-center cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div className="flex flex-col gap-3 text-white ">
                <i className={cn('icon-right-arrow')}></i>
                <img src="/filter-text.svg" alt="text" />
              </div>
            </div>
          )}
        </div>
        <div className={cn('flex-1 px-[42px] pr-[34px]')}>
          <div className={cn('h-full border-[#FB4E0B]  border-[2px] grid grid-rows-[auto_1fr]')}>
            <div className=' grid grid-cols-7'>
              <DynamicTabs options={tabContent} onClick={(value)=>{console.log(value)}}/>
            </div>
            <TableComp />
          </div>
        </div>
      </div>
    </div>
  );
}
