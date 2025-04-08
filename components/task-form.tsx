"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle } from "lucide-react"

export default function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the task data to an API
    console.log("Task created:", { taskTitle, taskDescription })
    // Reset form
    setTaskTitle("")
    setTaskDescription("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="task-title">Task Title</Label>
        <Input
          id="task-title"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="task-description">Description</Label>
        <Textarea
          id="task-description"
          placeholder="Enter task details"
          rows={3}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="task-department">Department</Label>
          <Select>
            <SelectTrigger id="task-department">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="housekeeping">Housekeeping</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="frontdesk">Front Desk</SelectItem>
              <SelectItem value="foodservice">Food Service</SelectItem>
              <SelectItem value="concierge">Concierge</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="task-priority">Priority</Label>
          <Select defaultValue="medium">
            <SelectTrigger id="task-priority">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="task-assignee">Assign To</Label>
          <Select>
            <SelectTrigger id="task-assignee">
              <SelectValue placeholder="Select staff member" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Auto-assign</SelectItem>
              <SelectItem value="maria">Maria Lopez</SelectItem>
              <SelectItem value="john">John Davis</SelectItem>
              <SelectItem value="sarah">Sarah Kim</SelectItem>
              <SelectItem value="robert">Robert Miller</SelectItem>
              <SelectItem value="emily">Emily Chen</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="task-location">Location</Label>
          <Select>
            <SelectTrigger id="task-location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lobby">Lobby</SelectItem>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="1st">1st Floor</SelectItem>
              <SelectItem value="2nd">2nd Floor</SelectItem>
              <SelectItem value="3rd">3rd Floor</SelectItem>
              <SelectItem value="4th">4th Floor</SelectItem>
              <SelectItem value="5th">5th Floor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" className="w-full">
        <PlusCircle className="h-4 w-4 mr-2" />
        Create Task
      </Button>
    </form>
  )
}

