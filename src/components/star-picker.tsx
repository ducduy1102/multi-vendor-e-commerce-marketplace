"use client";

import { useState } from "react";
import { StarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface StarPickerProps {
  value?: number;
  onChange?: (rating: number) => void;
  disabled?: boolean;
  className?: string;
}

export const StarPicker = ({
  value = 0,
  onChange,
  disabled,
  className,
}: StarPickerProps) => {
  const [hovered, setHovered] = useState(0);

  const handleChange = (value: number) => {
    onChange?.(value);
  };

  return (
    <div
      className={cn(
        "flex items-center",
        className,
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type='button'
          disabled={disabled}
          className={cn(
            "p-0.5 transition",
            hovered && "fill-primary",
            !disabled && "hover:scale-110 cursor-pointer"
          )}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => handleChange(star)}
        >
          <StarIcon
            className={cn(
              "size-5",
              (hovered || value) >= star
                ? "fill-black stroke-black"
                : "stroke-black",
              disabled && "cursor-not-allowed opacity-50"
            )}
          />
        </button>
      ))}
    </div>
  );
};
