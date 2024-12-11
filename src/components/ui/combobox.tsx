"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

export interface ComboboxOption {
  value: string;
  label: string;
}

interface ComboboxProps {
  options: ComboboxOption[];
  disabled?: boolean;
  placeholder?: string;
  emptyText?: string;
  buttonClassName?: string;
  onChangeAction?: (value: string) => void;
}

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      disabled = false,
      placeholder = "Select an option...",
      emptyText = "No option found.",
      buttonClassName = "w-full",
      onChangeAction,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
      <Popover open={open && !disabled} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("justify-between", buttonClassName)}
          >
            {value ? options.find(option => option.value === value)?.label : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("p-0", buttonClassName)}>
          <Command>
            <CommandInput placeholder={`Cari ${placeholder.toLowerCase()}...`} />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {options
                  ? options.map(option => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={currentValue => {
                          const newValue = currentValue === value ? "" : currentValue;
                          setValue(newValue);
                          setOpen(false);
                          onChangeAction?.(newValue);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === option.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))
                  : null}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

Combobox.displayName = "Combobox";

export default Combobox;
