'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const words = ['bank', 'QRIS', 'e-wallet']

export function Hero() {
    const [currentWord, setCurrentWord] = useState(words[0])
    const [fade, setFade] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true)
            setTimeout(() => {
                setCurrentWord((prevWord) => {
                    const nextIndex = (words.indexOf(prevWord) + 1) % words.length
                    return words[nextIndex]
                })
                setFade(false)
            }, 500)
        }, 2000) // Change word every 2 seconds

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-10 text-gray-900 dark:text-white">
                Exchange crypto directly to your
                <span className="inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block text-[#7BC9FF]">
                        <li>bank</li>
                        <li>QRIS</li>
                        <li>e-wallet</li>
                        <li aria-hidden="true">bank</li>
                    </ul>
                </span>
                <svg className="absolute left-0 w-[40%]" viewBox="0 0 358 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 23.1069C26.6406 16.1516 78.4403 5.45682 121.23 9.42614C172.153 14.087 177.803 24.0999 223.5 28.6805C269.197 33.2612 315.987 9.21322 357 1" stroke="#7BC9FF" strokeWidth="2" />
                </svg>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-xl mb-8">
                Experience seamless trading with instant transfers. Your gateway to the future of decentralized finance.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="bg-[#7BC9FF] text-white hover:opacity-90 transition-opacity">
                    Nebula Wallet
                    <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
