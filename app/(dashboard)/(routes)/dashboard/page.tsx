"use client";
import {
  ArrowRight,
  MessageSquare,
  Music,
  ImageIcon,
  VideoIcon,
  Code,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// import { tools } from "@/constants";
const poppins = Montserrat({ subsets: ["latin"] });
const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",

    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",

    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",

    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",

    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",

    href: "/code",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="">
      <div className="mb-8  space-y-4">
        <h2
          className={cn(
            "text-2xl md:text-4xl text-white font-bold text-center",
            poppins.className
          )}
        >
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground pl-2 pr-2  font-light text-sm md:text-lg text-center">
          Options we have for your solution
        </p>
      </div>
      <div className="   px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-white/10 flex items-center bg-[#000000]  text-white/80  justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4 ">
              <div className="p-2 w-fit rounded-md">
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-10 hover:bg-white/10 text-white/80 rounded-full h-10 p-2" />
          </Card>
        ))}
      </div>
    </div>
  );
}
