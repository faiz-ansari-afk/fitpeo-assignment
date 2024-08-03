/* eslint-disable @next/next/no-img-element */
"use client"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Mail, Settings } from "lucide-react"


const Profile = () => {
    return (
        <>
            <div className='md:hidden'>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                            <Avatar>
                                <AvatarImage src="/profile.webp" />
                                <AvatarFallback>Profile</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='hidden md:flex gap-2 items-center justify-center'>
                <button className='bg-muted rounded-full p-2'>
                    <Mail className='h-4 w-4 text-muted-foreground hover:text-foreground transition-colors ' />
                </button>
                <button className='bg-muted rounded-full p-2'>
                    <Settings className='h-4 w-4 text-muted-foreground hover:text-foreground transition-colors ' />
                </button>
                <button className='bg-muted rounded-full p-2 relative'>
                    <Bell className='h-4 w-4 text-muted-foreground hover:text-foreground transition-colors ' />
                    <span className='absolute bg-primary-foreground inline-block h-2 w-2 top-2 rounded full' />
                </button>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full ml-4">
                    <Avatar>
                        <AvatarImage src="/profile.webp" />
                        <AvatarFallback>Profile</AvatarFallback>
                    </Avatar>
                </Button>
            </div>
        </>
    )
}

export default Profile