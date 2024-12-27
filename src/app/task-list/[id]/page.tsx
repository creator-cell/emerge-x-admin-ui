import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TaskDetails() {
  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 mt-4">
        <span>Task list</span>
        <span>{'>'}</span>
        <span className="text-black font-semibold">Task details</span>
      </div>

      <div className="bg-white rounded-[16px] shadow">
        {/* Header */}
          <div className="flex items-center justify-between ml-4 mr-4">
            <div>
              <h1 className="text-2xl font-semibold">Demo request</h1>
              <p className="text-sm text-muted-foreground mt-1">COM-93HS</p>
            </div>
            <Badge variant="secondary" className="bg-blue-50 text-blue-700">
              In progress
            </Badge>
          </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-6 p-6">
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Assigned to</h3>
            <p className="font-medium">Gilbert Lambert</p>
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Role</h3>
            <p className="font-medium">Tech support Manager</p>
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Timer</h3>
            <p className="font-medium">23:05:283</p>
          </div>
        </div>

        {/* Description */}
        <div className="p-6 ">
          <h3 className="text-sm text-muted-foreground mb-1">Description</h3>
          <p className="font-medium">Give demo to Skyline</p>
        </div>
       
        </div>


        {/* Tabs */}
        <div className="p-6">
          <Tabs defaultValue="comments">
            <TabsList className="mb-4">
              <TabsTrigger value="comments" className="text-green-600 data-[state=active]:text-green-600">Comments</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="comments">
              <Textarea 
                placeholder="Add your comments here" 
                className="min-h-[100px] mb-4"
              />
              <div className="flex gap-2">
                <Button className="bg-green-600 hover:bg-green-700">Save</Button>
                <Button variant="outline">Cancel</Button>
              </div>
              
              {/* Comments List */}
              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8 bg-green-100">
                    <span className="text-sm text-green-600">G</span>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Gilbert Lambert</p>
                        <p className="text-sm text-muted-foreground">Tech support Manager</p>
                      </div>
                      <span className="text-sm text-muted-foreground">10:35 AM, 13 Nov</span>
                    </div>
                    <p className="mt-2">Connected with the client and scheduled the time for demo</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Avatar className="w-8 h-8 bg-green-100">
                    <span className="text-sm text-green-600">G</span>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Gilbert Lambert</p>
                        <p className="text-sm text-muted-foreground">Tech support Manager</p>
                      </div>
                      <span className="text-sm text-muted-foreground">09:12 AM, 13 Nov</span>
                    </div>
                    <p className="mt-2">Request received from the client for a demo</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history">
              <div className="text-muted-foreground">History content here</div>
            </TabsContent>
          </Tabs>
        </div>
      
    </div>
  )
}

