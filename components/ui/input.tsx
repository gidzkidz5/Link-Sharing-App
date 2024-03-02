import * as React from "react"

import { cn } from "@/lib/utils"


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isError = false, ...props}, ref) => {

    return (
      <div className="relative flex items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background pr-3 pl-12 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted placeholder:text-opacity-20 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:cursor-text",
            className, {
              "border-destructive text-destructive placeholder:text-destructive focus-visible:border-destructive input-error hover:border-destructive": isError,
              "focus-visible:border-primary hover:cursor-pointer input-normal hover:border-primary": !isError
            }
            )}
            ref={ref}
            {...props}
          />
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#737373" d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"/></svg>
          {isError && <p className="absolute fs-body-S text-destructive right-0 mr-4">Please Check Again</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
