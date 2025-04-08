"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle2, ArrowRight, MessageSquare, Clock, AlertTriangle, MapPin } from "lucide-react"

interface WatchDemoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WatchDemo({ open, onOpenChange }: WatchDemoProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentScenario, setCurrentScenario] = useState<keyof typeof scenarios>("task")
  const [showFinger, setShowFinger] = useState(false)
  const [fingerPosition, setFingerPosition] = useState({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipContent, setTooltipContent] = useState("")
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [isAnimating, setIsAnimating] = useState(false)
  const watchRef = useRef(null)

  // Define the different demo scenarios
  const scenarios = {
    task: {
      title: "Task Management",
      description: "See how staff receive, accept, and complete tasks",
      icon: <CheckCircle2 className="h-5 w-5" />,
      steps: [
        {
          screen: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">TASKS</div>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-[10px] text-red-300 font-medium">URGENT</div>
                <div className="text-xs font-medium">Room 302 - AC repair</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] opacity-80">5 min ago</span>
                  <div className="flex gap-1">
                    <button className="bg-teal-500 text-[8px] px-1.5 py-0.5 rounded">Accept</button>
                    <button className="bg-white/20 text-[8px] px-1.5 py-0.5 rounded">Defer</button>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-[10px] text-yellow-300 font-medium">STANDARD</div>
                <div className="text-xs font-medium">Room 506 - Extra towels</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] opacity-80">12 min ago</span>
                  <div className="flex gap-1">
                    <button className="bg-teal-500 text-[8px] px-1.5 py-0.5 rounded">Accept</button>
                    <button className="bg-white/20 text-[8px] px-1.5 py-0.5 rounded">Defer</button>
                  </div>
                </div>
              </div>
            </div>
          ),
          instruction: "New tasks appear on the watch with priority indicators",
          fingerTarget: null,
          tooltipContent: "Tasks are color-coded by priority level",
          tooltipTarget: { x: 50, y: 40 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">TASKS</div>
              <div className="bg-white/10 rounded-lg p-2 mb-2 border-2 border-teal-500">
                <div className="text-[10px] text-red-300 font-medium">URGENT</div>
                <div className="text-xs font-medium">Room 302 - AC repair</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] opacity-80">5 min ago</span>
                  <div className="flex gap-1">
                    <button className="bg-teal-500 text-[8px] px-1.5 py-0.5 rounded">Accept</button>
                    <button className="bg-white/20 text-[8px] px-1.5 py-0.5 rounded">Defer</button>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-[10px] text-yellow-300 font-medium">STANDARD</div>
                <div className="text-xs font-medium">Room 506 - Extra towels</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] opacity-80">12 min ago</span>
                  <div className="flex gap-1">
                    <button className="bg-teal-500 text-[8px] px-1.5 py-0.5 rounded">Accept</button>
                    <button className="bg-white/20 text-[8px] px-1.5 py-0.5 rounded">Defer</button>
                  </div>
                </div>
              </div>
            </div>
          ),
          instruction: "Tap on a task to view details",
          fingerTarget: { x: 50, y: 40 },
          tooltipContent: "Tap on any task to see more details",
          tooltipTarget: { x: 50, y: 40 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">TASK DETAILS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-[10px] text-red-300 font-medium">URGENT TASK</div>
                <div className="text-[0.8rem] font-medium">Room 302 - AC repair</div>
                <div className="text-[10px] opacity-80 mt-1">Reported by: Front Desk</div>
                <div className="text-[10px] opacity-80">Location: 3rd Floor, Room 302</div>
                <div className="text-[10px] opacity-80 mt-1">
                  Notes: Guest reports AC not cooling. Temperature in room is 78°F.
                </div>
                <div className="flex justify-between items-center mt-3">
                  <button className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full">Accept Task</button>
                </div>
              </div>
            </div>
          ),
          instruction: "View detailed task information",
          fingerTarget: null,
          tooltipContent: "Task details include location, reporter, and specific instructions",
          tooltipTarget: { x: 50, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">TASK DETAILS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-[10px] text-red-300 font-medium">URGENT TASK</div>
                <div className="text-[0.8rem] font-medium">Room 302 - AC repair</div>
                <div className="text-[10px] opacity-80 mt-1">Reported by: Front Desk</div>
                <div className="text-[10px] opacity-80">Location: 3rd Floor, Room 302</div>
                <div className="text-[10px] opacity-80 mt-1">
                  Notes: Guest reports AC not cooling. Temperature in room is 78°F.
                </div>
                <div className="flex justify-between items-center mt-3">
                  <button className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full border-2 border-white">
                    Accept Task
                  </button>
                </div>
              </div>
            </div>
          ),
          instruction: "Tap 'Accept Task' to take responsibility",
          fingerTarget: { x: 50, y: 130 },
          tooltipContent: "Accepting assigns the task to you and notifies management",
          tooltipTarget: { x: 50, y: 130 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">TASK IN PROGRESS</div>
              </div>
              <div className="bg-teal-500/20 border border-teal-500 rounded-lg p-3">
                <div className="text-[10px] text-red-300 font-medium">URGENT TASK</div>
                <div className="text-[0.8rem] font-medium">Room 302 - AC repair</div>
                <div className="text-[10px] opacity-80 mt-1">Status: In Progress</div>
                <div className="text-[10px] opacity-80">Time accepted: Just now</div>
                <div className="text-[10px] opacity-80 mt-1">ETA: 15 minutes</div>
                <div className="flex justify-between items-center mt-3 gap-2">
                  <button className="bg-white/20 text-[10px] px-2 py-1 rounded flex-1">Update</button>
                  <button className="bg-green-500 text-[10px] px-2 py-1 rounded flex-1">Complete</button>
                </div>
              </div>
            </div>
          ),
          instruction: "Task is now in progress",
          fingerTarget: null,
          tooltipContent: "You can update status or mark as complete when done",
          tooltipTarget: { x: 50, y: 130 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">TASK IN PROGRESS</div>
              </div>
              <div className="bg-teal-500/20 border border-teal-500 rounded-lg p-3">
                <div className="text-[10px] text-red-300 font-medium">URGENT TASK</div>
                <div className="text-[0.8rem] font-medium">Room 302 - AC repair</div>
                <div className="text-[10px] opacity-80 mt-1">Status: In Progress</div>
                <div className="text-[10px] opacity-80">Time accepted: Just now</div>
                <div className="text-[10px] opacity-80 mt-1">ETA: 15 minutes</div>
                <div className="flex justify-between items-center mt-3 gap-2">
                  <button className="bg-white/20 text-[10px] px-2 py-1 rounded flex-1">Update</button>
                  <button className="bg-green-500 text-[10px] px-2 py-1 rounded flex-1 border-2 border-white">
                    Complete
                  </button>
                </div>
              </div>
            </div>
          ),
          instruction: "Tap 'Complete' when the task is finished",
          fingerTarget: { x: 75, y: 130 },
          tooltipContent: "Completing the task updates the system and notifies management",
          tooltipTarget: { x: 75, y: 130 },
        },
        {
          screen: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-[0.8rem] font-medium text-center">Task Completed!</div>
              <div className="text-[10px] opacity-80 text-center">Room 302 - AC repair</div>
              <div className="text-[10px] opacity-80 text-center mt-2">Time to complete: 14 minutes</div>
              <div className="mt-4">
                <button className="bg-teal-500 text-[10px] px-3 py-1 rounded">Return to Tasks</button>
              </div>
            </div>
          ),
          instruction: "Task completion confirmation",
          fingerTarget: null,
          tooltipContent: "The system records completion time and updates dashboards",
          tooltipTarget: { x: 50, y: 80 },
        },
      ],
    },
    communication: {
      title: "Staff Communication",
      description: "Experience seamless messaging between staff members",
      icon: <MessageSquare className="h-5 w-5" />,
      steps: [
        {
          screen: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">MESSAGES</div>
              <div className="space-y-1.5">
                <div className="bg-white/10 rounded p-1.5">
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Front Desk</span>
                    <span className="opacity-70">9:30 AM</span>
                  </div>
                  <div className="text-[10px]">VIP guest arriving at 2PM</div>
                </div>

                <div className="bg-white/10 rounded p-1.5">
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Maintenance</span>
                    <span className="opacity-70">9:15 AM</span>
                  </div>
                  <div className="text-[10px]">Lobby restroom fixed</div>
                </div>

                <div className="bg-white/10 rounded p-1.5">
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Housekeeping</span>
                    <span className="opacity-70">8:45 AM</span>
                  </div>
                  <div className="text-[10px]">Room 506 ready for check-in</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2">
                <button className="bg-teal-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>
          ),
          instruction: "View recent messages from different departments",
          fingerTarget: null,
          tooltipContent: "Messages are organized by sender and timestamp",
          tooltipTarget: { x: 50, y: 50 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">MESSAGES</div>
              <div className="space-y-1.5">
                <div className="bg-white/10 rounded p-1.5 border-2 border-teal-500">
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Front Desk</span>
                    <span className="opacity-70">9:30 AM</span>
                  </div>
                  <div className="text-[10px]">VIP guest arriving at 2PM</div>
                </div>

                <div className="bg-white/10 rounded p-1.5">
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Maintenance</span>
                    <span className="opacity-70">9:15 AM</span>
                  </div>
                  <div className="text-[10px]">Lobby restroom fixed</div>
                </div>

                <div className="bg-white/10 rounded p-1.5">
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Housekeeping</span>
                    <span className="opacity-70">8:45 AM</span>
                  </div>
                  <div className="text-[10px]">Room 506 ready for check-in</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2">
                <button className="bg-teal-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>
          ),
          instruction: "Tap on a message to read details",
          fingerTarget: { x: 50, y: 30 },
          tooltipContent: "Tap any message to see the full conversation",
          tooltipTarget: { x: 50, y: 30 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">FRONT DESK</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">Front Desk</span>
                  <span className="opacity-70">9:30 AM</span>
                </div>
                <div className="text-[10px] mt-1">
                  VIP guest arriving at 2PM. Please prepare welcome amenities for Room 701. Guest name: Mr. Johnson.
                  Preferences: sparkling water, fruit basket.
                </div>
              </div>
              <div className="flex mt-3">
                <div className="flex-1 bg-white/10 rounded-lg p-2 mr-2">
                  <input
                    type="text"
                    placeholder="Type a reply..."
                    className="bg-transparent text-[10px] w-full outline-none"
                  />
                </div>
                <button className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
              <div className="flex justify-between mt-2">
                <button className="bg-white/10 rounded-lg px-2 py-1 text-[8px]">Quick Reply</button>
                <button className="bg-white/10 rounded-lg px-2 py-1 text-[8px]">Voice Message</button>
              </div>
            </div>
          ),
          instruction: "View the full message and reply options",
          fingerTarget: null,
          tooltipContent: "You can type a reply, use quick replies, or send voice messages",
          tooltipTarget: { x: 50, y: 100 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">FRONT DESK</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">Front Desk</span>
                  <span className="opacity-70">9:30 AM</span>
                </div>
                <div className="text-[10px] mt-1">
                  VIP guest arriving at 2PM. Please prepare welcome amenities for Room 701. Guest name: Mr. Johnson.
                  Preferences: sparkling water, fruit basket.
                </div>
              </div>
              <div className="flex mt-3">
                <div className="flex-1 bg-white/10 rounded-lg p-2 mr-2">
                  <input
                    type="text"
                    placeholder="Type a reply..."
                    className="bg-transparent text-[10px] w-full outline-none"
                  />
                </div>
                <button className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
              <div className="flex justify-between mt-2">
                <button className="bg-white/10 rounded-lg px-2 py-1 text-[8px] border-2 border-white">
                  Quick Reply
                </button>
                <button className="bg-white/10 rounded-lg px-2 py-1 text-[8px]">Voice Message</button>
              </div>
            </div>
          ),
          instruction: "Tap 'Quick Reply' for preset responses",
          fingerTarget: { x: 30, y: 140 },
          tooltipContent: "Quick replies save time for common responses",
          tooltipTarget: { x: 30, y: 140 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">QUICK REPLIES</div>
              </div>
              <div className="space-y-1.5 max-h-[120px] overflow-y-auto">
                <button className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left">
                  Understood, will take care of it right away.
                </button>
                <button className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left">
                  On my way to handle this now.
                </button>
                <button className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left border-2 border-teal-500">
                  Will prepare room 701 with amenities before 2PM.
                </button>
                <button className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left">
                  Need more information, please clarify.
                </button>
                <button className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left">
                  Task completed successfully.
                </button>
              </div>
            </div>
          ),
          instruction: "Select a pre-written response",
          fingerTarget: { x: 50, y: 80 },
          tooltipContent: "Choose the most appropriate response for the situation",
          tooltipTarget: { x: 50, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">FRONT DESK</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">Front Desk</span>
                  <span className="opacity-70">9:30 AM</span>
                </div>
                <div className="text-[10px] mt-1">
                  VIP guest arriving at 2PM. Please prepare welcome amenities for Room 701. Guest name: Mr. Johnson.
                  Preferences: sparkling water, fruit basket.
                </div>
              </div>
              <div className="bg-teal-500/20 rounded-lg p-2 mb-2 self-end">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">You</span>
                  <span className="opacity-70">Just now</span>
                </div>
                <div className="text-[10px] mt-1">Will prepare room 701 with amenities before 2PM.</div>
              </div>
              <div className="flex mt-3">
                <div className="flex-1 bg-white/10 rounded-lg p-2 mr-2">
                  <input
                    type="text"
                    placeholder="Type a reply..."
                    className="bg-transparent text-[10px] w-full outline-none"
                  />
                </div>
                <button className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          ),
          instruction: "Message sent successfully",
          fingerTarget: null,
          tooltipContent: "Front Desk is notified that you'll handle the request",
          tooltipTarget: { x: 50, y: 100 },
        },
      ],
    },
    emergency: {
      title: "Emergency Alerts",
      description: "See how emergency situations are handled",
      icon: <AlertTriangle className="h-5 w-5" />,
      steps: [
        {
          screen: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">DASHBOARD</div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <MessageSquare className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Messages</span>
                </button>
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Tasks</span>
                </button>
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <MapPin className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Map</span>
                </button>
                <button className="bg-red-500/80 rounded-lg p-2 flex flex-col items-center justify-center border-2 border-white">
                  <AlertTriangle className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Emergency</span>
                </button>
              </div>
            </div>
          ),
          instruction: "Access the Emergency section from the dashboard",
          fingerTarget: { x: 75, y: 80 },
          tooltipContent: "Emergency protocols are always one tap away",
          tooltipTarget: { x: 75, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-red-300 font-medium">EMERGENCY PROTOCOLS</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-red-500/20 rounded-lg p-2 flex flex-col items-center justify-center border-2 border-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500 mb-1"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                  <span className="text-[8px] text-red-300">Fire</span>
                </button>
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-1"
                  >
                    <path d="M8 19h8a4 4 0 0 0 0-8h-8a4 4 0 0 0 0 8Z"></path>
                    <path d="M8 19a4 4 0 0 1 0-8"></path>
                    <path d="M9 7h1"></path>
                    <path d="M14 7h1"></path>
                    <path d="M12 7V3"></path>
                  </svg>
                  <span className="text-[8px]">Medical</span>
                </button>
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-1"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                  <span className="text-[8px]">Security</span>
                </button>
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-1"
                  >
                    <path d="M12 22c4.97 0 9-2.24 9-5s-4.03-5-9-5-9 2.24-9 5 4.03 5 9 5z"></path>
                    <path d="M12 12c4.97 0 9-2.24 9-5s-4.03-5-9-5-9 2.24-9 5 4.03 5 9 5z"></path>
                  </svg>
                  <span className="text-[8px]">Evacuation</span>
                </button>
              </div>
            </div>
          ),
          instruction: "Select the type of emergency (Fire)",
          fingerTarget: { x: 25, y: 80 },
          tooltipContent: "Choose the appropriate emergency protocol",
          tooltipTarget: { x: 25, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-red-300 font-medium">FIRE EMERGENCY</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-3 border border-red-500">
                <div className="text-center mb-2">
                  <div className="text-[0.8rem] font-bold text-red-300">CONFIRM FIRE ALERT</div>
                  <div className="text-[10px] opacity-80">This will notify all staff</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] w-20">Location:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded flex-1 border border-white/20">
                      <option>Select location</option>
                      <option>East Wing</option>
                      <option>West Wing</option>
                      <option>North Wing</option>
                      <option>South Wing</option>
                      <option>Kitchen</option>
                      <option>Lobby</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] w-20">Floor:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded flex-1 border border-white/20">
                      <option>Select floor</option>
                      <option>Ground Floor</option>
                      <option>1st Floor</option>
                      <option>2nd Floor</option>
                      <option>3rd Floor</option>
                      <option>4th Floor</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] w-20">Severity:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded flex-1 border border-white/20">
                      <option>Select severity</option>
                      <option>Minor (Contained)</option>
                      <option>Moderate (Spreading)</option>
                      <option>Major (Out of Control)</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="bg-red-500 text-white text-[10px] py-2 rounded w-full font-bold border-2 border-white">
                    SEND FIRE ALERT
                  </button>
                </div>
              </div>
            </div>
          ),
          instruction: "Fill in emergency details and confirm",
          fingerTarget: { x: 50, y: 140 },
          tooltipContent: "Tap to send the alert after filling in details",
          tooltipTarget: { x: 50, y: 140 },
        },
        {
          screen: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full bg-red-500/20 animate-pulse">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <div className="text-lg font-bold text-center text-red-300">FIRE EMERGENCY</div>
              <div className="text-[0.8rem] opacity-90 text-center">East Wing - 3rd Floor</div>
              <div className="text-[10px] opacity-80 text-center mt-1">Moderate (Spreading)</div>
              <div className="mt-4 text-center">
                <div className="text-[10px] opacity-80 mb-2">Alert sent to all staff</div>
                <button className="bg-white/20 text-[10px] px-3 py-1 rounded mr-2">View Protocol</button>
                <button className="bg-red-500 text-[10px] px-3 py-1 rounded">Update Status</button>
              </div>
            </div>
          ),
          instruction: "Emergency alert is now active",
          fingerTarget: null,
          tooltipContent: "All staff are notified with location details and evacuation instructions",
          tooltipTarget: { x: 50, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-red-300 font-medium">FIRE PROTOCOL</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-3 border border-red-500">
                <div className="text-[10px] font-bold mb-2">IMMEDIATE ACTIONS:</div>
                <ol className="text-[10px] space-y-1 list-decimal pl-4">
                  <li>Ensure guest safety - direct to nearest exit</li>
                  <li>Use nearest fire extinguisher if safe</li>
                  <li>Close doors to contain fire</li>
                  <li>Proceed to assembly point: Main Parking Lot</li>
                  <li>Report to Fire Warden (Red Vest)</li>
                </ol>
                <div className="text-[10px] font-bold mt-3 mb-2">DO NOT:</div>
                <ul className="text-[10px] space-y-1 list-disc pl-4">
                  <li>Use elevators</li>
                  <li>Return to rooms for belongings</li>
                  <li>Attempt to fight large fires</li>
                </ul>
                <div className="mt-4 flex justify-between">
                  <button className="bg-white/20 text-[10px] px-3 py-1 rounded">Check-In Safe</button>
                  <button className="bg-red-500 text-[10px] px-3 py-1 rounded">Need Assistance</button>
                </div>
              </div>
            </div>
          ),
          instruction: "View emergency protocols and check in",
          fingerTarget: null,
          tooltipContent: "Clear instructions help staff respond appropriately",
          tooltipTarget: { x: 50, y: 100 },
        },
      ],
    },
    location: {
      title: "Location Tracking",
      description: "See how staff locations are tracked for efficient task assignment",
      icon: <MapPin className="h-5 w-5" />,
      steps: [
        {
          screen: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">DASHBOARD</div>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <MessageSquare className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Messages</span>
                </button>
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Tasks</span>
                </button>
                <button className="bg-teal-500/80 rounded-lg p-2 flex flex-col items-center justify-center border-2 border-white">
                  <MapPin className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Map</span>
                </button>
                <button className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center">
                  <AlertTriangle className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Emergency</span>
                </button>
              </div>
            </div>
          ),
          instruction: "Access the Map section from the dashboard",
          fingerTarget: { x: 25, y: 80 },
          tooltipContent: "The map shows staff locations throughout the property",
          tooltipTarget: { x: 25, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] text-teal-300 font-medium">HOTEL MAP</div>
                <select className="bg-black/30 text-[8px] p-1 rounded border border-white/20">
                  <option>All Floors</option>
                  <option>Ground Floor</option>
                  <option>1st Floor</option>
                  <option>2nd Floor</option>
                  <option>3rd Floor</option>
                </select>
              </div>
              <div className="relative h-[140px] w-full bg-black/30 rounded-lg border border-white/20">
                {/* Hotel floor plan mockup */}
                <div className="absolute top-2 left-2 text-[8px] opacity-70">North Wing</div>
                <div className="absolute top-2 right-2 text-[8px] opacity-70">East Wing</div>
                <div className="absolute bottom-2 left-2 text-[8px] opacity-70">West Wing</div>
                <div className="absolute bottom-2 right-2 text-[8px] opacity-70">South Wing</div>

                {/* Center area */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/20 rounded bg-black/20 flex items-center justify-center">
                  <span className="text-[8px] opacity-70">Lobby</span>
                </div>

                {/* Staff locations */}
                <div className="absolute top-[20%] left-[30%] h-3 w-3 bg-teal-500 rounded-full flex items-center justify-center text-[6px] font-bold">
                  H
                </div>
                <div className="absolute top-[45%] left-[60%] h-3 w-3 bg-blue-500 rounded-full flex items-center justify-center text-[6px] font-bold">
                  F
                </div>
                <div className="absolute top-[70%] left-[25%] h-3 w-3 bg-purple-500 rounded-full flex items-center justify-center text-[6px] font-bold">
                  M
                </div>
                <div className="absolute top-[60%] left-[75%] h-3 w-3 bg-amber-500 rounded-full flex items-center justify-center text-[6px] font-bold border-2 border-white">
                  H
                </div>
              </div>

              <div className="flex justify-between text-[8px] mt-2">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                  <span>Housekeeping</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span>Front Desk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  <span>Maintenance</span>
                </div>
              </div>
            </div>
          ),
          instruction: "View staff locations on the hotel map",
          fingerTarget: null,
          tooltipContent: "Different colors represent different departments",
          tooltipTarget: { x: 50, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] text-teal-300 font-medium">HOTEL MAP</div>
                <select className="bg-black/30 text-[8px] p-1 rounded border border-white/20">
                  <option>All Floors</option>
                  <option>Ground Floor</option>
                  <option>1st Floor</option>
                  <option>2nd Floor</option>
                  <option>3rd Floor</option>
                </select>
              </div>
              <div className="relative h-[140px] w-full bg-black/30 rounded-lg border border-white/20">
                {/* Hotel floor plan mockup */}
                <div className="absolute top-2 left-2 text-[8px] opacity-70">North Wing</div>
                <div className="absolute top-2 right-2 text-[8px] opacity-70">East Wing</div>
                <div className="absolute bottom-2 left-2 text-[8px] opacity-70">West Wing</div>
                <div className="absolute bottom-2 right-2 text-[8px] opacity-70">South Wing</div>

                {/* Center area */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/20 rounded bg-black/20 flex items-center justify-center">
                  <span className="text-[8px] opacity-70">Lobby</span>
                </div>

                {/* Staff locations */}
                <div className="absolute top-[20%] left-[30%] h-3 w-3 bg-teal-500 rounded-full flex items-center justify-center text-[6px] font-bold">
                  H
                </div>
                <div className="absolute top-[45%] left-[60%] h-3 w-3 bg-blue-500 rounded-full flex items-center justify-center text-[6px] font-bold">
                  F
                </div>
                <div className="absolute top-[70%] left-[25%] h-3 w-3 bg-purple-500 rounded-full flex items-center justify-center text-[6px] font-bold">
                  M
                </div>
                <div className="absolute top-[60%] left-[75%] h-3 w-3 bg-amber-500 rounded-full flex items-center justify-center text-[6px] font-bold border-2 border-white">
                  H
                </div>
              </div>

              <div className="flex justify-between text-[8px] mt-2">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                  <span>Housekeeping</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <span>Front Desk</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  <span>Maintenance</span>
                </div>
              </div>
            </div>
          ),
          instruction: "Tap on a staff member to see details",
          fingerTarget: { x: 75, y: 60 },
          tooltipContent: "Tap any staff icon to see their details and assign tasks",
          tooltipTarget: { x: 75, y: 60 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">STAFF DETAILS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center text-lg font-bold">
                    H
                  </div>
                  <div>
                    <div className="text-[0.8rem] font-medium">Maria Lopez</div>
                    <div className="text-[10px] opacity-80">Housekeeping</div>
                  </div>
                </div>

                <div className="space-y-2 text-[10px]">
                  <div className="flex justify-between">
                    <span>Current Location:</span>
                    <span className="font-medium">South Wing, Room 512</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-medium">On Duty</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Task:</span>
                    <span className="font-medium">Room Cleaning (510-515)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tasks Completed Today:</span>
                    <span className="font-medium">7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Response Time:</span>
                    <span className="font-medium">2.3 min</span>
                  </div>
                </div>

                <div className="flex justify-between mt-4 gap-2">
                  <button className="bg-white/20 text-[10px] px-2 py-1 rounded flex-1 flex items-center justify-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>Message</span>
                  </button>
                  <button className="bg-teal-500 text-[10px] px-2 py-1 rounded flex-1 flex items-center justify-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Assign Task</span>
                  </button>
                </div>
              </div>
            </div>
          ),
          instruction: "View staff member details",
          fingerTarget: null,
          tooltipContent: "See current location, status, and performance metrics",
          tooltipTarget: { x: 50, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">STAFF DETAILS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center text-lg font-bold">
                    H
                  </div>
                  <div>
                    <div className="text-[0.8rem] font-medium">Maria Lopez</div>
                    <div className="text-[10px] opacity-80">Housekeeping</div>
                  </div>
                </div>

                <div className="space-y-2 text-[10px]">
                  <div className="flex justify-between">
                    <span>Current Location:</span>
                    <span className="font-medium">South Wing, Room 512</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-medium">On Duty</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Task:</span>
                    <span className="font-medium">Room Cleaning (510-515)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tasks Completed Today:</span>
                    <span className="font-medium">7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Response Time:</span>
                    <span className="font-medium">2.3 min</span>
                  </div>
                </div>

                <div className="flex justify-between mt-4 gap-2">
                  <button className="bg-white/20 text-[10px] px-2 py-1 rounded flex-1 flex items-center justify-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>Message</span>
                  </button>
                  <button className="bg-teal-500 text-[10px] px-2 py-1 rounded flex-1 flex items-center justify-center gap-1 border-2 border-white">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Assign Task</span>
                  </button>
                </div>
              </div>
            </div>
          ),
          instruction: "Tap 'Assign Task' to create a new task",
          fingerTarget: { x: 75, y: 140 },
          tooltipContent: "Assign tasks based on staff location and current workload",
          tooltipTarget: { x: 75, y: 140 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">ASSIGN NEW TASK</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-[10px] mb-1">Assigning to:</div>
                <div className="flex items-center gap-2 mb-3 bg-white/10 p-1 rounded">
                  <div className="h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-[8px] font-bold">
                    H
                  </div>
                  <div className="text-[10px] font-medium">Maria Lopez (Housekeeping)</div>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="text-[10px] mb-1">Task Type:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>Select task type</option>
                      <option>Room Cleaning</option>
                      <option>Guest Request</option>
                      <option>Restocking</option>
                      <option>Special Preparation</option>
                    </select>
                  </div>

                  <div>
                    <div className="text-[10px] mb-1">Location:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>Select location</option>
                      <option>Room 520</option>
                      <option>Room 521</option>
                      <option>Room 522</option>
                      <option>South Wing Hallway</option>
                    </select>
                  </div>

                  <div>
                    <div className="text-[10px] mb-1">Priority:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>Standard</option>
                      <option>Urgent</option>
                      <option>Low</option>
                    </select>
                  </div>

                  <div>
                    <div className="text-[10px] mb-1">Notes:</div>
                    <input
                      type="text"
                      placeholder="Add task details..."
                      className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20"
                    />
                  </div>
                </div>

                <button className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full mt-4">Assign Task</button>
              </div>
            </div>
          ),
          instruction: "Fill in task details and assign",
          fingerTarget: null,
          tooltipContent: "The system recommends nearby locations based on the staff member's current position",
        },
      ],
    },
    analytics: {
      title: "Performance Analytics",
      description: "Track response times and task completion metrics",
      icon: <Clock className="h-5 w-5" />,
      steps: [
        {
          screen: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">YOUR PERFORMANCE</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[10px]">
                    <span>Today's Tasks</span>
                    <span className="font-medium">8/10 Completed</span>
                  </div>
                  <div className="h-1.5 bg-black/30 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-teal-500 w-[80%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px]">
                    <span>Avg. Response Time</span>
                    <span className="font-medium">2.3 min</span>
                  </div>
                  <div className="h-1.5 bg-black/30 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-teal-500 w-[70%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px]">
                    <span>Guest Satisfaction</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                  <div className="h-1.5 bg-black/30 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-teal-500 w-[95%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-500/20 rounded-lg p-2 mt-2">
                <div className="text-[10px] font-medium mb-1">Today's Highlights</div>
                <div className="text-[8px]">
                  • Fastest response: 1.2 min (Room 302 AC repair)
                  <br />• Most efficient task: Room turnover (4 min below avg)
                  <br />• Area for improvement: Guest request response time
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <button className="bg-white/10 text-[8px] px-2 py-1 rounded border-2 border-white">Weekly Stats</button>
                <button className="bg-white/10 text-[8px] px-2 py-1 rounded">Team Comparison</button>
              </div>
            </div>
          ),
          instruction: "View your personal performance metrics",
          fingerTarget: null,
          tooltipContent: "Track your daily performance and areas for improvement",
          tooltipTarget: { x: 50, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">YOUR PERFORMANCE</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[10px]">
                    <span>Today's Tasks</span>
                    <span className="font-medium">8/10 Completed</span>
                  </div>
                  <div className="h-1.5 bg-black/30 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-teal-500 w-[80%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px]">
                    <span>Avg. Response Time</span>
                    <span className="font-medium">2.3 min</span>
                  </div>
                  <div className="h-1.5 bg-black/30 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-teal-500 w-[70%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px]">
                    <span>Guest Satisfaction</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                  <div className="h-1.5 bg-black/30 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-teal-500 w-[95%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-500/20 rounded-lg p-2 mt-2">
                <div className="text-[10px] font-medium mb-1">Today's Highlights</div>
                <div className="text-[8px]">
                  • Fastest response: 1.2 min (Room 302 AC repair)
                  <br />• Most efficient task: Room turnover (4 min below avg)
                  <br />• Area for improvement: Guest request response time
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <button className="bg-white/10 text-[8px] px-2 py-1 rounded border-2 border-white">Weekly Stats</button>
                <button className="bg-white/10 text-[8px] px-2 py-1 rounded">Team Comparison</button>
              </div>
            </div>
          ),
          instruction: "Tap 'Weekly Stats' to see longer-term trends",
          fingerTarget: { x: 30, y: 140 },
          tooltipContent: "View your performance over time to track improvements",
          tooltipTarget: { x: 30, y: 140 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">WEEKLY PERFORMANCE</div>
              </div>

              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-[10px] font-medium mb-2">Tasks Completed This Week</div>
                <div className="flex h-20 items-end gap-1">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Mon</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "40%" }}></div>
                    <div className="text-[6px] mt-1">8</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Tue</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "60%" }}></div>
                    <div className="text-[6px] mt-1">12</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Wed</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "50%" }}></div>
                    <div className="text-[6px] mt-1">10</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Thu</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "45%" }}></div>
                    <div className="text-[6px] mt-1">9</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Fri</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "40%" }}></div>
                    <div className="text-[6px] mt-1">8</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Sat</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "35%" }}></div>
                    <div className="text-[6px] mt-1">7</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Sun</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "30%" }}></div>
                    <div className="text-[6px] mt-1">6</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-[10px] font-medium mb-2">Avg. Response Time (minutes)</div>
                <div className="flex h-20 items-end gap-1">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Mon</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "50%" }}></div>
                    <div className="text-[6px] mt-1">2.5</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Tue</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "40%" }}></div>
                    <div className="text-[6px] mt-1">2.0</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Wed</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "45%" }}></div>
                    <div className="text-[6px] mt-1">2.2</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Thu</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "55%" }}></div>
                    <div className="text-[6px] mt-1">2.7</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Fri</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "46%" }}></div>
                    <div className="text-[6px] mt-1">2.3</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Sat</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "60%" }}></div>
                    <div className="text-[6px] mt-1">3.0</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="text-[6px] mb-1">Sun</div>
                    <div className="w-full bg-teal-500/70 rounded-sm" style={{ height: "50%" }}></div>
                    <div className="text-[6px] mt-1">2.5</div>
                  </div>
                </div>
              </div>

              <div className="text-[8px] mt-2">
                <div className="font-medium">Weekly Summary:</div>
                <div>Total Tasks: 60 | Avg. Response: 2.4 min | Efficiency: 92%</div>
              </div>
            </div>
          ),
          instruction: "View weekly performance charts",
          fingerTarget: null,
          tooltipContent: "Charts show your performance trends over the week",
          tooltipTarget: { x: 50, y: 80 },
        },
        {
          screen: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">TEAM COMPARISON</div>
              </div>

              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-[10px] font-medium mb-2">Housekeeping Team Ranking</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-[8px] font-medium w-5">1.</div>
                    <div className="text-[8px] flex-1">Sarah Johnson</div>
                    <div className="text-[8px] w-12 text-right">12.4 tasks/day</div>
                  </div>
                  <div className="flex items-center gap-2 bg-teal-500/20 p-1 rounded">
                    <div className="text-[8px] font-medium w-5">2.</div>
                    <div className="text-[8px] flex-1">You</div>
                    <div className="text-[8px] w-12 text-right">10.8 tasks/day</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[8px] font-medium w-5">3.</div>
                    <div className="text-[8px] flex-1">Michael Chen</div>
                    <div className="text-[8px] w-12 text-right">9.6 tasks/day</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[8px] font-medium w-5">4.</div>
                    <div className="text-[8px] flex-1">Elena Rodriguez</div>
                    <div className="text-[8px] w-12 text-right">9.2 tasks/day</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[8px] font-medium w-5">5.</div>
                    <div className="text-[8px] flex-1">David Kim</div>
                    <div className="text-[8px] w-12 text-right">8.7 tasks/day</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-[10px] font-medium mb-2">Response Time Comparison</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 bg-teal-500/20 p-1 rounded">
                    <div className="text-[8px] font-medium w-5">1.</div>
                    <div className="text-[8px] flex-1">You</div>
                    <div className="text-[8px] w-12 text-right">2.3 min</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[8px] font-medium w-5">2.</div>
                    <div className="text-[8px] flex-1">Sarah Johnson</div>
                    <div className="text-[8px] w-12 text-right">2.5 min</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[8px] font-medium w-5">3.</div>
                    <div className="text-[8px] flex-1">Elena Rodriguez</div>
                    <div className="text-[8px] w-12 text-right">2.8 min</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[8px] font-medium w-5">4.</div>
                    <div className="text-[8px] flex-1">Michael Chen</div>
                    <div className="text-[8px] w-12 text-right">3.1 min</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[8px] font-medium w-5">5.</div>
                    <div className="text-[8px] flex-1">David Kim</div>
                    <div className="text-[8px] w-12 text-right">3.4 min</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          instruction: "Compare your performance with team members",
          fingerTarget: null,
          tooltipContent: "See how you rank among your team in different metrics",
          tooltipTarget: { x: 50, y: 80 },
        },
      ],
    },
  }

  // Handle finger animation
  useEffect(() => {
    if (
      currentStep < scenarios[currentScenario].steps.length &&
      scenarios[currentScenario].steps[currentStep].fingerTarget
    ) {
      const timer = setTimeout(() => {
        setShowFinger(true)
        const target = scenarios[currentScenario].steps[currentStep].fingerTarget
        if (target) {
          setFingerPosition(target)
        }

        // Show tooltip after finger appears
        setTimeout(() => {
          setShowTooltip(true)
          setTooltipContent(scenarios[currentScenario].steps[currentStep].tooltipContent)
          setTooltipPosition(scenarios[currentScenario].steps[currentStep].tooltipTarget ?? { x: 0, y: 0 })
        }, 500)

        // Animate tap
        setTimeout(() => {
          setIsAnimating(true)

          // Move to next step after animation
          setTimeout(() => {
            setShowFinger(false)
            setShowTooltip(false)
            setIsAnimating(false)
            setCurrentStep(currentStep + 1)
          }, 800)
        }, 1000)
      }, 1500)

      return () => clearTimeout(timer)
    } else if (
      currentStep < scenarios[currentScenario].steps.length &&
      scenarios[currentScenario].steps[currentStep].tooltipTarget
    ) {
      // If there's no finger but there is a tooltip
      const timer = setTimeout(() => {
        setShowTooltip(true)
        setTooltipContent(scenarios[currentScenario].steps[currentStep].tooltipContent)
        setTooltipPosition(scenarios[currentScenario].steps[currentStep].tooltipTarget ?? { x: 0, y: 0 })

        // Auto advance after showing tooltip
        setTimeout(() => {
          setShowTooltip(false)
          setCurrentStep(currentStep + 1)
        }, 3000)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [currentStep, currentScenario])

  // Reset when scenario changes
  useEffect(() => {
    setCurrentStep(0)
    setShowFinger(false)
    setShowTooltip(false)
  }, [currentScenario])

  // Auto-restart demo when it reaches the end
  useEffect(() => {
    if (currentStep >= scenarios[currentScenario].steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(0)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [currentStep, currentScenario])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Interactive Watch Demo</DialogTitle>
          <DialogDescription>See how Wrist Connect works in real-world scenarios</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gasm:p-2 p-6">
          <div className="md:col-span-1">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Scenarios</h3>
              <div className="space-y-2">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <button
                    key={key}
                    className={`flex items-center gap-2 w-full p-2 rounded-md text-left ${
                      currentScenario === key
                        ? "bg-[#FEFAE0]  text-[#DCA47C] "
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                    onClick={() => setCurrentScenario(key as keyof typeof scenarios)}
                  >
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        currentScenario === key ? "bg-teal-500 text-white" : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {scenario.icon}
                    </div>
                    <div>
                      <div className="font-medium">{scenario.title}</div>
                      <div className="text-xs">{scenario.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex flex-col items-center">
              <div className="mb-4 text-center">
                <h3 className="text-lg font-medium">{scenarios[currentScenario].title}</h3>
                <p className="text-[0.8rem] text-gray-500">
                  {currentStep < scenarios[currentScenario].steps.length
                    ? scenarios[currentScenario].steps[currentStep].instruction
                    : "Demo completed! Restarting..."}
                </p>
              </div>

              <div className="relative">
                {/* Watch display */}
                <div
                  ref={watchRef}
                  className="aspect-square w-[280px] relative rounded-[2rem] overflow-hidden shadow-xl border-[10px] border-gray-900"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Watch bezel */}
                    <div className="w-[90%] h-[90%] rounded-[1.5rem] bg-gradient-to-br from-gray-700 to-gray-800 p-3 flex flex-col items-center justify-center">
                      {/* Watch screen */}
                      <div className="w-full h-full bg-black rounded-[1.25rem] overflow-hidden relative flex flex-col">
                        <div className="absolute inset-0 flex flex-col text-white p-3">
                          <div className="text-xs font-medium mb-1 flex justify-between items-center">
                            <span>10:42 AM</span>
                            <span className="text-[#FEFAE0] ">●</span>
                          </div>

                          <div className="flex-1 overflow-hidden">
                            {currentStep < scenarios[currentScenario].steps.length &&
                              scenarios[currentScenario].steps[currentStep].screen}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Finger indicator */}
                {showFinger && (
                  <div
                    className={`absolute w-8 h-8 rounded-full border-2 border-white bg-white/20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
                      isAnimating ? "scale-90 opacity-70" : "scale-100 opacity-50"
                    }`}
                    style={{
                      left: `${fingerPosition.x}%`,
                      top: `${fingerPosition.y}%`,
                      transition: "all 0.2s ease-out",
                    }}
                  ></div>
                )}

                {/* Tooltip */}
                {showTooltip && (
                  <div
                    className="absolute bg-black/80 text-white text-xs p-2 rounded-md max-w-[200px] transform -translate-x-1/2 z-10"
                    style={{
                      left: `${tooltipPosition.x}%`,
                      top: `${tooltipPosition.y + 15}%`,
                    }}
                  >
                    {tooltipContent}
                    <div
                      className="absolute w-2 h-2 bg-black/80 transform rotate-45 -translate-x-1/2"
                      style={{ left: "50%", top: "-4px" }}
                    ></div>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-between w-full">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous Step
                </Button>
                <Button
                  onClick={() => {
                    if (currentStep >= scenarios[currentScenario].steps.length - 1) {
                      setCurrentStep(0)
                    } else {
                      setCurrentStep(currentStep + 1)
                    }
                  }}
                >
                  {currentStep >= scenarios[currentScenario].steps.length - 1 ? "Restart Demo" : "Next Step"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

