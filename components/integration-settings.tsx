"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Plug, Check, X } from "lucide-react"

export default function IntegrationSettings() {
  // Mock data for integrations
  const [integrations, setIntegrations] = useState([
    {
      id: "pms",
      name: "Property Management System",
      description: "Connect with your hotel's PMS for guest information and room status",
      connected: true,
      apiKey: "••••••••••••••••",
      lastSync: "Today at 10:15 AM",
    },
    {
      id: "pos",
      name: "Point of Sale System",
      description: "Integrate with restaurant and retail POS systems",
      connected: true,
      apiKey: "••••••••••••••••",
      lastSync: "Today at 9:30 AM",
    },
    {
      id: "crm",
      name: "Customer Relationship Management",
      description: "Access guest profiles and preferences",
      connected: false,
      apiKey: "",
      lastSync: "Never",
    },
    {
      id: "maintenance",
      name: "Maintenance Management",
      description: "Track maintenance requests and equipment status",
      connected: true,
      apiKey: "••••••••••••••••",
      lastSync: "Yesterday at 4:45 PM",
    },
    {
      id: "housekeeping",
      name: "Housekeeping Management",
      description: "Manage room cleaning schedules and status",
      connected: true,
      apiKey: "••••••••••••••••",
      lastSync: "Today at 8:00 AM",
    },
  ])

  const toggleConnection = (id: string) => {
    setIntegrations(
      integrations.map((integration) =>
        integration.id === id ? { ...integration, connected: !integration.connected } : integration,
      ),
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Connected Systems</h3>
        <Button variant="outline" size="sm">
          <Plug className="h-4 w-4 mr-2" />
          Add New Integration
        </Button>
      </div>

      <div className="space-y-4">
        {integrations.map((integration) => (
          <Card key={integration.id}>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-6">
                    <h4 className="font-medium">{integration.name}</h4>
                    {integration.connected ? (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        <Check className="h-3 w-3 mr-1" /> Connected
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        <X className="h-3 w-3 mr-1" /> Disconnected
                      </span>
                    )}
                  </div>
                  <p className="text-[0.8rem] text-gray-500">{integration.description}</p>
                  {integration.connected && (
                    <p className="text-xs text-gray-500">Last synced: {integration.lastSync}</p>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {integration.connected && (
                    <div className="w-full md:w-auto">
                      <Label htmlFor={`apikey-${integration.id}`} className="sr-only">
                        API Key
                      </Label>
                      <Input
                        id={`apikey-${integration.id}`}
                        value={integration.apiKey}
                        readOnly
                        className="font-mono text-[0.8rem]"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-6">
                    <Switch
                      id={`toggle-${integration.id}`}
                      checked={integration.connected}
                      onCheckedChange={() => toggleConnection(integration.id)}
                    />
                    <Label htmlFor={`toggle-${integration.id}`} className="sr-only">
                      {integration.connected ? "Disconnect" : "Connect"}
                    </Label>

                    <Button variant="outline" size="sm">
                      {integration.connected ? "Configure" : "Connect"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Data Synchronization</h3>

        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sync-frequency">Sync Frequency</Label>
                  <p className="text-[0.8rem] text-gray-500">How often to sync data with connected systems</p>
                </div>
                <select id="sync-frequency" className="rounded-md border border-gray-300 p-2">
                  <option value="5">Every 5 minutes</option>
                  <option value="15">Every 15 minutes</option>
                  <option value="30">Every 30 minutes</option>
                  <option value="60">Every hour</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-sync">Automatic Synchronization</Label>
                  <p className="text-[0.8rem] text-gray-500">Automatically sync data on schedule</p>
                </div>
                <Switch id="auto-sync" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="conflict-resolution">Conflict Resolution</Label>
                  <p className="text-[0.8rem] text-gray-500">How to handle data conflicts between systems</p>
                </div>
                <select id="conflict-resolution" className="rounded-md border border-gray-300 p-2">
                  <option value="newest">Use newest data</option>
                  <option value="pms">PMS takes priority</option>
                  <option value="manual">Manual resolution</option>
                </select>
              </div>

              <div className="flex justify-end gap-6">
                <Button variant="outline">Sync Now</Button>
                <Button>Save Settings</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

