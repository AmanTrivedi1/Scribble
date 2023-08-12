import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4  border-white/10 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={cn("md:w-10 md:h-10 w-5 h-5", iconColor)} />
        </div>
        <div>
          <h2 className="md:text-3xl text-xl text-white/80 font-bold">
            {title}
          </h2>
          <p className="md:text-sm text-xs  text-white/30 ">{description}</p>
        </div>
      </div>
    </>
  );
};
