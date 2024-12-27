"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CrossIcon } from "@/assets/icons/svg-icons";
import Modal from "@/components/Modal";

interface Task {
  task: string;
  id: string;
  status: "In progress" | "Completed" | "Cancelled";
  timer: string;
  assignedTo: {
    name: string;
    role: string;
  };
}

const tasks: Task[] = [
  {
    task: "Demo request",
    id: "COM-93HS",
    status: "In progress",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Onsite Emergency Response Manager",
    },
  },
  {
    task: "Tech support task list",
    id: "COM-93HS",
    status: "In progress",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Onsite ERT Leader",
    },
  },
  {
    task: "Demo request",
    id: "COM-93HS",
    status: "Completed",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Onsite ERT",
    },
  },
  {
    task: "Demo request",
    id: "COM-93HS",
    status: "Completed",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Medical Officer",
    },
  },
  {
    task: "Demo request",
    id: "COM-93HS",
    status: "Completed",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "HSE Supervisor",
    },
  },
  {
    task: "Tech support",
    id: "COM-93HS",
    status: "Cancelled",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Muster Coordinator",
    },
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("assigned");
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
      <div className="flex justify-between items-center mb-6  p-4 tableColorBG rounded-[16px]">
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex bg-white shadow-none border-none">
              <div
                className={`relative text-gray-700 hover:text-gray-900 px-4 py-2 cursor-pointer bg-transparent border-none shadow-none ${
                  activeTab === "assigned" ? "activeColorBG" : ""
                }`}
                onClick={() => setActiveTab("assigned")}
              >
                Assigned Task
                {activeTab === "assigned" && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 transition-all"></div>
                )}
              </div>
              <div
                className={`relative text-gray-700 hover:text-gray-900 px-4 py-2 cursor-pointer ${
                  activeTab === "unassigned" ? "activeColorBG" : ""
                }`}
                onClick={() => setActiveTab("unassigned")}
              >
                Unassigned Task
                {activeTab === "unassigned" && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 transition-all"></div>
                )}
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

          {activeTab === "assigned" && (
            <div className="rounded-[50px]">
              <table className="w-full">
                <thead>
                  <tr className="tableBG">
                    <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                      TASK
                    </th>
                    <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                      ID
                    </th>
                    <th className="py-3 px-4  text-left text-[12px] font-medium text-gray-500">
                      STATUS
                    </th>
                    <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                      TIMER
                    </th>
                    <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                      ASSIGNED TO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr
                      key={index}
                      className={`border-b last:border-b-0 ${
                        (index + 1) % 2 === 0 || index + 1 === 4
                          ? "tableBG border-none"
                          : "border-none"
                      }`}
                    >
                      <td className="py-3 px-4 text-[16px] text-black font-semibold">
                        <Link href={`/task-list/${task.id}`}>{task.task}</Link>
                      </td>
                      <td className="py-3 px-4 text-[14px]">
                        <Link href={`/task-list/${task.id}`}>{task.id}</Link>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium
            ${task.status === "In progress" ? "bg-blue-100 text-blue-800" : ""}
            ${task.status === "Completed" ? "bg-green-100 text-green-800" : ""}
            ${task.status === "Cancelled" ? "bg-red-100 text-red-800" : ""}
          `}
                        >
                          {task.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[14px]">{task.timer}</td>
                      <td className="py-3 px-4">
                        <div>
                          <div className="text-[14px] font-medium">
                            {task.assignedTo.name}
                          </div>
                          <div className="text-[12px] text-gray-500">
                            {task.assignedTo.role}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "unassigned" && (
           <div className="rounded-[50px]">
           <table className="w-full">
             <thead>
               <tr className="tableBG">
                 <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                   TASK
                 </th>
                 <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                   ID
                 </th>
                 <th className="py-3 px-4  text-left text-[12px] font-medium text-gray-500">
                   STATUS
                 </th>
                 <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                   TIMER
                 </th>
                 <th className="py-3 px-4 text-left text-[12px] font-medium text-gray-500">
                   ASSIGNED TO
                 </th>
               </tr>
             </thead>
             <tbody>
               {tasks.map((task, index) => (
                 <tr
                   key={index}
                   className={`border-b last:border-b-0 ${
                     (index + 1) % 2 === 0 || index + 1 === 4
                       ? "tableBG border-none"
                       : "border-none"
                   }`}
                 >
                   <td className="py-3 px-4 text-[16px] text-black font-semibold">
                     <Link href={`/task-list/${task.id}`}>{task.task}</Link>
                   </td>
                   <td className="py-3 px-4 text-[14px]">
                     <Link href={`/task-list/${task.id}`}>{task.id}</Link>
                   </td>
                   <td className="py-3 px-4">
                     <span
                       className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium
         ${task.status === "In progress" ? "bg-blue-100 text-blue-800" : ""}
         ${task.status === "Completed" ? "bg-green-100 text-green-800" : ""}
         ${task.status === "Cancelled" ? "bg-red-100 text-red-800" : ""}
       `}
                     >
                       {task.status}
                     </span>
                   </td>
                   <td className="py-3 px-4 text-[14px]">{task.timer}</td>
                   <td className="py-3 px-4">
                     <div>
                       <div className="text-[14px] font-medium">
                         {task.assignedTo.name}
                       </div>
                       <div className="text-[12px] text-gray-500">
                         {task.assignedTo.role}
                       </div>
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
          )}
        </div>
      </div>
      {isDialogOpen && (
        <Modal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <div className="flex justify-between items-center mb-2">
            <div className="text-[18px] font-semibold">Create new task</div>
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
            <div className="space-y-2">
              <label className="modalLableStyle">Task Head</label>
              <select
                value={formData.taskHead}
                onChange={(e) =>
                  setFormData({ ...formData, taskHead: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md modalLableInput"
              >
                <option value="">Select task type</option>
                <option value="demo-request">Demo request</option>
                <option value="tech-support">Tech support</option>
              </select>
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

            {/* Status */}
            <div className="space-y-2">
              <label className="modalLableStyle">Status</label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md modalLableInput"
              >
                <option className="" value="">
                  Select status
                </option>
                <option value="in-progress">In progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Assign to */}
            <div className="space-y-2">
              <label className="modalLableStyle">Assign to</label>
              <input
                type="text"
                value={formData.assignedTo}
                onChange={(e) =>
                  setFormData({ ...formData, assignedTo: e.target.value })
                }
                placeholder="Enter assignee name"
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
                Add Task
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default App;
