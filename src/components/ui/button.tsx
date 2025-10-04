import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-[background-color,box-shadow,color,opacity,border-color] duration-[180ms] ease-[cubic-bezier(0.2,0.9,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_10px_30px_hsl(var(--primary)/0.12)] [&_svg]:transition-transform [&_svg]:duration-[180ms] [&_svg]:ease-[cubic-bezier(0.2,0.9,0.2,1)] hover:[&_svg]:translate-x-1 motion-reduce:[&_svg]:transition-none motion-reduce:[&_svg]:transform-none motion-reduce:transition-[background-color] motion-reduce:duration-[60ms]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "relative overflow-hidden bg-black/30 text-white/95 backdrop-blur-md border border-white/10 hover:bg-black/40 hover:text-white after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/5 after:to-white/0 after:opacity-0 after:transition-opacity after:duration-200 after:ease-[cubic-bezier(0.2,0.9,0.2,1)] hover:after:opacity-100 after:pointer-events-none [&>*]:drop-shadow-[0_1px_0_rgba(0,0,0,0.4)] [&>*]:relative [&>*]:z-10 motion-reduce:after:transition-none motion-reduce:transition-[background-color] motion-reduce:duration-[60ms]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
