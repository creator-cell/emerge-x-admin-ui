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
  //   location: string;
  email?: string;
  contactNumber?: string;
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
                <td className="px-4 py-2">{client.contactNumber}</td>
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
