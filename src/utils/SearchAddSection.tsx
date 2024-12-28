import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, SearchIcon } from "lucide-react";

interface SearchAddSectionProps {
  onAddClick: () => void;
}

const SearchAddSection: React.FC<SearchAddSectionProps> = ({ onAddClick }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex-1 rounded-[16px]">
        <div className="relative w-[400px]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <SearchIcon />
          </span>
          <Input placeholder="Search" className="pl-10 w-full bg-gray-50" />
        </div>
      </div>
      <Button
        className="buttonBGG hover:bg-green-700"
        onClick={onAddClick} // Attach the onAddClick handler here
      >
        <div className="border border-white rounded-[3px]">
          <Plus className="h-4 w-4" />
        </div>
        Add Task
      </Button>
    </div>
  );
};

export default SearchAddSection;
