
import { Input } from "@/components/ui/input"

import Sidebar from "./sidebar"
import SidebarMobile from "./sidebar-mobile"
import Profile from "./profile"
import Summary from "./summary"
import NetProfit from "./net-profit"
import GoalsList from "./goals-list"
import CustomerFeedback from "./customer-feedback"
import OrdersTable from "./orders-table"
import { ChartExample } from "./chart-example"


export function Dashboard() {
  return (
    (<div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header
          className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <SidebarMobile />
          <div className="relative mr-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
          </div>
          <Profile />

        </header>
        <h2 className='text-xl p-4 sm:px-6 sm:py-0'>Dashboard</h2>
        <main
          className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">

          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

            <Summary />
            <div className="">
              <ChartExample />
            </div>
            <OrdersTable />
          </div>
          <div className='grid auto-rows-max items-start gap-4 md:gap-8 '>
            {/* Right side div */}
            <NetProfit />
            <GoalsList />
            <CustomerFeedback />
          </div>
        </main>
      </div>
    </div>)
  );
}





function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}

