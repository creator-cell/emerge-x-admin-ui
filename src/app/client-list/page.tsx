"use client";
import CompanyDetails from "@/components/clients/CompanyDetails";
import SearchAddSection from "@/utils/SearchAddSection";
import TableComponent from "@/utils/TableComponent";
import React, { useState } from "react";
import Image from "next/image";

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

const headers = ["Client", "ID", "Type of Business", "Location"];

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const handleClientClick = (client: Client) => {
    setSelectedClient(client);
  };

  const closeDetails = () => {
    setSelectedClient(null);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full px-4 py-6">
      {!selectedClient ? (
        <>
          <SearchAddSection onAddClick={() => console.log("Open Add Modal")} />
          <TableComponent
            headers={headers}
            data={clients}
            onRowClick={handleClientClick}
            renderRow={(client) => (
              <>
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
                <td className="px-4 py-2">{client.location}</td>
              </>
            )}
          />
        </>
      ) : (
        <CompanyDetails client={selectedClient} onClose={closeDetails} />
      )}
    </div>
  );
};

export default Page;
