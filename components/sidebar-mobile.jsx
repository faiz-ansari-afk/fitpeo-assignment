"use client"
import { HomeIcon, LineChartIcon, SettingsIcon, Package2Icon, PackageIcon, PanelLeftIcon, ShoppingCartIcon, UsersIcon, SquareKanban, ClipboardCheck, Wallet, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from './ui/button'

const SidebarMobile = () => {
    const items = [
        {
            icon: <HomeIcon className=" h-5 w-5" />,
            label: 'Dashboard',
        },
        {
            icon: <SquareKanban className=" h-5 w-5 rotate-180" />,
            label: 'Analytics',
        },
        {
            icon: <ClipboardCheck className=" h-5 w-5" />,
            label: 'Deliveries',
        },
        {
            icon: <Wallet className=" h-5 w-5" />,
            label: 'Finance',
        },
        {
            icon: <ShoppingBag className=" h-5 w-5" />,
            label: 'Orders',
        },
    ];
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeftIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                        href="#"
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        prefetch={false}>
                        <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    {items.map((item, ind) => {
                        return (
                            <Link
                                href="#" key={ind}
                                className={`flex items-center gap-4 px-2.5 text-muted-foreground 
                                    ${ind === 0 ? 'text-primary-foreground' : 'hover:text-primary-foreground'}
                                    `}
                                prefetch={false}>
                                {item.icon}
                                {item.label}
                            </Link>
                        )
                    })}

                    <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-primary-foreground"
                        prefetch={false}>
                        <SettingsIcon className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default SidebarMobile