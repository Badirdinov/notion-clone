import React from 'react';
import { Loader2 } from "lucide-react";
import {cva, type VariantProps} from "class-variance-authority";
import { cn } from "@/lib/utils";


const LoaderVariants = cva(
  'text-muted-foreground  animate-spin', {
      variants: {
          size: {
              default: 'h-4 w-4',
              sm: 'h-2 w-2',
              lg: 'h-6 w-6',
              xl: 'h-10 w-10'
          }
      },
      defaultVariants: {
          size: 'default'
      }
  },
)

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof LoaderVariants> {

}

const Loader = ({size}: LoaderProps) => {
    return <Loader2 className={cn(LoaderVariants({size}))} />
};

export default Loader;
