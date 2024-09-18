'use client'
import {CardDemo} from "@/components/ui/cardHeroSection";
import { AnimatedBeamDemo } from "@/components/ui/allConectedHeroSection";
import { AuthProvider } from "@/components/ui/AuthProvider";
import { BentoDemo } from "@/components/ui/bentoGridHeroSection";
import { MarqueeDemo } from "@/components/ui/marqueeHeroSection";
import Header from "@/components/ui/modernHeader";
import Navbar from "@/components/ui/navbar";

export default function Home() {
    return (
        <AuthProvider>
            <div className="relative flex flex-col min-h-[100vh] dark:bg-zinc-950 bg-neutral-100">
                <Navbar />
                <main className="flex-1">
                    <Header />
                    <MarqueeDemo />
                    <BentoDemo />
                    <AnimatedBeamDemo />
                    <CardDemo />
                </main>
            </div>
        </AuthProvider>

    );
}