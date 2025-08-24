"use client"

import React, { useState, useEffect, useRef } from 'react'

import { Mic, MicOff } from 'lucide-react'

const Page = () => {

    const [microphoneStatus, setMicrophoneStatus] = useState<"on" | "off">("off")

    const pressStartTimeRef = useRef<number | null>(null)
    const micTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' && pressStartTimeRef.current === null) {
                pressStartTimeRef.current = Date.now()

                micTimeoutRef.current = setTimeout(() => {
                    setMicrophoneStatus("on")
                }, 300)
            }
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                pressStartTimeRef.current = null

                if (micTimeoutRef.current) {
                    clearTimeout(micTimeoutRef.current)
                    micTimeoutRef.current = null
                }

                if (microphoneStatus === "on") {
                    setMicrophoneStatus("off")
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }

    }, [microphoneStatus])

    return (
        <div className='flex flex-col justify-center gap-2 items-center py-4 border rounded'>
            {microphoneStatus === "on" ? (
                <Mic onClick={() => setMicrophoneStatus("off")} className='h-10 w-10 text-red-500' />
            ) : (
                <MicOff onClick={() => setMicrophoneStatus("on")} className='h-10 w-10 text-gray-500' />
            )}
            <span className='font-medium'>
                Microphone is {microphoneStatus === "on" ? "On" : "Off"}
            </span>
        </div>
    )
}

export default Page
