"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white  font-bold py-36 text-center space-y-5">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
        <h1 className="p-2">One Ai generator you only need</h1>
        <div className=" bg-clip-text text-[#4EC077]">
          <TypewriterComponent
            options={{
              strings: [
                "Text Generation",
                "Image Generation.",
                "Song Generation.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="md:text-lg bg-[#4EC077] text-black hover:bg-[#4EC077] p-4 md:p-6 rounded-full font-semibold">
            Start Generating For Free
            <MoveUpRight className="text-base font-thin" />
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
