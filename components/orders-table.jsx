
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
const OrdersTable = () => {
    const data = [
        {
            img: '/pic1.jpeg',
            name: "Wade Warren",
            email: "wade@example.com",
            orderno: "54ad512",
            status: "Delivered",
            date: "2023-06-23",
            amount: "$250.00",
            statusVariant: "default",
        },
        {
            name: "Jane Cooper",
            img: '/pic2.jpeg',
            email: "jane@example.com",
            orderno: "87aqqw7",
            status: "Cancelled",
            date: "2023-06-24",
            amount: "$150.00",
            statusVariant: "destructive",
        },
        {
            name: "Guy Hawkins",
            email: "guy@example.com",
            img: '/pic3.png',
            orderno: "9632qwq",
            status: "Delivered",
            date: "2023-06-25",
            amount: "$350.00",
            statusVariant: "default",
        },
        {
            name: "Kristin Watson",
            img: '/pic4.jpeg',
            email: "watson@example.com",
            orderno: "qw745da",
            status: "Pending",
            date: "2023-06-26",
            amount: "$450.00",
            statusVariant: "destructive",
        },
        {
            name: "Cody Fisher",
            img: '/pic5.png',
            email: "fisher@example.com",
            orderno: "963vvv",
            status: "Delivered",
            date: "2023-06-23",
            amount: "$250.00",
            statusVariant: "default",
        },
        {
            name: "Savannah Nguyen ",
            img: '/pic6.jpg',
            email: "nguyen@example.com",
            orderno: "987qia000",
            status: "Delivered",
            date: "2023-06-23",
            amount: "$250.00",
            statusVariant: "default",
        }
    ];
    return (
        <Card>
            <CardHeader className="px-7 ">
                <div className='flex justify-between'>
                    <CardTitle>Recent Orders</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <Table className='min-w-full'>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden md:table-cell">Order No.</TableHead>
                            <TableHead className="hidden md:table-cell">Amount</TableHead>
                            <TableHead className="">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index} className='text-muted-foreground'>
                                <TableCell>
                                    <div className="font-medium flex items-center gap-3 text-muted-foreground ">
                                        <Avatar>
                                            <AvatarImage src={row.img} alt={`${row.name} profile`} />
                                            <AvatarFallback>{row.name}</AvatarFallback>
                                        </Avatar>
                                        <span>{row.name}</span></div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{row.orderno}</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {row.amount}
                                </TableCell>
                                <TableCell className="">
                                    <Badge className="text-xs" variant={row.statusVariant}>
                                        {row.status}
                                    </Badge>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default OrdersTable