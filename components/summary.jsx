import { BadgeDollarSign, CircleCheck, CirclePlus, CircleX, ShoppingBag } from 'lucide-react';

import { Card, CardHeader, CardContent } from './ui/card';
import { cn } from '@/lib/utils';

const Summary = () => {
    const data = [
        { icon: CirclePlus, title: "Total Orders", value: 75, change: "3%", changeType: "increase", color: 'bg-indigo-500 bg-opacity-20 text-indigo-600 ' },
        { icon: CircleCheck, title: "Total Delivered", value: 70, change: "3%", changeType: "decrease", color: 'bg-lime-500 bg-opacity-20 text-lime-600' },
        { icon: CircleX, title: "Total Cancelled", value: 5, change: "3%", changeType: "decrease", color: 'bg-rose-500 bg-opacity-20 text-rose-600' },
        { icon: BadgeDollarSign, title: "Total Revenue", value: "$12k", change: "3%", changeType: "increase", color: 'bg-fuchsia-500 bg-opacity-20 text-fuchsia-600' },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item, index) => (
                <Box key={index} {...item} />
            ))}
        </div>
    );

}

export default Summary

const Box = ({ icon: Icon, title, value, change, changeType, color }) => {
    return (
        <Card className="">
            <CardHeader className='pb-2'>
                <div className={`relative ${color} w-fit p-3 rounded-lg`} >
                    {title !== 'Total Revenue' ? <><ShoppingBag />
                        <div className={cn(`absolute text-xl right-2 bottom-2 ${color}`, 'bg-opacity-80 rounded-lg text-muted')} >
                            <Icon size={14} />
                        </div></> :
                        <Icon />
                    }
                </div>
                    <h3 className="">{title}</h3>

            </CardHeader>
            <CardContent >
                <div className="">
                    <div className='flex justify-between items-center'>
                        <p className="text-2xl font-bold">{value}</p>
                        <p className={`text-sm ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                            {changeType === 'increase' ? '▲' : '▼'} {change}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};