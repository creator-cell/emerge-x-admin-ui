"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { CrossIcon, SearchIcon } from "@/assets/icons/svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Modal from "@/components/Modal";

const roles = [
    {
      role: "DPA/CSO",
      id: "COM-93HS",
      description:
        "Ensuring the safety, security, and environmental protection of ships...",
    },
    {
      role: "ARAMCO AVIATION",
      id: "COM-93HS",
      description:
        "Providing essential services to Saudi Aramco and other organizations...",
    },
    {
      role: "EMERGENCY RESPONSE CENTER",
      id: "COM-93HS",
      description:
        "Information gathering, decision-making, and resource allocation during...",
    },
  ];


const Page: React.FC = () => {
  
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
      taskHead: "",
      description: "",
      status: "",
      assignedTo: "",
    });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission here
      setIsDialogOpen(false);
    };

 

  return (
    <div className="w-full px-4 py-6">
            <div className="tableColorBG rounded-[16px] p-4">

         <div className="flex justify-between items-center mb-4">
            <div className="flex-1 rounded-[16px]">
              <div className="relative w-[400px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <SearchIcon />
                </span>
                <Input
                  placeholder="Search"
                  className="pl-10 w-full bg-gray-50"
                />
              </div>
            </div>
            <Button
              className="buttonBGG hover:bg-green-700"
              
            >
              <div className="border border-white rounded-[3px]">
                <Plus className="h-4 w-4" />
              </div>
              Add Role
            </Button>
          </div>
     
          <div className="rounded-[50px]">
        <table className="w-full">
          <thead>
            <tr className="tableBG">
              <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">Roles</th>
              <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">ID</th>
              <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">Description</th>

            </tr>
          </thead>
          <tbody>
            {roles.map((team, index) => (
              <tr
                key={index}
                className={`border-b last:border-b-0 ${
                  (index + 1) % 2 === 0 || index + 1 === 4 ? "tableBG border-none" : "border-none"
                }`}
                
              >
                <td className="px-4 py-2 font-medium text-gray-900 flex items-center min-w-[250px]">
                  {team.role}
                </td>
                <td className="px-4 py-2 ">{team.id}</td>
                <td className="px-4 py-2">{team.role}</td>
                <td className="px-4 py-2 flex items-center">
                  <Image
                    src="/images/trash.svg"
                    alt={team.role}
                    width={24}
                    height={24}
                    className="mr-4"
                  />
                  <Image
                    src="/images/edit.svg"
                    alt={team.role}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

{isDialogOpen && (
      <Modal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <div className="flex justify-between items-center mb-2">
              <div className="text-[18px] font-semibold">Create new team</div>
              <div
                onClick={() => setIsDialogOpen(false)}
                className="cursor-pointer"
              >
                <CrossIcon />
              </div>
            </div>
            <hr className="mb-2" />
            <form onSubmit={handleSubmit} className="space-y-2">
              {/* Task Head */}
              

              

              <div className="space-y-1">
                <label className="modalLableStyle">Team Name</label>
                <input
                  type="text"
                  value={formData.assignedTo}
                  onChange={(e) =>
                    setFormData({ ...formData, assignedTo: e.target.value })
                  }
                  placeholder="Enter team name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

               {/* Description */}
               <div className="space-y-2">
                <label className="modalLableStyle">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Enter task description"
                  className="w-full p-2 border border-gray-300 rounded-md min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <label className="modalLableStyle">Role</label>
                <select
                  value={formData.taskHead}
                  onChange={(e) =>
                    setFormData({ ...formData, taskHead: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md modalLableInput"
                >
                  <option value="">Select role</option>
                  <option value="demo-request">VTS</option>
                  <option value="tech-support">VTS</option>
                </select>
              </div>

             
              
             
              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-green-600 rounded-md text-gray-700 text-green-600 hover:bg-gray-200"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 buttonBGG text-white rounded-md hover:bg-green-700"
                >
                  Add Client
                </button>
              </div>
            </form>
            </Modal>
      )}
      </div>
    </div>
  );
};

export default Page;
