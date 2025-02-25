import React, { useState } from 'react';
import { 
  Dropdown,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '../../../../packages/ui/components/dropdown/Dropdown';

export default function ComponentPreview() {
  const [value, setValue] = useState("option1");

  return (
    <Dropdown>
      <DropdownMenuTrigger className="px-4 py-2 border rounded-md">
        Select Option
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup 
          value={value} 
          onValueChange={setValue}
        >
          <DropdownMenuRadioItem 
            value="option1"
            className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Radio Item 1
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem 
            value="option2"
            className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Radio Item 2
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </Dropdown>
  );
}