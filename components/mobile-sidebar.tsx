"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden  hover:bg-white/5"
        >
          <Menu className="text-white/80 " />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0  border-r-black">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};
