import React from 'react'
import { CardContent, Card } from './ui/card'
import { Apple, ChevronRight, ConciergeBell, Crosshair } from 'lucide-react'

const GoalsList = () => {
    const items = [
        {
            icon: Crosshair,
            label: "Goals",
            textColor: 'text-orange-400',
            color: 'bg-orange-900',
        },
        {
            icon: Apple,
            label: "Popular Dishes",
            textColor: 'text-blue-400',
            color: 'bg-blue-900'
        },
        {
            icon: ConciergeBell,
            label: "Menus",
            textColor: 'text-cyan-400',
            color: 'bg-cyan-900'
        }
    ]
    return (
        <Card>
            <CardContent className='p-6' asChild>
                <ul className='space-y-5'>
                    {items.map((item, ind) => {
                        const Icon = item.icon
                        return (
                            <li key={ind} className='flex items-center gap-3 group cursor-pointer'>
                                <div className=''>
                                    <span className={`rounded-full inline-block p-4 ${item.textColor} ${item.color}`}><Icon /></span>
                                </div>

                                <p className='text-xl text-muted-foreground cursor-pointer group-hover:text-foreground'>{item.label}</p>
                                <div className='ml-auto'>
                                    <button className='rounded-full p-2 bg-muted text-muted-foreground inline-block cursor-pointer group-hover:text-foreground transition-colors'><ChevronRight /></button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </CardContent>
        </Card>
    )
}

export default GoalsList