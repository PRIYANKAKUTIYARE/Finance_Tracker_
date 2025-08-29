// import React from 'react'
"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
const HeroSection = () => {
    return (
        <div className="pb-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-8xl lg:text=[105px] pb-6 gradient-title font-bold mb-4">
                    Manage your Finances effortlessly with FinTechAi
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    An AI-powered personal finance assistant that helps you manage your money, track your expenses, and achieve your financial goals with ease.
                </p>
            </div>

            <div className="container mx-auto text-center">
                <Link href="/dashboard">
                    <Button size="lg" className="px"> Get Started</Button>
                </Link>
            </div>
            <div>
                <div>
                    <Image
                        src="/banner.jpg"
                        width={1280}
                        height={720}
                        alt="Dashboard Image"
                        className="rounded-lg mt-8 shadow-2xl border mx-auto">

                    </Image>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
