import { FilterIcon } from "@/assets/icons/svg-icons";
import { PreparednessChart } from "@/components/PreparednessChart";
import { RecoveryChart } from "@/components/RecoveryChart";
import { ResponseChart } from "@/components/ResponseChart";
import { StaticsGraph } from "@/components/StatisticsGraph";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
     
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 mt-4 gap-4">
        <Button variant="outline" className="rounded-full w-full sm:w-auto">
          Statistics
        </Button>
        <FilterIcon />
      </div>

      {/* Main Section */}
      <Card className=" mb-6 bg-transparent border-none shadow-none">
        <div className="flex flex-col lg:flex-row items-start ">
          {/* Left Section */}
          <div className="w-full lg:w-[18%] dashbaordCardBG p-8 rounded-[20px] pt-8 pb-8">
            <h2 className="text-[28px] mb-1">203</h2>
            <p className="adminDashboardTextTitle">Total Incidents</p>
            <h2 className="text-[28px] mb-1 mt-6">
              15<span className="text-base text-gray-500">/min</span>
            </h2>
            <p className="adminDashboardTextTitle">Emergency Response Time</p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[99%]">
            <StaticsGraph />
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-6 mb-6">
        {/* Prevention */}
        <Card
          className="adminDashboardBg p-6 flex-grow text-lg font-semibold text-center xl:text-left 2xl:text-left rounded-[20px] shadow-none border-none"
          style={{ flexBasis: "11.67%" }}
        >
          <h3 className="adminDashboardText mb-2">Prevention</h3>
          <div className="space-y-4">
            <div className="mt-8">
              <h1 className="text-[28px] font-medium">15</h1>
              <div className="adminDashboardTextTitle">Thermal suit</div>
            </div>
            <div>
              <h1 className="text-[28px] font-medium mt-8">24</h1>
              <div className="adminDashboardTextTitle">Thermal Hardware</div>
            </div>
            <div>
              <h1 className="text-[28px] font-medium mt-8">120</h1>
              <div className="adminDashboardTextTitle">Wristband</div>
            </div>
          </div>
        </Card>

        {/* Preparedness */}
        <Card
          className="p-6 flex-grow adminDashboardBg h-auto rounded-[20px] shadow-none border-none"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="adminDashboardText mb-4">Preparedness</h3>
            <FilterIcon />
          </div>
          <PreparednessChart />
        </Card>

        {/* Response & Recovery */}
        <div className="flex flex-col gap-6" style={{ flexBasis: "26.33%" }}>
          {/* Response */}
          <Card className="pt-6 pb-6 adminDashboardBg h-auto lg:h-[10rem] rounded-[20px] shadow-none border-none">
            <div className="flex justify-between items-center ml-4 mr-4 mb-2">
              <h3 className="adminDashboardText mb-4">Response</h3>
              <FilterIcon />
            </div>
            <ResponseChart />
          </Card>

          {/* Recovery */}
          <Card className="pt-6 pb-6 adminDashboardBg h-auto lg:h-[10rem] rounded-[20px] shadow-none border-none">
            <div className="flex justify-between items-center ml-4 mr-4">
              <h3 className="adminDashboardText mb-4">Recovery</h3>
              <FilterIcon />
            </div>
            <RecoveryChart />
          </Card>
        </div>
      </div>
      </div>
  );
}
