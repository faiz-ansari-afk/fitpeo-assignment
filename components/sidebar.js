'use client';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import {
  ClipboardCheck,
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
  SettingsIcon,
  ShoppingBag,
  ShoppingCartIcon,
  SquareKanban,
  UsersIcon,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const items = [
    {
      icon: <HomeIcon className="ml-2 flex-shrink-0 h-5 w-5" />,
      label: 'Dashboard',
    },
    {
      icon: <SquareKanban className="ml-2 flex-shrink-0 h-5 w-5 rotate-180" />,
      label: 'Analytics',
    },
    {
      icon: <ClipboardCheck className="ml-2 flex-shrink-0 h-5 w-5" />,
      label: 'Deliveries',
    },
    {
      icon: <Wallet className="ml-2 flex-shrink-0 h-5 w-5" />,
      label: 'Finance',
    },
    {
      icon: <ShoppingBag className="ml-2 flex-shrink-0 h-5 w-5" />,
      label: 'Orders',
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col justify-center items-start gap-4  sm:py-5">
        <TooltipProvider>
          <Link
            href="#"
            className="group flex h-9 w-9 ml-2 shrink-0 items-center justify-center gap-2 border rounded-lg bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            prefetch={false}
          >
            <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {items.map((item, ind) => {
            return (
              <Tooltip key={ind}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className={`flex h-9 w-9 items-center justify-center   md:h-8 md:w-8  ${
                      ind === 0
                        ? 'border-l-[3px] border-primary-foreground text-primary-foreground'
                        : 'text-muted-foreground  transition-colors hover:text-primary-foreground border-transparent border-l-[3px] hover:border-primary-foreground'
                    }`}
                    prefetch={false}
                  >
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                prefetch={false}
              >
                <SettingsIcon className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default Sidebar;
