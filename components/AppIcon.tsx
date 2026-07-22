import type { LucideIcon } from "lucide-react";

const SIZES = {
  lg: { tile: "w-20 h-20", icon: "w-10 h-10" },
  md: { tile: "w-14 h-14", icon: "w-7 h-7" },
  sm: { tile: "w-12 h-12", icon: "w-6 h-6" },
  xs: { tile: "w-8 h-8", icon: "w-4 h-4" },
};

export default function AppIcon({
  icon: Icon,
  gradient,
  size = "md",
}: {
  icon: LucideIcon;
  gradient: string;
  size?: keyof typeof SIZES;
}) {
  const { tile, icon } = SIZES[size];

  return (
    <div
      className={`relative ${tile} rounded-[22%] flex items-center justify-center overflow-hidden shadow-md shadow-black/10 dark:shadow-black/40 bg-gradient-to-br ${gradient}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/5 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[22%] ring-1 ring-inset ring-white/20"
      />
      <Icon className={`relative ${icon} text-white drop-shadow-sm`} strokeWidth={2} />
    </div>
  );
}
