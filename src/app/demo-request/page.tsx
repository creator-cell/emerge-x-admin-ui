"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/assets/icons/svg-icons";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface Client {
  id: string;
  name: string;
  businessType: string;
  contactNumber?: string;
  email?: string;
  password?: string;
}

const clients: Client[] = [
  {
    id: "COM-93HS",
    name: "Family First Realty",
    businessType: "Real estate",
    contactNumber: "+44 20 7946 0958",
  },
  {
    id: "COM-93HS",
    name: "Skyline",
    businessType: "Real estate",
    contactNumber: "+971 4 435 3432",
    email: "Skyline@gmail.com",
    password: "Skylineadmin@134",
  },
  {
    id: "COM-93HS",
    name: "NextGen",
    businessType: "Tourism Development",
    contactNumber: "+971 55 678 1234",
  },
  {
    id: "COM-93HS",
    name: "Horizons",
    businessType: "Construction",
    contactNumber: "+971 50 987 6543",
  },
  {
    id: "COM-93HS",
    name: "Ivory Tower Estates",
    businessType: "Automotive",
    contactNumber: "+971 52 345 6789",
  },
  {
    id: "COM-93HS",
    name: "Cityscape",
    businessType: "Luxury Real Estate Development",
    contactNumber: "+971 56 234 5678",
  },
];

const headers = ["Client", "ID", "Type of Business", "Contact"];

const Page: React.FC = () => {
 

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
          Add Demo
        </Button>
      </div>

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
                CONTACT
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
                <td className="px-4 py-2 font-medium text-gray-900 flex items-center min-w-[250px]">
                  <Image
                    src="/images/Avatar.svg"
                    alt={client.name}
                    width={40}
                    height={40}
                    className="mr-2"
                  />
                  {client.name}
                </td>
                <td className="px-4 py-2 ">{client.id}</td>
                <td className="px-4 py-2">{client.businessType}</td>
                <td className="px-4 py-2">{client.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Page;
