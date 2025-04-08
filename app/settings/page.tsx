import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Settings, Hotel, Plug, Bell, Shield } from "lucide-react"
import IntegrationSettings from "@/components/integration-settings"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 ">
        <div className="container flex h-16 items-center px-4 justify-between py-4">
          <h1 className="text-xl font-bold"></h1>
          <Button>Save Changes</Button>
        </div>
      </header>

      <main className="flex-1 font-medium text-gray-700 text-[0.8rem] py-2 px-6">
        <div className="container ">
          <Tabs defaultValue="general" className="space-y-4">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              <TabsTrigger value="general" className="flex items-center">
                <Settings className="h-4 w-4 mr-2" /> General
              </TabsTrigger>
              <TabsTrigger value="hotel" className="flex items-center">
                <Hotel className="h-4 w-4 mr-2" /> Hotel Profile
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex items-center">
                <Plug className="h-4 w-4 mr-2" /> Integrations
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center">
                <Bell className="h-4 w-4 mr-2" /> Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center">
                <Shield className="h-4 w-4 mr-2" /> Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Manage your platform preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="platform-name">Platform Name</Label>
                    <Input id="platform-name" defaultValue="HotelSync" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select id="timezone" className="w-full rounded-md border border-gray-300 p-2">
                      <option value="utc-8">Pacific Time (UTC-8)</option>
                      <option value="utc-7">Mountain Time (UTC-7)</option>
                      <option value="utc-6">Central Time (UTC-6)</option>
                      <option value="utc-5">Eastern Time (UTC-5)</option>
                      <option value="utc">UTC</option>
                      <option value="utc+1">Central European Time (UTC+1)</option>
                      <option value="utc+8">China Standard Time (UTC+8)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Default Language</Label>
                    <select id="language" className="w-full rounded-md border border-gray-300 p-2">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-[0.8rem] text-gray-500">Enable dark mode for the dashboard</p>
                    </div>
                    <Switch id="dark-mode" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="analytics">Usage Analytics</Label>
                      <p className="text-[0.8rem] text-gray-500">Collect anonymous usage data to improve the platform</p>
                    </div>
                    <Switch id="analytics" defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hotel" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Hotel Profile</CardTitle>
                  <CardDescription>Customize your hotel information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="hotel-name">Hotel Name</Label>
                    <Input id="hotel-name" defaultValue="Grand Plaza Hotel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hotel-address">Address</Label>
                    <Input id="hotel-address" defaultValue="123 Hospitality Blvd, New York, NY 10001" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hotel-phone">Phone Number</Label>
                      <Input id="hotel-phone" defaultValue="+1 (555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hotel-email">Email</Label>
                      <Input id="hotel-email" defaultValue="info@grandplazahotel.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hotel-type">Property Type</Label>
                    <select id="hotel-type" className="w-full rounded-md border border-gray-300 p-2">
                      <option value="hotel">Hotel</option>
                      <option value="resort">Resort</option>
                      <option value="boutique">Boutique Hotel</option>
                      <option value="motel">Motel</option>
                      <option value="hostel">Hostel</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hotel-rooms">Number of Rooms</Label>
                    <Input id="hotel-rooms" type="number" defaultValue="250" />
                  </div>

                  <div className="space-y-2">
                    <Label>Hotel Facilities</Label>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="facility-pool" className="rounded border-gray-300" defaultChecked />
                        <label htmlFor="facility-pool" className="text-[0.8rem]">
                          Swimming Pool
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="facility-restaurant"
                          className="rounded border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="facility-restaurant" className="text-[0.8rem]">
                          Restaurant
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="facility-gym" className="rounded border-gray-300" defaultChecked />
                        <label htmlFor="facility-gym" className="text-[0.8rem]">
                          Fitness Center
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="facility-spa" className="rounded border-gray-300" defaultChecked />
                        <label htmlFor="facility-spa" className="text-[0.8rem]">
                          Spa
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="facility-conference"
                          className="rounded border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="facility-conference" className="text-[0.8rem]">
                          Conference Rooms
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="facility-parking"
                          className="rounded border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="facility-parking" className="text-[0.8rem]">
                          Parking
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-4">
              <div>
                <CardHeader>
                  <CardTitle>System Integrations</CardTitle>
                  <CardDescription>Connect with other hospitality systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <IntegrationSettings />
                </CardContent>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure notification preferences for wearable devices</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Vibration Patterns</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Emergency Alerts</Label>
                          <p className="text-[0.8rem] text-gray-500">Strong, continuous pattern</p>
                        </div>
                        <select className="rounded-md border border-gray-300 p-2">
                          <option value="strong-continuous">Strong Continuous</option>
                          <option value="strong-pulse">Strong Pulse</option>
                          <option value="medium-continuous">Medium Continuous</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Urgent Tasks</Label>
                          <p className="text-[0.8rem] text-gray-500">Strong, pulsing pattern</p>
                        </div>
                        <select className="rounded-md border border-gray-300 p-2">
                          <option value="strong-pulse">Strong Pulse</option>
                          <option value="strong-continuous">Strong Continuous</option>
                          <option value="medium-pulse">Medium Pulse</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Standard Tasks</Label>
                          <p className="text-[0.8rem] text-gray-500">Medium, single vibration</p>
                        </div>
                        <select className="rounded-md border border-gray-300 p-2">
                          <option value="medium-single">Medium Single</option>
                          <option value="light-double">Light Double</option>
                          <option value="medium-pulse">Medium Pulse</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Messages</Label>
                          <p className="text-[0.8rem] text-gray-500">Light, double vibration</p>
                        </div>
                        <select className="rounded-md border border-gray-300 p-2">
                          <option value="light-double">Light Double</option>
                          <option value="light-single">Light Single</option>
                          <option value="medium-single">Medium Single</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Quiet Hours</h3>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="quiet-hours-toggle">Enable Quiet Hours</Label>
                        <p className="text-[0.8rem] text-gray-500">Reduce notifications during specified hours</p>
                      </div>
                      <Switch id="quiet-hours-toggle" defaultChecked />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quiet-start">Start Time</Label>
                        <Input id="quiet-start" type="time" defaultValue="22:00" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quiet-end">End Time</Label>
                        <Input id="quiet-end" type="time" defaultValue="07:00" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>During Quiet Hours</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="quiet-emergency"
                            className="rounded border-gray-300"
                            defaultChecked
                          />
                          <label htmlFor="quiet-emergency" className="text-[0.8rem]">
                            Allow Emergency Alerts
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="quiet-urgent" className="rounded border-gray-300" defaultChecked />
                          <label htmlFor="quiet-urgent" className="text-[0.8rem]">
                            Allow Urgent Tasks
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="quiet-standard" className="rounded border-gray-300" />
                          <label htmlFor="quiet-standard" className="text-[0.8rem]">
                            Allow Standard Tasks
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="quiet-messages" className="rounded border-gray-300" />
                          <label htmlFor="quiet-messages" className="text-[0.8rem]">
                            Allow Messages
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage access control and permissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Role-Based Access</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Manager Access</Label>
                          <p className="text-[0.8rem] text-gray-500">Full system access and control</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Supervisor Access</Label>
                          <p className="text-[0.8rem] text-gray-500">Department management and task assignment</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Staff Access</Label>
                          <p className="text-[0.8rem] text-gray-500">Task viewing and communication</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Location Tracking</h3>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="location-tracking">Enable Location Tracking</Label>
                        <p className="text-[0.8rem] text-gray-500">Track staff positions within the property</p>
                      </div>
                      <Switch id="location-tracking" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="location-consent">Require Staff Consent</Label>
                        <p className="text-[0.8rem] text-gray-500">Staff must opt-in to location tracking</p>
                      </div>
                      <Switch id="location-consent" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="location-off-duty">Track Off-Duty Staff</Label>
                        <p className="text-[0.8rem] text-gray-500">Continue tracking when staff are off duty</p>
                      </div>
                      <Switch id="location-off-duty" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Privacy</h3>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="data-retention">Data Retention Period</Label>
                        <p className="text-[0.8rem] text-gray-500">How long to keep staff activity data</p>
                      </div>
                      <select id="data-retention" className="rounded-md border border-gray-300 p-2">
                        <option value="30">30 Days</option>
                        <option value="60">60 Days</option>
                        <option value="90">90 Days</option>
                        <option value="180">180 Days</option>
                        <option value="365">1 Year</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="data-export">Data Export</Label>
                        <p className="text-[0.8rem] text-gray-500">Allow staff to request their personal data</p>
                      </div>
                      <Switch id="data-export" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="data-encryption">End-to-End Encryption</Label>
                        <p className="text-[0.8rem] text-gray-500">Encrypt all communications and data</p>
                      </div>
                      <Switch id="data-encryption" defaultChecked />
                    </div>
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

