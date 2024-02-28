import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string | React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  className,
  variant = "primary",
  onClick,
  ...props
}) => {
  let buttonVariant =
    "bg-primary hover:bg-primary-foreground disabled:bg-primary-foreground text-white";
  if (variant == "secondary") {
    buttonVariant =
      "bg-white hover:bg-secondary border-primary text-primary border disabled:hover:bg-white";
  }

  return (
    <div className={disabled ? "opacity-50" : ""}>
      <button
        className={cn(
          "rounded-lg  px-4 py-2 w-full hover:text-opacity-100 hover:cursor-pointer disabled:text-opacity-55 fs-bold-S",
          buttonVariant,
          className
        )}
        disabled={disabled}
        {...props}
        onClick={onClick}
      >
        <span className="max-w-fit">{text}</span>
      </button>
    </div>
  );
};

export default Button;
