

"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"


const chartData = [
    { date: "2024-05-21", weekly: 82, monthly: 140 },
    { date: "2024-05-22", weekly: 81, monthly: 120 },
    { date: "2024-05-23", weekly: 252, monthly: 290 },
    { date: "2024-05-24", weekly: 294, monthly: 220 },
    { date: "2024-05-25", weekly: 201, monthly: 250 },
    { date: "2024-05-26", weekly: 213, monthly: 170 },
    { date: "2024-05-27", weekly: 420, monthly: 460 },
    { date: "2024-05-28", weekly: 233, monthly: 190 },
    { date: "2024-05-29", weekly: 78, monthly: 130 },
    { date: "2024-05-30", weekly: 340, monthly: 280 },
    { date: "2024-05-31", weekly: 178, monthly: 230 },
    { date: "2024-06-01", weekly: 178, monthly: 200 },
    { date: "2024-06-02", weekly: 470, monthly: 410 },
    { date: "2024-06-03", weekly: 103, monthly: 160 },
    { date: "2024-06-04", weekly: 439, monthly: 380 },
    { date: "2024-06-05", weekly: 88, monthly: 140 },
    { date: "2024-06-06", weekly: 294, monthly: 250 },
    { date: "2024-06-07", weekly: 323, monthly: 370 },
    { date: "2024-06-08", weekly: 385, monthly: 320 },
    { date: "2024-06-09", weekly: 438, monthly: 480 },
    { date: "2024-06-10", weekly: 155, monthly: 200 },
    { date: "2024-06-11", weekly: 92, monthly: 150 },
    { date: "2024-06-12", weekly: 492, monthly: 420 },
    { date: "2024-06-13", weekly: 81, monthly: 130 },
    { date: "2024-06-14", weekly: 426, monthly: 380 },
    { date: "2024-06-15", weekly: 307, monthly: 350 },
    { date: "2024-06-16", weekly: 371, monthly: 310 },
    { date: "2024-06-17", weekly: 475, monthly: 520 },
    { date: "2024-06-18", weekly: 107, monthly: 170 },
    { date: "2024-06-19", weekly: 341, monthly: 290 },
    { date: "2024-06-20", weekly: 408, monthly: 450 },
    { date: "2024-06-21", weekly: 169, monthly: 210 },
    { date: "2024-06-22", weekly: 317, monthly: 270 },
    { date: "2024-06-23", weekly: 480, monthly: 530 },
    { date: "2024-06-24", weekly: 132, monthly: 180 },
    { date: "2024-06-25", weekly: 141, monthly: 190 },
    { date: "2024-06-26", weekly: 434, monthly: 380 },
    { date: "2024-06-27", weekly: 448, monthly: 490 },
    { date: "2024-06-28", weekly: 149, monthly: 200 },
    { date: "2024-06-29", weekly: 103, monthly: 160 },
    { date: "2024-06-30", weekly: 446, monthly: 400 },
]

const chartConfig = {
    views: {
        label: "Sale",
    },
    weekly: {
        label: "Weekly",
        color: "hsl(var(--chart-1))",
    },
    monthly: {
        label: "Monthly",
        color: "hsl(var(--chart-2))",
    },
}

export function ChartExample() {
    const [activeChart, setActiveChart] =
        React.useState("weekly")

    const total = React.useMemo(
        () => ({
            weekly: chartData.reduce((acc, curr) => acc + curr.weekly, 0),
            monthly: chartData.reduce((acc, curr) => acc + curr.monthly, 0),
        }),
        []
    )

    return (
        <Card>
            <div className="flex  border-b  py-3">
                <div className=" px-2 md:px-6 flex-grow ">
                    <CardTitle>Activity</CardTitle>
                </div>
                <div className="flex ml-auto">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <button className='border rounded-full px-3 py-1 flex gap-1 text-sm items-center mx-2 md:mx-6 text-muted-foreground bg-muted hover:text-foreground'>Filter <ChevronDown size={16} /></button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            {["weekly", "monthly"].map((key) => {
                                const chart = key;
                                return (
                                    <DropdownMenuRadioGroup value={activeChart} onValueChange={() => setActiveChart(chart)} key={chart}>
                                        <DropdownMenuRadioItem value={chart}>{chart}</DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>

                                )
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
