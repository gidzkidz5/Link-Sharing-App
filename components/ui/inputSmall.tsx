import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const InputSmall = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isError = false, ...props }, ref) => {
    return (
      <div className="relative flex items-center col-span-2">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border bg-background pr-3 pl-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted placeholder:text-opacity-20 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:cursor-text",
            className,
            {
              "border-destructive text-destructive placeholder:text-destructive focus-visible:border-destructive input-error hover:border-destructive":
                isError,
              "focus-visible:border-primary hover:cursor-pointer input-normal hover:border-primary":
                !isError,
            }
          )}
          ref={ref}
          {...props}
        />
        {isError && (
          <p className="absolute fs-body-S text-destructive right-0 mr-4">
            Please Check Again
          </p>
        )}
      </div>
    );
  }
);
InputSmall.displayName = "Input";

export { InputSmall };
