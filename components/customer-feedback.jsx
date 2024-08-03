"use client"

import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";

const CustomerFeedback = () => {
    const feedbacks = [
        {
            name: "Jenny Wilson",
            feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
            rating: 3,
            avatar: "/pic1.jpeg",
        },
        {
            name: "Dianne Russell",
            feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
            rating: 5,
            avatar: "/pic2.jpeg",
        },
        {
            name: "Devon Lane",
            feedback: "Normally wines are wines, but theirs are lean meaty and tender.",
            rating: 4,
            avatar: "/pic3.png",
        },
    ];
    return (
        <Card className="">
            <CardHeader>
                <h2 className="text-xl  ">Customer&apos;s Feedback</h2>

            </CardHeader>
            <CardContent className='p-6 pt-0'>
                {feedbacks.map((feedback, index) => (
                    <FeedbackCard key={index} {...feedback} />
                ))}
            </CardContent>
        </Card>
    )
}

export default CustomerFeedback

const FeedbackCard = ({ name, feedback, rating, avatar }) => (
    <Card className=" p-4 rounded-lg shadow-lg mb-4">
        <div className="flex items-center mb-2">
            <Avatar>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
                <h3 className="text-lg  opacity-90">{name}</h3>
            </div>
        </div>
        <div className=" flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
                const fillColor = rating >= (i + 1)
                return (
                    <span key={i} className={` ${fillColor && 'text-yellow-400'}`}><Star size={14} fill={fillColor && 'yellow'} /></span>
                )
            })}
        </div>
        <p className='text-sm text-muted-foreground pt-2'>{feedback}</p>
    </Card>
);