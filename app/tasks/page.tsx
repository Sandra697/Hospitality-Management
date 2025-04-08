import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Filter, Clock, CheckCircle2, AlertCircle } from "lucide-react"
import TaskList from "@/components/task-list"
import TaskForm from "@/components/task-form"

export default function TasksPage() {
  return (
    <div className="flex min-h-screen font-medium text-[0.8rem] flex-col">
      <header className="sticky top-0 z-10 ">
        <div className="container flex h-16 items-center p-4 justify-between py-1">
          <h1 className="text-xl font-bold"></h1>
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            Create New Task
          </Button>
        </div>
      </header>

      <main className="flex-1 py-2 px-6">
        <div className="container ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="relative w-full md:w-64">
                <Input placeholder="Search tasks..." className="pl-8" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <Label htmlFor="sort" className="text-[0.8rem]">
                Sort by:
              </Label>
              <Select defaultValue="priority">
                <SelectTrigger id="sort" className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="priority">Priority (High to Low)</SelectItem>
                  <SelectItem value="time">Time Created</SelectItem>
                  <SelectItem value="department">Department</SelectItem>
                  <SelectItem value="assignee">Assignee</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all" className="flex items-center">
                All Tasks <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs">42</span>
              </TabsTrigger>
              <TabsTrigger value="pending" className="flex items-center">
                <Clock className="h-4 w-4 mr-1" /> Pending{" "}
                <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs">12</span>
              </TabsTrigger>
              <TabsTrigger value="inprogress" className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-1" /> In Progress{" "}
                <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs">18</span>
              </TabsTrigger>
              <TabsTrigger value="urgent" className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> Urgent{" "}
                <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs">4</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-6 sm:p-6 p-2  md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Drop Tasks</CardTitle>
                    <CardDescription>Create and assign new tasks for your team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TaskForm />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Task Analytics</CardTitle>
                    <CardDescription>Performance metrics for task completion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[0.8rem] font-medium">Average Response Time</span>
                        <span className="text-[0.8rem]">3.2 minutes</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#F0BB78]  w-[70%]"></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[0.8rem] font-medium">Task Completion Rate</span>
                        <span className="text-[0.8rem]">92%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#F0BB78]  w-[92%]"></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[0.8rem] font-medium">Staff Efficiency</span>
                        <span className="text-[0.8rem]">85%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#F0BB78]  w-[85%]"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <CardHeader>
                  <CardTitle>All Tasks</CardTitle>
                  <CardDescription>View and manage all tasks across departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <TaskList />
                </CardContent>
              </div>
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Tasks</CardTitle>
                  <CardDescription>Tasks that have been created but not yet assigned or started</CardDescription>
                </CardHeader>
                <CardContent>
                  <TaskList filter="pending" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inprogress" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>In Progress Tasks</CardTitle>
                  <CardDescription>Tasks currently being worked on by staff members</CardDescription>
                </CardHeader>
                <CardContent>
                  <TaskList filter="inprogress" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="urgent" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Urgent Tasks</CardTitle>
                  <CardDescription>High priority tasks requiring immediate attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <TaskList filter="urgent" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

