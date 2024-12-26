'use client'

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from 'lucide-react'

interface Task {
  task: string
  id: string
  status: "In progress" | "Completed" | "Cancelled"
  timer: string
  assignedTo: {
    name: string
    role: string
  }
}

const tasks: Task[] = [
  {
    task: "Demo request",
    id: "COM-93HS",
    status: "In progress",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Onsite Emergency Response Manager"
    }
  },
  {
    task: "Tech support",
    id: "COM-93HS",
    status: "In progress",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Onsite ERT Leader"
    }
  },
  {
    task: "Demo request",
    id: "COM-93HS",
    status: "Completed",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Onsite ERT"
    }
  },
  {
    task: "Demo request",
    id: "COM-93HS",
    status: "Completed",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Medical Officer"
    }
  },
  {
    task: "Demo request",
    id: "COM-93HS",
    status: "Completed",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "HSE Supervisor"
    }
  },
  {
    task: "Tech support",
    id: "COM-93HS",
    status: "Cancelled",
    timer: "23:05:283",
    assignedTo: {
      name: "Gilbert Lambert",
      role: "Muster Coordinator"
    }
  }
]

export default function TaskTable() {
  return (
    <div className="w-full px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="assigned" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger 
                value="assigned" 
                className="text-green-600 data-[state=active]:text-green-600"
              >
                Assigned Task
              </TabsTrigger>
              <TabsTrigger value="unassigned">
                Unassigned Task
              </TabsTrigger>
            </TabsList>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
          </div>
          <TabsContent value="assigned">
            <div className="rounded-md border">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">TASK</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">ID</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">STATUS</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">TIMER</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">ASSIGNED TO</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3 px-4 text-sm">{task.task}</td>
                      <td className="py-3 px-4 text-sm">{task.id}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                            ${task.status === 'In progress' ? 'bg-blue-100 text-blue-800' : ''}
                            ${task.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                            ${task.status === 'Cancelled' ? 'bg-red-100 text-red-800' : ''}
                          `}
                        >
                          {task.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm">{task.timer}</td>
                      <td className="py-3 px-4">
                        <div>
                          <div className="text-sm font-medium">{task.assignedTo.name}</div>
                          <div className="text-sm text-gray-500">{task.assignedTo.role}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="unassigned">
            <div className="rounded-md border">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">TASK</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">ID</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">STATUS</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">TIMER</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">ASSIGNED TO</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Unassigned tasks would go here */}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

