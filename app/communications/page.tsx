import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Users, AlertTriangle, Bell, Send } from "lucide-react"
import EmergencyTemplates from "@/components/emergency-templates"
import MessageList from "@/components/message-list"

export default function CommunicationsPage() {
  return (
    <div className="flex min-h-screen flex-col font-medium text-gray-700 text-[0.8rem] ">
      <header className="sticky top-0 z-10 ">
        <div className="container flex h-16 px-4 items-center justify-between py-4">
          <h1 className="text-xl font-bold"></h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Staff Groups
            </Button>
            <Button>
              <MessageSquare className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-2 px-6">
        <div className="container ">
          <Tabs defaultValue="messages" className="space-y-4">
            <TabsList>
              <TabsTrigger value="messages" className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" /> Messages
              </TabsTrigger>
              <TabsTrigger value="emergency" className="flex items-center">
                <AlertTriangle className="h-4 w-4 mr-1" /> Emergency Templates
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center">
                <Bell className="h-4 w-4 mr-1" /> Notification Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Compose Message</CardTitle>
                      <CardDescription>Send a message to staff members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="recipient" className="text-[0.8rem] font-medium">
                            Recipient
                          </label>
                          <Select>
                            <SelectTrigger id="recipient">
                              <SelectValue placeholder="Select recipient" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Staff</SelectItem>
                              <SelectItem value="housekeeping">Housekeeping</SelectItem>
                              <SelectItem value="frontdesk">Front Desk</SelectItem>
                              <SelectItem value="maintenance">Maintenance</SelectItem>
                              <SelectItem value="restaurant">Restaurant</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="priority" className="text-[0.8rem] font-medium">
                            Priority
                          </label>
                          <Select defaultValue="normal">
                            <SelectTrigger id="priority">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">High - Vibration Alert</SelectItem>
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-[0.8rem] font-medium">
                            Message
                          </label>
                          <Textarea id="message" placeholder="Type your message here..." rows={4} />
                        </div>

                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm">
                            Save Template
                          </Button>
                          <Button type="submit">
                            <Send className="h-4 w-4 mr-2" />
                            Send
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-2">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Recent Communications</CardTitle>
                      <CardDescription>Messages sent and received in the last 24 hours</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <MessageList />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="emergency" className="space-y-4">
              <div>
                <CardHeader>
                  <CardTitle>Emergency Message Templates</CardTitle>
                  <CardDescription>Quick access templates for emergency situations</CardDescription>
                </CardHeader>
                <CardContent>
                  <EmergencyTemplates />
                </CardContent>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>AI Notification Settings</CardTitle>
                  <CardDescription>Configure how notifications are prioritized and delivered</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Notification Prioritization</h3>
                      <p className="text-[0.8rem] text-gray-500">
                        Configure how the AI prioritizes notifications for staff members
                      </p>

                      <div className="space-y-4 mt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Emergency Alerts</h4>
                            <p className="text-xs text-gray-500">Fire, medical, security emergencies</p>
                          </div>
                          <Select defaultValue="vibration-sound">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select alert type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="vibration-sound">Vibration + Sound</SelectItem>
                              <SelectItem value="vibration">Vibration Only</SelectItem>
                              <SelectItem value="sound">Sound Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Urgent Tasks</h4>
                            <p className="text-xs text-gray-500">High priority tasks requiring immediate attention</p>
                          </div>
                          <Select defaultValue="vibration">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select alert type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="vibration-sound">Vibration + Sound</SelectItem>
                              <SelectItem value="vibration">Vibration Only</SelectItem>
                              <SelectItem value="sound">Sound Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Standard Tasks</h4>
                            <p className="text-xs text-gray-500">Regular priority tasks</p>
                          </div>
                          <Select defaultValue="vibration-light">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select alert type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="vibration-sound">Vibration + Sound</SelectItem>
                              <SelectItem value="vibration">Vibration Only</SelectItem>
                              <SelectItem value="vibration-light">Vibration (Light)</SelectItem>
                              <SelectItem value="sound">Sound Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">General Communications</h4>
                            <p className="text-xs text-gray-500">Regular messages and updates</p>
                          </div>
                          <Select defaultValue="silent">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select alert type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="vibration-sound">Vibration + Sound</SelectItem>
                              <SelectItem value="vibration">Vibration Only</SelectItem>
                              <SelectItem value="vibration-light">Vibration (Light)</SelectItem>
                              <SelectItem value="sound">Sound Only</SelectItem>
                              <SelectItem value="silent">Silent (Visual Only)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">AI Learning Settings</h3>
                      <p className="text-[0.8rem] text-gray-500">
                        Configure how the AI learns from staff behavior and optimizes notifications
                      </p>

                      <div className="space-y-4 mt-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="learn-response"
                            className="rounded border-gray-300"
                            defaultChecked
                          />
                          <label htmlFor="learn-response" className="text-[0.8rem]">
                            Learn from response times
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="learn-priority"
                            className="rounded border-gray-300"
                            defaultChecked
                          />
                          <label htmlFor="learn-priority" className="text-[0.8rem]">
                            Automatically adjust task priority based on patterns
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="learn-staff" className="rounded border-gray-300" defaultChecked />
                          <label htmlFor="learn-staff" className="text-[0.8rem]">
                            Optimize task assignment based on staff performance
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="quiet-hours" className="rounded border-gray-300" defaultChecked />
                          <label className="rounded border-gray-300" defaultChecked />
                          <label htmlFor="quiet-hours" className="text-[0.8rem]">
                            Respect quiet hours for non-emergency notifications
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">Save Notification Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

