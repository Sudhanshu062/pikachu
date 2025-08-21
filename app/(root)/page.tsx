import React from 'react'

import { HandMetal, Mic } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'

const Page = () => {
    return (
        <section className='h-screen w-screen flex flex-col gap-4 p-8'>
            <div className='w-full p-4 px-6 border rounded-lg'>
                <h1 className='text-4xl font-bold'>Page</h1>
            </div>
            <div className='h-full w-full flex justify-between gap-8'>
                <div className='w-3/5 h-full flex justify-center items-center border'><HandMetal /></div>
                <div className='w-2/5 h-full flex flex-col gap-4'>
                    <div className='flex flex-col justify-center items-center gap-2 py-6 border'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className='font-extrabold text-2xl'>Shad CN</span>
                    </div>
                    <div className='flex flex-col justify-center gap-2 items-center py-4 border'>
                        <Mic className='h-10 w-10' />
                        <span className='font-medium'>Turn Off Microphone</span>
                    </div>
                    <div className='flex justify-center items-center py-4 border'>
                        Session Time : 00:15:30
                    </div>
                    <Button variant="destructive">End Session</Button>
                </div>
            </div>
        </section>
    )
}

export default Page