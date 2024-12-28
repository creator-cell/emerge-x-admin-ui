"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CrossIcon, LocationIcon, SearchIcon, UploadIcon } from "@/assets/icons/svg-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  Plus } from "lucide-react";
import Modal from "@/components/Modal";
import Link from "next/link";

interface Client {
  id: string;
  name: string;
  businessType: string;
  location: string;
  email?: string;
  contactNumber?: string;
  password?: string;
}

const clients: Client[] = [
  {
    id: "COM-93HS",
    name: "Family First Realty",
    businessType: "Real estate",
    location: "114 Strand, London WC2R 0AG, United Kingdom",
  },
  {
    id: "COM-93HS",
    name: "Skyline",
    businessType: "Real estate",
    location: "Near Business Bay Metro Station - Dubai - United Arab Emirates",
    email: "Skyline@gmail.com",
    contactNumber: "+21 4335 3432",
    password: "Skylineadmin@134",
  },
  {
    id: "COM-93HS",
    name: "NextGen",
    businessType: "Tourism Development",
    location: "D69 - Nad Al Sheba 1 - Dubai - United Arab Emirates",
  },
  {
    id: "COM-93HS",
    name: "Horizons",
    businessType: "Construction",
    location: "41 21 Street  Nad Al Sheba 2 - Dubai - United Arab Emirates",
  },
  {
    id: "COM-93HS",
    name: "Ivory Tower Estates",
    businessType: "Automotive",
    location: "48GX+4R4 - Nad Al Sheba - Dubai - United Arab Emirates",
  },
  {
    id: "COM-93HS",
    name: "Cityscape",
    businessType: "Luxury Real Estate Development",
    location: "48CW+79H - Dubai - United Arab Emirates",
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
              onClick={() => setIsDialogOpen(true)}
            >
              <div className="border border-white rounded-[3px]">
                <Plus className="h-4 w-4" />
              </div>
              Add Task
            </Button>
          </div>
      
          {/* Table displaying client data */}
          <div className="rounded-[50px]">
        <table className="w-full">
          <thead>
            <tr className="tableBG">
              <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                CLIENT
              </th>
              <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                ID
              </th>
              <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                TYPE OF BUSINESS
              </th>
              <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                LOCATION
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr
                key={index}
                className={`border-b last:border-b-0 ${
                  (index + 1) % 2 === 0 || index + 1 === 4
                    ? "tableBG border-none"
                    : "border-none"
                }`}
                
              >
                <td className="py-3 px-4 text-[16px] text-black font-semibold flex items-center">
                  <Image
                    src="/images/Avatar.svg"
                    alt={client.name}
                    width={40}
                    height={40}
                    className="mr-2"
                  />
                <Link href={`/client-list/${client.id}`}>

                  {client.name}
                  </Link>
                </td>
                

                <td className="py-3 px-4 text-[14px]">
                  <Link href={`/client-list/${client.id}`}>
                  {client.id}
                  </Link>
                  </td>
                <td className="py-3 px-4 text-[14px]">{client.businessType}</td>
                <td className="py-3 px-4 text-[14px]">{client.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDialogOpen && (
              <Modal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>

            <div className="flex justify-between items-center mb-2">
              <div className="text-[18px] font-semibold">Add client</div>
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
                <label className="modalLableStyle">Company name</label>
                <input
                  type="text"
                  value={formData.assignedTo}
                  onChange={(e) =>
                    setFormData({ ...formData, assignedTo: e.target.value })
                  }
                  placeholder="Enter company name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="space-y-1">
                <label className="modalLableStyle">Logo</label>
                <div className="flex items-center w-full border border-gray-300 rounded-md p-2">
                  <input
                    type="text"
                    value={formData.assignedTo}
                    onChange={(e) =>
                      setFormData({ ...formData, assignedTo: e.target.value })
                    }
                    placeholder="Upload logo"
                    className="flex-1 outline-none"
                  />
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <UploadIcon  />
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="modalLableStyle">Location</label>
                <div className="flex items-center w-full border border-gray-300 rounded-md p-2">
                  <input
                    type="text"
                    value={formData.assignedTo}
                    onChange={(e) =>
                      setFormData({ ...formData, assignedTo: e.target.value })
                    }
                    placeholder="Add the branch location from map"
                    className="flex-1 outline-none"
                  />
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <LocationIcon />
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="modalLableStyle">Type of business</label>
                <input
                  type="text"
                  value={formData.assignedTo}
                  onChange={(e) =>
                    setFormData({ ...formData, assignedTo: e.target.value })
                  }
                  placeholder="Enter business type"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="space-y-1">
                <label className="modalLableStyle">Emergency contact no</label>
                <input
                  type="text"
                  value={formData.assignedTo}
                  onChange={(e) =>
                    setFormData({ ...formData, assignedTo: e.target.value })
                  }
                  placeholder="Enter emergency contact"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="space-y-1">
                <label className="modalLableStyle">Email ID</label>
                <input
                  type="text"
                  value={formData.assignedTo}
                  onChange={(e) =>
                    setFormData({ ...formData, assignedTo: e.target.value })
                  }
                  placeholder="Enter email ID"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div className="space-y-1">
                <label className="modalLableStyle">Contact number</label>
                <input
                  type="text"
                  value={formData.assignedTo}
                  onChange={(e) =>
                    setFormData({ ...formData, assignedTo: e.target.value })
                  }
                  placeholder="Enter contact number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
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
