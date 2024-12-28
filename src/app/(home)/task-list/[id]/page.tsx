"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

export default function TaskDetails() {
  const [selectedTab, setSelectedTab] = useState("comments");

  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 mt-4">
        <span>Task list</span>
        <span>{">"}</span>
        <span className="text-black font-semibold">Task details</span>
      </div>

      <div className="bg-white rounded-[16px] shadow">
        {/* Header */}
        <div className="flex items-center justify-between pl-4 pr-4 pt-4 pb-4 headerBGRequest rounded-t-[16px]">
          <div>
            <h1 className="text-[18px] font-medium">Demo request</h1>
            <p className="text-[14px] text-muted-foreground mt-1">COM-93HS</p>
          </div>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-700 rounded-full"
          >
            In progress
          </Badge>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-6 pl-4 pr-4 pt-4">
          <div>
            <h3 className="text-[12px] text-muted-foreground mb-1">
              Assigned to
            </h3>
            <p className="text-[16px]">Gilbert Lambert</p>
          </div>
          <div>
            <h3 className="text-[12px] text-muted-foreground mb-1">Role</h3>
            <p className="text-[16px]">Tech support Manager</p>
          </div>
          <div>
            <h3 className="text-[12px] text-muted-foreground mb-1">Timer</h3>
            <p className=" text-[16px]">23:05:283</p>
          </div>
        </div>

        {/* Description */}
        <div className="pl-4 pr-4 pt-4 pb-4">
          <h3 className="text-[12px] text-muted-foreground mb-1">
            Description
          </h3>
          <p className=" text-[16px]">Give demo to Skyline</p>
        </div>
      </div>

      {/* Tabs */}

      <div
      className="relative mt-12 bg-white p-4 rounded-tr-[16px] rounded-b-[16px] mb-4"
      style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="absolute top-[-30px] bg-white rounded-t-[16px] left-0 flex overflow-hidden">
        <Button
          className={`
            ${selectedTab === "comments" ? "bg-white shadow-[4px_0px_6px_-1px_rgba(0,0,0,0.1)]" : "bg-transparent"}
            hover:bg-white text-green-700 text-[16px] border-none rounded-t-[16px] rounded-b-none
            ${selectedTab === "history" ? "shadow-none" : ""}
            relative z-10
          `}
          onClick={() => setSelectedTab("comments")}
        >
          Comments
        </Button>
        <Button
          className={`
            ${selectedTab === "history" ? "bg-white shadow-[-4px_0px_6px_-1px_rgba(0,0,0,0.1)]" : "bg-transparent"}
            hover:bg-white text-green-700 text-[16px] border-none rounded-t-[16px] rounded-b-none
            ${selectedTab === "comments" ? "shadow-none" : ""}
            relative z-10
          `}
          onClick={() => setSelectedTab("history")}
        >
          History
        </Button>
      </div>

      <Tabs value={selectedTab}>
        <TabsContent value="comments">
          <Textarea
            placeholder="Add your comments here"
            className="min-h-[5rem] mb-4 rounded-[8px]"
          />
          <div className="flex gap-2">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-[16px]">
              Save
            </Button>
            <Button className="bg-transparent border-none shadow-none hover:bg-gray-100 text-green-700 text-[16px]">
              Cancel
            </Button>
          </div>

          {/* Comments List */}
          <div className="mt-8 space-y-6">
            {[1, 2].map((_, index) => (
              <div key={index}>
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-medium text-emerald-700">
                    G
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-[14px]">
                          Gilbert Lambert
                        </p>
                        <p className="text-[12px] text-muted-foreground">
                          Tech support Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-gray-50 pt-2 pb-2 pl-4 pr-4 mt-4 rounded-[16px]">
                  <p className="mt-2 text-[14px]">
                    Connected with the client and scheduled the time for demo
                  </p>
                  <span className="text-[12px] text-muted-foreground">
                    10:35 AM, 13 Nov
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="text-muted-foreground">History content here</div>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  );
}
