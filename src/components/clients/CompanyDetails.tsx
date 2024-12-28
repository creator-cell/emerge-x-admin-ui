// Define the Client type if it's not defined elsewhere
interface Client {
  id: string;
  name: string;
  businessType: string;
  location: string;
  email?: string;
  contactNumber?: string;
  password?: string;
}

interface CompanyDetailsProps {
  client: Client;
  onClose: () => void;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ client, onClose }) => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg border border-gray-200">
      {/* Header with Client Name and Close Button */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-800">{client.name}</h2>
          <p className="text-sm text-gray-500">{client.id}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✖
        </button>
      </div>

      {/* Client Details */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <p>
            <strong className="block text-gray-800">Type of Business:</strong>{" "}
            {client.businessType}
          </p>
        </div>
        <div>
          <p>
            <strong className="block text-gray-800">Email ID:</strong>{" "}
            {client.email || "N/A"}
          </p>
        </div>
        <div>
          <p>
            <strong className="block text-gray-800">Location:</strong>{" "}
            {client.location}
          </p>
        </div>
        <div>
          <p>
            <strong className="block text-gray-800">Contact Number:</strong>{" "}
            {client.contactNumber || "N/A"}
          </p>
        </div>
        <div>
          <p>
            <strong className="block text-gray-800">Password:</strong>{" "}
            {client.password || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
