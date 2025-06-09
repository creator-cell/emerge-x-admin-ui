import { PreparednessChart } from "@/components/PreparednessChart";
import { RecoveryChart } from "@/components/RecoveryChart";
import { ResponseChart } from "@/components/ResponseChart";
import { StaticsGraph } from "@/components/StaticsGraph";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold capitalize">Dashboard</h2>

      <div >
        <div className="flex justify-between items-center gap-4">
          <Button variant="outline" className="rounded-full">
            Statistics
          </Button>
          <img src="/filter.png" alt="filter" />
        </div>

        {/* Main Section */}
        <Card className=" bg-transparent border-none shadow-none">
          <div className="flex flex-col md:flex-row items-start ">
            <div className="w-full md:w-70 bg-linear-to-b from-white dark:from-white/80 to-primary/40 rounded-xl space-y-10 md:space-y-16 p-6">
              <div>
                <p className=" text-2xl font-medium">203</p>
                <p className="text-sm opacity-80 font-medium">Total Incidents</p>
              </div>

              <div>
                <p className=" text-2xl font-medium">15/min</p>
                <p className="text-sm opacity-80 font-medium">Emergency Response Time</p>
              </div>
            </div>

            <div className="w-full lg:w-[99%]">
              <StaticsGraph />
            </div>
          </div>
        </Card>

        <div className="flex gap-6 flex-col md:flex-row">
          {/* Prevention */}
          <Card
            className="w-full md:w-64 rounded-xl shadow-md p-6 h-fit lg:h-auto border-none overflow-hidden"
          >
            <h3 className="font-medium">Prevention</h3>
            <div className="flex md:flex-col md:items-start gap-6 items-center justify-between">
              <div>
                <h1 className="text-2xl font-medium">15</h1>
                <div className="text-sm text-muted-foreground font-medium">Thermal suit</div>
              </div>
              <div>
                <h1 className="text-2xl font-medium">24</h1>
                <div className="text-sm text-muted-foreground font-medium">Thermal Hardware</div>
              </div>
              <div>
                <h1 className="text-2xl font-medium">120</h1>
                <div className="text-sm text-muted-foreground font-medium">Wristband</div>
              </div>
            </div>
          </Card>

          {/* Preparedness */}
          <Card
            className="p-6 flex flex-col flex-grow h-auto rounded-xl shadow-md border-none gap-10 lg:gap-16 overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Preparedness</h3>
              <img src="/filter.png" alt="filter" />
            </div>
            <PreparednessChart />
          </Card>


          <div className="flex flex-col gap-6 basis-96">

            {/* Recovery */}
            <Card className="p-6 font-medium h-[12rem] border-none shadow-md overflow-hidden">
              <div className="flex justify-between items-center">
                <h3 className="">Recovery</h3>
                <img src="/filter.png" alt="filter" />
              </div>
              <RecoveryChart />
            </Card>

            {/* Response */}
            <Card className="p-6 font-medium h-[12rem] border-none shadow-md overflow-hidden">
              <div className="flex justify-between items-center">
                <h3 className="">Response</h3>
                <img src="/filter.png" alt="filter" />
              </div>
              <ResponseChart />
            </Card>


          </div>
        </div>
      </div>
    </div >
  );
}
