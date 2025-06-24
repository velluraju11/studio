import { cn } from "@/lib/utils"
import * as React from "react"

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_40%)]",
      className
    )}
    {...props}
  />
))
Glow.displayName = "Glow"

export { Glow }
