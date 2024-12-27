import Image from "next/image";

export default function TaskDetails() {
  return (
    <div className="container ">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 mt-4">
        <span>Company list</span>
        <span>{">"}</span>
        <span className="text-black font-semibold">Company details</span>
      </div>

      <div className="bg-white rounded-[16px] shadow">
        {/* Header */}
        <div className="flex items-center justify-between pl-4 pr-4 pt-4 pb-4 headerBGRequest rounded-t-[16px]">
          <div>
            <h1 className="text-[18px] font-medium">Demo request</h1>
            <p className="text-[14px] text-muted-foreground mt-1">COM-93HS</p>
          </div>
          <Image
            src="/images/edit.svg"
            alt="edit"
            width={24}
            height={24}
            className="mr-2"
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-6 pl-4 pr-4 pt-4">
          <div>
            <h3 className="text-[12px] text-muted-foreground mb-1">
              Type of business
            </h3>
            <p className="text-[16px]">Real Estate</p>
          </div>
          <div>
            <h3 className="text-[12px] text-muted-foreground mb-1">Email ID</h3>
            <p className="text-[16px]">Skyline@gmail.com</p>
          </div>
          <div>
            <h3 className="text-[12px] text-muted-foreground mb-1">
              Contact number
            </h3>
            <p className="text-[16px]">+21 22232322</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 pl-4 pr-4 pt-4 pb-4">
          <div>
            <h3 className="text-[12px] text-muted-foreground mb-1">Location</h3>
            <p className="text-[16px]">
              Near Business Bay Metro Station <br /> Dubai - United Arab
              Emirates
            </p>
          </div>
          <div>
            <h3 className="text-[12px] text-muted-foreground mb-1">Password</h3>
            <p className="text-[16px]">Skylineadmin@134</p>
          </div>
        </div>
      </div>
    </div>
  );
}
