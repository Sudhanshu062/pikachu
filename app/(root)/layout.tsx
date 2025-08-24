import React from 'react'

import { ChevronLeft, Ellipsis } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'

const Layout = ({
    microphone,
}: {
    microphone: React.ReactNode
}) => {
    return (
        <main className='h-screen w-screen flex flex-col gap-4 p-4'>

            <header className='border flex justify-between items-center p-2 px-6'>

                <div className='flex justify-center items-center gap-4'>

                    <Button size="icon" className="size-8 cursor-pointer">
                        <ChevronLeft />
                    </Button>

                    <div className='flex items-center gap-2'>
                        <Avatar className='h-14 w-14' >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col gap-0'>
                            <span className='font-bold text-2xl'>therapist name</span>
                            <span className='text-sm text-muted-foreground'>Some description</span>
                        </div>
                    </div>

                </div>

                <span>Online</span>

            </header>

            <section className='h-full flex justify-between gap-4'>

                <section className='h-full w-2/3 border flex justify-center items-center rounded'>
                    <div className='h-60 w-60 bg-amber-300 rounded flex flex-col justify-center items-center'>
                        <div className='h-16 w-16 bg-black rounded-full flex justify-center items-center'><Ellipsis className='text-white' /></div>
                        <span className='mt-2 font-bold'>Assistant Name</span>
                    </div>
                </section>

                <section className='w-1/3 flex flex-col justify-between '>

                    <div className='flex flex-col gap-4'>

                        <div className='flex flex-col justify-center items-center py-4 border rounded-lg'>
                            <Avatar className='h-24 w-24'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className='font-extrabold text-2xl'>Shad CN</span>
                        </div>

                        {microphone}

                        <div className='flex justify-center items-center py-2 border'>
                            Session Time : 00:15:30
                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <Button className='w-full'>Open White Board</Button>
                        <Button variant="destructive" className='w-full'>End Session</Button>
                    </div>

                </section>

            </section>

            <footer className='flex justify-end items-center border p-4'>
                <p>Mathy: Hello. Let's start the session.</p>
            </footer>

        </main>
    )
}

export default Layout

