import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'

const NetProfit = () => {
    return (
        <Card className=" ">
            <CardContent className='p-6 grid grid-cols-1 md:grid-cols-2 '>

                <div className='flex-grow'>
                    <h3 className="text-sm pb-3 text-muted-foreground">Net Profit</h3>
                    <p className="text-3xl font-bold pb-3">$ 6759.25</p>
                    <p className="text-green-500">▲ 3%</p>
                </div>
                <div className="flex items-center pb-6">
                    <div className="relative size-24 flex-grow">
                        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            {/* <!-- Background Circle --> */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary " strokeWidth="4"></circle>
                            {/* <!-- Progress Circle --> */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary-foreground" strokeWidth="4" strokeDasharray="100" strokeDashoffset="30" strokeLinecap="round"></circle>
                        </svg>
                        <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <p class="text-center text-2xl font-bold text-primary-foreground">70%</p>
                            <p className='text-[8px] text-muted-foreground text-center'>Goal</p>
                            <p className='text-[8px] text-muted-foreground text-center'>completed</p>
                        </div>
                        <p className='text-[10px] text-center py-2 text-muted-foreground'>*The value here has been rounded off </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default NetProfit