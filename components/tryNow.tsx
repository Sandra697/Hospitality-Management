"use client"

import { useState, useRef, JSX } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle2, ArrowRight, MessageSquare, Clock, AlertTriangle, MapPin } from 'lucide-react'

interface TryNowWatchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TryNowWatch({ open, onOpenChange }: TryNowWatchProps) {
  const [currentScenario, setCurrentScenario] = useState<keyof typeof scenarios>("task")
  const [currentScreen, setCurrentScreen] = useState<keyof typeof scenarios[keyof typeof scenarios]["screens"]>("main")
  const [history, setHistory] = useState<string[]>([])
  const watchRef = useRef<HTMLDivElement>(null)

  // Define the different demo scenarios
  const scenarios: Record<string, {
    title: string;
    description: string;
    icon: JSX.Element;
    screens: Record<string, { content: JSX.Element }>;
  }> = {
    task: {
      title: "Task Management",
      description: "Try receiving, accepting, and completing tasks",
      icon: <CheckCircle2 className="h-5 w-5" />,
      screens: {
        main: {
          content: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">TASKS</div>
              <div 
                className="bg-white/10 rounded-lg p-2 mb-2 hover:bg-white/20 cursor-pointer transition-colors"
                onClick={() => navigateTo("task_detail_1")}
              >
                <div className="text-[10px] text-red-300 font-medium">URGENT</div>
                <div className="text-xs font-medium">Room 302 - AC repair</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] opacity-80">5 min ago</span>
                </div>
              </div>
              <div 
                className="bg-white/10 rounded-lg p-2 hover:bg-white/20 cursor-pointer transition-colors"
                onClick={() => navigateTo("task_detail_2")}
              >
                <div className="text-[10px] text-yellow-300 font-medium">STANDARD</div>
                <div className="text-xs font-medium">Room 506 - Extra towels</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] opacity-80">12 min ago</span>
                </div>
              </div>
            </div>
          )
        },
        task_detail_1: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
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
                  <button 
                    className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full hover:bg-teal-600 transition-colors"
                    onClick={() => navigateTo("task_in_progress_1")}
                  >
                    Accept Task
                  </button>
                </div>
              </div>
            </div>
          )
        },
        task_detail_2: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">TASK DETAILS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-[10px] text-yellow-300 font-medium">STANDARD TASK</div>
                <div className="text-[0.8rem] font-medium">Room 506 - Extra towels</div>
                <div className="text-[10px] opacity-80 mt-1">Reported by: Guest</div>
                <div className="text-[10px] opacity-80">Location: 5th Floor, Room 506</div>
                <div className="text-[10px] opacity-80 mt-1">
                  Notes: Guest requested 2 extra bath towels and 1 hand towel.
                </div>
                <div className="flex justify-between items-center mt-3">
                  <button 
                    className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full hover:bg-teal-600 transition-colors"
                    onClick={() => navigateTo("task_in_progress_2")}
                  >
                    Accept Task
                  </button>
                </div>
              </div>
            </div>
          )
        },
        task_in_progress_1: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
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
                <div className="flex justify-between items-center mt-3 gap-6">
                  <button 
                    className="bg-white/20 text-[10px] px-2 py-1 rounded flex-1 hover:bg-white/30 transition-colors"
                    onClick={() => navigateTo("task_update_1")}
                  >
                    Update
                  </button>
                  <button 
                    className="bg-green-500 text-[10px] px-2 py-1 rounded flex-1 hover:bg-green-600 transition-colors"
                    onClick={() => navigateTo("task_complete_1")}
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          )
        },
        task_in_progress_2: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">TASK IN PROGRESS</div>
              </div>
              <div className="bg-teal-500/20 border border-teal-500 rounded-lg p-3">
                <div className="text-[10px] text-yellow-300 font-medium">STANDARD TASK</div>
                <div className="text-[0.8rem] font-medium">Room 506 - Extra towels</div>
                <div className="text-[10px] opacity-80 mt-1">Status: In Progress</div>
                <div className="text-[10px] opacity-80">Time accepted: Just now</div>
                <div className="text-[10px] opacity-80 mt-1">ETA: 10 minutes</div>
                <div className="flex justify-between items-center mt-3 gap-6">
                  <button 
                    className="bg-white/20 text-[10px] px-2 py-1 rounded flex-1 hover:bg-white/30 transition-colors"
                    onClick={() => navigateTo("task_update_2")}
                  >
                    Update
                  </button>
                  <button 
                    className="bg-green-500 text-[10px] px-2 py-1 rounded flex-1 hover:bg-green-600 transition-colors"
                    onClick={() => navigateTo("task_complete_2")}
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          )
        },
        task_update_1: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">UPDATE TASK</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-[10px] text-red-300 font-medium">URGENT TASK</div>
                <div className="text-[0.8rem] font-medium">Room 302 - AC repair</div>
                
                <div className="space-y-2 mt-2">
                  <div>
                    <div className="text-[10px] mb-1">Status:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>In Progress</option>
                      <option>Waiting for Parts</option>
                      <option>Need Assistance</option>
                      <option>Almost Complete</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="text-[10px] mb-1">Estimated Time:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>5 minutes</option>
                      <option>10 minutes</option>
                      <option>15 minutes</option>
                      <option>20+ minutes</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="text-[10px] mb-1">Notes:</div>
                    <input
                      type="text"
                      placeholder="Add update details..."
                      className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20"
                    />
                  </div>
                </div>
                
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full mt-3 hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("task_in_progress_1")}
                >
                  Submit Update
                </button>
              </div>
            </div>
          )
        },
        task_update_2: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">UPDATE TASK</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-[10px] text-yellow-300 font-medium">STANDARD TASK</div>
                <div className="text-[0.8rem] font-medium">Room 506 - Extra towels</div>
                
                <div className="space-y-2 mt-2">
                  <div>
                    <div className="text-[10px] mb-1">Status:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>In Progress</option>
                      <option>Waiting for Supplies</option>
                      <option>Need Assistance</option>
                      <option>Almost Complete</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="text-[10px] mb-1">Estimated Time:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>5 minutes</option>
                      <option>10 minutes</option>
                      <option>15 minutes</option>
                      <option>20+ minutes</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="text-[10px] mb-1">Notes:</div>
                    <input
                      type="text"
                      placeholder="Add update details..."
                      className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20"
                    />
                  </div>
                </div>
                
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full mt-3 hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("task_in_progress_2")}
                >
                  Submit Update
                </button>
              </div>
            </div>
          )
        },
        task_complete_1: {
          content: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-[0.8rem] font-medium text-center">Task Completed!</div>
              <div className="text-[10px] opacity-80 text-center">Room 302 - AC repair</div>
              <div className="text-[10px] opacity-80 text-center mt-2">Time to complete: 14 minutes</div>
              <div className="mt-4">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("main")}
                >
                  Return to Tasks
                </button>
              </div>
            </div>
          )
        },
        task_complete_2: {
          content: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-[0.8rem] font-medium text-center">Task Completed!</div>
              <div className="text-[10px] opacity-80 text-center">Room 506 - Extra towels</div>
              <div className="text-[10px] opacity-80 text-center mt-2">Time to complete: 8 minutes</div>
              <div className="mt-4">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("main")}
                >
                  Return to Tasks
                </button>
              </div>
            </div>
          )
        }
      }
    },
    communication: {
      title: "Staff Communication",
      description: "Try messaging between staff members",
      icon: <MessageSquare className="h-5 w-5" />,
      screens: {
        main: {
          content: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">MESSAGES</div>
              <div className="space-y-1.5">
                <div 
                  className="bg-white/10 rounded p-1.5 hover:bg-white/20 cursor-pointer transition-colors"
                  onClick={() => navigateTo("message_detail_1")}
                >
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Front Desk</span>
                    <span className="opacity-70">9:30 AM</span>
                  </div>
                  <div className="text-[10px]">VIP guest arriving at 2PM</div>
                </div>

                <div 
                  className="bg-white/10 rounded p-1.5 hover:bg-white/20 cursor-pointer transition-colors"
                  onClick={() => navigateTo("message_detail_2")}
                >
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Maintenance</span>
                    <span className="opacity-70">9:15 AM</span>
                  </div>
                  <div className="text-[10px]">Lobby restroom fixed</div>
                </div>

                <div 
                  className="bg-white/10 rounded p-1.5 hover:bg-white/20 cursor-pointer transition-colors"
                  onClick={() => navigateTo("message_detail_3")}
                >
                  <div className="text-[8px] flex justify-between">
                    <span className="font-medium">Housekeeping</span>
                    <span className="opacity-70">8:45 AM</span>
                  </div>
                  <div className="text-[10px]">Room 506 ready for check-in</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2">
                <button 
                  className="bg-teal-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("new_message")}
                >
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
          )
        },
        message_detail_1: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
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
                <button 
                  className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("message_reply_1")}
                >
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
                <button 
                  className="bg-white/10 rounded-lg px-2 py-1 text-[8px] hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("quick_reply_1")}
                >
                  Quick Reply
                </button>
                <button 
                  className="bg-white/10 rounded-lg px-2 py-1 text-[8px] hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("voice_message")}
                >
                  Voice Message
                </button>
              </div>
            </div>
          )
        },
        message_detail_2: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">MAINTENANCE</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">Maintenance</span>
                  <span className="opacity-70">9:15 AM</span>
                </div>
                <div className="text-[10px] mt-1">
                  Lobby restroom fixed. The issue was a clogged drain. All facilities are now operational.
                  Please let guests know they can use it now.
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
                <button 
                  className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("message_reply_2")}
                >
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
                <button 
                  className="bg-white/10 rounded-lg px-2 py-1 text-[8px] hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("quick_reply_2")}
                >
                  Quick Reply
                </button>
                <button 
                  className="bg-white/10 rounded-lg px-2 py-1 text-[8px] hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("voice_message")}
                >
                  Voice Message
                </button>
              </div>
            </div>
          )
        },
        message_detail_3: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">HOUSEKEEPING</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">Housekeeping</span>
                  <span className="opacity-70">8:45 AM</span>
                </div>
                <div className="text-[10px] mt-1">
                  Room 506 ready for check-in. All amenities stocked and room has been thoroughly cleaned.
                  Early check-in is possible if needed.
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
                <button 
                  className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("message_reply_3")}
                >
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
                <button 
                  className="bg-white/10 rounded-lg px-2 py-1 text-[8px] hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("quick_reply_3")}
                >
                  Quick Reply
                </button>
                <button 
                  className="bg-white/10 rounded-lg px-2 py-1 text-[8px] hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("voice_message")}
                >
                  Voice Message
                </button>
              </div>
            </div>
          )
        },
        quick_reply_1: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">QUICK REPLIES</div>
              </div>
              <div className="space-y-1.5 max-h-[120px] overflow-y-auto">
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_1")}
                >
                  Understood, will take care of it right away.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_1")}
                >
                  On my way to handle this now.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_1")}
                >
                  Will prepare room 701 with amenities before 2PM.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_1")}
                >
                  Need more information, please clarify.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_1")}
                >
                  Task completed successfully.
                </button>
              </div>
            </div>
          )
        },
        quick_reply_2: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">QUICK REPLIES</div>
              </div>
              <div className="space-y-1.5 max-h-[120px] overflow-y-auto">
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_2")}
                >
                  Thank you for the update.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_2")}
                >
                  I'll inform the guests right away.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_2")}
                >
                  Great work, appreciate the quick fix.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_2")}
                >
                  Is there anything else that needs attention?
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_2")}
                >
                  Will check it shortly to confirm.
                </button>
              </div>
            </div>
          )
        },
        quick_reply_3: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">QUICK REPLIES</div>
              </div>
              <div className="space-y-1.5 max-h-[120px] overflow-y-auto">
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_3")}
                >
                  Perfect, thank you for the update.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_3")}
                >
                  We have guests arriving early, this is great news.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_3")}
                >
                  Excellent work on the quick turnaround.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_3")}
                >
                  I'll update the system to show room availability.
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 text-[10px] w-full text-left hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("message_reply_3")}
                >
                  Any special notes about the room condition?
                </button>
              </div>
            </div>
          )
        },
        message_reply_1: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
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
                <button className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-teal-600 transition-colors">
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
              <div className="mt-2">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("main")}
                >
                  Back to Messages
                </button>
              </div>
            </div>
          )
        },
        message_reply_2: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">MAINTENANCE</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">Maintenance</span>
                  <span className="opacity-70">9:15 AM</span>
                </div>
                <div className="text-[10px] mt-1">
                  Lobby restroom fixed. The issue was a clogged drain. All facilities are now operational.
                  Please let guests know they can use it now.
                </div>
              </div>
              <div className="bg-teal-500/20 rounded-lg p-2 mb-2 self-end">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">You</span>
                  <span className="opacity-70">Just now</span>
                </div>
                <div className="text-[10px] mt-1">Thank you for the update.</div>
              </div>
              <div className="flex mt-3">
                <div className="flex-1 bg-white/10 rounded-lg p-2 mr-2">
                  <input
                    type="text"
                    placeholder="Type a reply..."
                    className="bg-transparent text-[10px] w-full outline-none"
                  />
                </div>
                <button className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-teal-600 transition-colors">
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
              <div className="mt-2">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("main")}
                >
                  Back to Messages
                </button>
              </div>
            </div>
          )
        },
        message_reply_3: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">HOUSEKEEPING</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">Housekeeping</span>
                  <span className="opacity-70">8:45 AM</span>
                </div>
                <div className="text-[10px] mt-1">
                  Room 506 ready for check-in. All amenities stocked and room has been thoroughly cleaned.
                  Early check-in is possible if needed.
                </div>
              </div>
              <div className="bg-teal-500/20 rounded-lg p-2 mb-2 self-end">
                <div className="text-[8px] flex justify-between">
                  <span className="font-medium">You</span>
                  <span className="opacity-70">Just now</span>
                </div>
                <div className="text-[10px] mt-1">Perfect, thank you for the update.</div>
              </div>
              <div className="flex mt-3">
                <div className="flex-1 bg-white/10 rounded-lg p-2 mr-2">
                  <input
                    type="text"
                    placeholder="Type a reply..."
                    className="bg-transparent text-[10px] w-full outline-none"
                  />
                </div>
                <button className="bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center hover:bg-teal-600 transition-colors">
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
              <div className="mt-2">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("main")}
                >
                  Back to Messages
                </button>
              </div>
            </div>
          )
        },
        new_message: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">NEW MESSAGE</div>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="text-[10px] mb-1">To:</div>
                  <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                    <option>Select recipient</option>
                    <option>Front Desk</option>
                    <option>Housekeeping</option>
                    <option>Maintenance</option>
                    <option>Kitchen</option>
                    <option>Management</option>
                    <option>All Staff</option>
                  </select>
                </div>
                
                <div>
                  <div className="text-[10px] mb-1">Priority:</div>
                  <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>FYI Only</option>
                  </select>
                </div>
                
                <div>
                  <div className="text-[10px] mb-1">Message:</div>
                  <textarea
                    placeholder="Type your message here..."
                    className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20 h-16 resize-none"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-between mt-2">
                <button 
                  className="bg-white/20 text-[10px] px-3 py-1 rounded hover:bg-white/30 transition-colors"
                  onClick={() => goBack()}
                >
                  Cancel
                </button>
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("message_sent")}
                >
                  Send Message
                </button>
              </div>
            </div>
          )
        },
        message_sent: {
          content: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-[0.8rem] font-medium text-center">Message Sent!</div>
              <div className="text-[10px] opacity-80 text-center mt-2">Your message has been delivered</div>
              <div className="mt-4">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("main")}
                >
                  Return to Messages
                </button>
              </div>
            </div>
          )
        },
        voice_message: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">VOICE MESSAGE</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-red-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                  </svg>
                </div>
                <div className="text-[10px] text-center">Press and hold to record</div>
                <div className="text-[8px] opacity-70 text-center mt-1">0:00 / 0:30</div>
                
                <div className="flex justify-between w-full mt-6">
                  <button 
                    className="bg-white/20 text-[10px] px-3 py-1 rounded hover:bg-white/30 transition-colors"
                    onClick={() => goBack()}
                  >
                    Cancel
                  </button>
                  <button 
                    className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                    onClick={() => navigateTo("message_sent")}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )
        }
      }
    },
    emergency: {
      title: "Emergency Alerts",
      description: "Try handling emergency situations",
      icon: <AlertTriangle className="h-5 w-5" />,
      screens: {
        main: {
          content: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">DASHBOARD</div>
              <div className="grid grid-cols-2 gap-6">
                <button 
                  className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                  onClick={() => setCurrentScenario("communication")}
                >
                  <MessageSquare className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Messages</span>
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                  onClick={() => setCurrentScenario("task")}
                >
                  <CheckCircle2 className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Tasks</span>
                </button>
                <button 
                  className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                  onClick={() => setCurrentScenario("location")}
                >
                  <MapPin className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Map</span>
                </button>
                <button 
                  className="bg-red-500/80 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-red-600/80 transition-colors"
                  onClick={() => navigateTo("emergency_types")}
                >
                  <AlertTriangle className="h-5 w-5 mb-1" />
                  <span className="text-[8px]">Emergency</span>
                </button>
              </div>
            </div>
          )
        },
        emergency_types: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-red-300 font-medium">EMERGENCY PROTOCOLS</div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <button 
                  className="bg-red-500/20 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-red-500/30 transition-colors"
                  onClick={() => navigateTo("fire_emergency")}
                >
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
                <button 
                  className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("medical_emergency")}
                >
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
                <button 
                  className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("security_emergency")}
                >
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
                <button 
                  className="bg-white/10 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("evacuation_emergency")}
                >
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
          )
        },
        fire_emergency: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
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
                  <div className="flex items-center gap-6">
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
                  <div className="flex items-center gap-6">
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
                  <div className="flex items-center gap-6">
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
                  <button 
                    className="bg-red-500 text-white text-[10px] py-2 rounded w-full font-bold hover:bg-red-600 transition-colors"
                    onClick={() => navigateTo("fire_alert_sent")}
                  >
                    SEND FIRE ALERT
                  </button>
                </div>
              </div>
            </div>
          )
        },
        fire_alert_sent: {
          content: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full bg-red-500/20">
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
                <button 
                  className="bg-white/20 text-[10px] px-3 py-1 rounded mr-2 hover:bg-white/30 transition-colors"
                  onClick={() => navigateTo("fire_protocol")}
                >
                  View Protocol
                </button>
                <button 
                  className="bg-red-500 text-[10px] px-3 py-1 rounded hover:bg-red-600 transition-colors"
                  onClick={() => navigateTo("update_fire_status")}
                >
                  Update Status
                </button>
              </div>
            </div>
          )
        },
        fire_protocol: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
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
                  <button 
                    className="bg-white/20 text-[10px] px-3 py-1 rounded hover:bg-white/30 transition-colors"
                    onClick={() => navigateTo("check_in_safe")}
                  >
                    Check-In Safe
                  </button>
                  <button 
                    className="bg-red-500 text-[10px] px-3 py-1 rounded hover:bg-red-600 transition-colors"
                    onClick={() => navigateTo("need_assistance")}
                  >
                    Need Assistance
                  </button>
                </div>
              </div>
            </div>
          )
        },
        check_in_safe: {
          content: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-[0.8rem] font-medium text-center">Safety Check-In Complete</div>
              <div className="text-[10px] opacity-80 text-center mt-2">Your status has been updated to SAFE</div>
              <div className="text-[10px] opacity-80 text-center">Emergency response team has been notified</div>
              <div className="mt-4">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("fire_alert_sent")}
                >
                  Return to Alert
                </button>
              </div>
            </div>
          )
        },
        need_assistance: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-red-300 font-medium">REQUEST ASSISTANCE</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-3 border border-red-500">
                <div className="text-center mb-2">
                  <div className="text-[0.8rem] font-bold text-red-300">EMERGENCY ASSISTANCE</div>
                  <div className="text-[10px] opacity-80">Help will be dispatched immediately</div>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-[10px] mb-1">Your Location:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>Select your location</option>
                      <option>East Wing</option>
                      <option>West Wing</option>
                      <option>North Wing</option>
                      <option>South Wing</option>
                      <option>Kitchen</option>
                      <option>Lobby</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="text-[10px] mb-1">Floor:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>Select floor</option>
                      <option>Ground Floor</option>
                      <option>1st Floor</option>
                      <option>2nd Floor</option>
                      <option>3rd Floor</option>
                      <option>4th Floor</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="text-[10px] mb-1">Situation:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>Select situation</option>
                      <option>Trapped by fire</option>
                      <option>Injured person</option>
                      <option>Smoke inhalation</option>
                      <option>Unable to evacuate</option>
                      <option>Other (specify in notes)</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="text-[10px] mb-1">Notes:</div>
                    <input
                      type="text"
                      placeholder="Additional details..."
                      className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20"
                    />
                  </div>
                </div>
                
                <button 
                  className="bg-red-500 text-white text-[10px] py-2 rounded w-full font-bold mt-4 hover:bg-red-600 transition-colors"
                  onClick={() => navigateTo("assistance_requested")}
                >
                  SEND ASSISTANCE REQUEST
                </button>
              </div>
            </div>
          )
        },
        assistance_requested: {
          content: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full bg-red-500/20">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <div className="text-lg font-bold text-center text-red-300">HELP ON THE WAY</div>
              <div className="text-[0.8rem] opacity-90 text-center">Emergency team dispatched</div>
              <div className="text-[10px] opacity-80 text-center mt-1">ETA: 2 minutes</div>
              <div className="mt-4 text-center">
                <div className="text-[10px] opacity-80 mb-2">Stay where you are if safe to do so</div>
                <button 
                  className="bg-white/20 text-[10px] px-3 py-1 rounded hover:bg-white/30 transition-colors"
                  onClick={() => navigateTo("fire_protocol")}
                >
                  View Protocol
                </button>
              </div>
            </div>
          )
        },
        medical_emergency: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-blue-300 font-medium">MEDICAL EMERGENCY</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500">
                <div className="text-center mb-2">
                  <div className="text-[0.8rem] font-bold text-blue-300">REPORT MEDICAL EMERGENCY</div>
                  <div className="text-[10px] opacity-80">This will alert medical staff</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-6">
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
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] w-20">Type:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded flex-1 border border-white/20">
                      <option>Select type</option>
                      <option>Guest Injury</option>
                      <option>Staff Injury</option>
                      <option>Illness</option>
                      <option>Allergic Reaction</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] w-20">Severity:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded flex-1 border border-white/20">
                      <option>Select severity</option>
                      <option>Minor</option>
                      <option>Moderate</option>
                      <option>Severe</option>
                      <option>Life-threatening</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] w-20">Notes:</div>
                    <input
                      type="text"
                      placeholder="Additional details..."
                      className="bg-black/30 text-[10px] p-1 rounded flex-1 border border-white/20"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button 
                    className="bg-blue-500 text-white text-[10px] py-2 rounded w-full font-bold hover:bg-blue-600 transition-colors"
                    onClick={() => navigateTo("medical_alert_sent")}
                  >
                    SEND MEDICAL ALERT
                  </button>
                </div>
              </div>
            </div>
          )
        }
      }
    },
    location: {
      title: "Location Tracking",
      description: "Try tracking staff locations for efficient task assignment",
      icon: <MapPin className="h-5 w-5" />,
      screens: {
        main: {
          content: (
            <div className="space-y-2">
              <div className="text-[10px] text-teal-300 font-medium">HOTEL MAP</div>
              <div className="flex items-center justify-between mb-2">
                <select className="bg-black/30 text-[8px] p-1 rounded border border-white/20">
                  <option>All Floors</option>
                  <option>Ground Floor</option>
                  <option>1st Floor</option>
                  <option>2nd Floor</option>
                  <option>3rd Floor</option>
                </select>
                <select className="bg-black/30 text-[8px] p-1 rounded border border-white/20">
                  <option>All Staff</option>
                  <option>Housekeeping</option>
                  <option>Maintenance</option>
                  <option>Front Desk</option>
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
                <button 
                  className="absolute top-[20%] left-[30%] h-3 w-3 bg-teal-500 rounded-full flex items-center justify-center text-[6px] font-bold hover:scale-150 transition-transform"
                  onClick={() => navigateTo("staff_details_1")}
                >
                  H
                </button>
                <button 
                  className="absolute top-[45%] left-[60%] h-3 w-3 bg-blue-500 rounded-full flex items-center justify-center text-[6px] font-bold hover:scale-150 transition-transform"
                  onClick={() => navigateTo("staff_details_2")}
                >
                  F
                </button>
                <button 
                  className="absolute top-[70%] left-[25%] h-3 w-3 bg-purple-500 rounded-full flex items-center justify-center text-[6px] font-bold hover:scale-150 transition-transform"
                  onClick={() => navigateTo("staff_details_3")}
                >
                  M
                </button>
                <button 
                  className="absolute top-[60%] left-[75%] h-3 w-3 bg-amber-500 rounded-full flex items-center justify-center text-[6px] font-bold hover:scale-150 transition-transform"
                  onClick={() => navigateTo("staff_details_4")}
                >
                  H
                </button>
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
          )
        },
        staff_details_1: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">STAFF DETAILS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 bg-teal-500 rounded-full flex items-center justify-center text-lg font-bold">
                    H
                  </div>
                  <div>
                    <div className="text-[0.8rem] font-medium">John Smith</div>
                    <div className="text-[10px] opacity-80">Housekeeping</div>
                  </div>
                </div>

                <div className="space-y-2 text-[10px]">
                  <div className="flex justify-between">
                    <span>Current Location:</span>
                    <span className="font-medium">North Wing, Room 203</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-medium">On Duty</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Task:</span>
                    <span className="font-medium">Room Cleaning (201-205)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tasks Completed Today:</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Response Time:</span>
                    <span className="font-medium">3.1 min</span>
                  </div>
                </div>

                <div className="flex justify-between mt-4 gap-6">
                  <button 
                    className="bg-white/20 text-[10px] px-2 py-1 rounded flex-1 flex items-center justify-center gap-1 hover:bg-white/30 transition-colors"
                    onClick={() => navigateTo("message_staff_1")}
                  >
                    <MessageSquare className="h-3 w-3" />
                    <span>Message</span>
                  </button>
                  <button 
                    className="bg-teal-500 text-[10px] px-2 py-1 rounded flex-1 flex items-center justify-center gap-1 hover:bg-teal-600 transition-colors"
                    onClick={() => navigateTo("assign_task_1")}
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Assign Task</span>
                  </button>
                </div>
              </div>
            </div>
          )
        },
        staff_details_4: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
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

                <div className="flex justify-between mt-4 gap-6">
                  <button 
                    className="bg-white/20 text-[10px] px-2 py-1 rounded flex-1 flex items-center justify-center gap-1 hover:bg-white/30 transition-colors"
                    onClick={() => navigateTo("message_staff_4")}
                  >
                    <MessageSquare className="h-3 w-3" />
                    <span>Message</span>
                  </button>
                  <button 
                    className="bg-teal-500 text-[10px] px-2 py-1 rounded flex-1 flex items-center justify-center gap-1 hover:bg-teal-600 transition-colors"
                    onClick={() => navigateTo("assign_task_4")}
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Assign Task</span>
                  </button>
                </div>
              </div>
            </div>
          )
        },
        assign_task_4: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">ASSIGN NEW TASK</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-[10px] mb-1">Assigning to:</div>
                <div className="flex items-center gap-6 mb-3 bg-white/10 p-1 rounded">
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

                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded w-full mt-4 hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("task_assigned")}
                >
                  Assign Task
                </button>
              </div>
            </div>
          )
        },
        task_assigned: {
          content: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-[0.8rem] font-medium text-center">Task Assigned!</div>
              <div className="text-[10px] opacity-80 text-center">Maria Lopez has been notified</div>
              <div className="text-[10px] opacity-80 text-center mt-2">Estimated completion: 15 minutes</div>
              <div className="mt-4">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("main")}
                >
                  Return to Map
                </button>
              </div>
            </div>
          )
        },
        message_staff_4: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">MESSAGE STAFF</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-[10px] mb-1">To:</div>
                <div className="flex items-center gap-6 mb-3 bg-white/10 p-1 rounded">
                  <div className="h-5 w-5 bg-amber-500 rounded-full flex items-center justify-center text-[8px] font-bold">
                    H
                  </div>
                  <div className="text-[10px] font-medium">Maria Lopez (Housekeeping)</div>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="text-[10px] mb-1">Priority:</div>
                    <select className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20">
                      <option>Normal</option>
                      <option>Urgent</option>
                      <option>FYI Only</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="text-[10px] mb-1">Message:</div>
                    <textarea
                      placeholder="Type your message here..."
                      className="bg-black/30 text-[10px] p-1 rounded w-full border border-white/20 h-16 resize-none"
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-between mt-4">
                  <button 
                    className="bg-white/20 text-[10px] px-3 py-1 rounded hover:bg-white/30 transition-colors"
                    onClick={() => goBack()}
                  >
                    Cancel
                  </button>
                  <button 
                    className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                    onClick={() => navigateTo("message_sent_staff")}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          )
        },
        message_sent_staff: {
          content: (
            <div className="space-y-2 flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-[0.8rem] font-medium text-center">Message Sent!</div>
              <div className="text-[10px] opacity-80 text-center">Maria Lopez will be notified</div>
              <div className="mt-4">
                <button 
                  className="bg-teal-500 text-[10px] px-3 py-1 rounded hover:bg-teal-600 transition-colors"
                  onClick={() => navigateTo("staff_details_4")}
                >
                  Return to Staff Details
                </button>
              </div>
            </div>
          )
        }
      }
    },
    analytics: {
      title: "Performance Analytics",
      description: "Try tracking response times and task completion metrics",
      icon: <Clock className="h-5 w-5" />,
      screens: {
        main: {
          content: (
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
                <button 
                  className="bg-white/10 text-[8px] px-2 py-1 rounded hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("weekly_stats")}
                >
                  Weekly Stats
                </button>
                <button 
                  className="bg-white/10 text-[8px] px-2 py-1 rounded hover:bg-white/20 transition-colors"
                  onClick={() => navigateTo("team_comparison")}
                >
                  Team Comparison
                </button>
              </div>
            </div>
          )
        },
        weekly_stats: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
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
          )
        },
        team_comparison: {
          content: (
            <div className="space-y-2">
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center hover:bg-white/30"
                  onClick={() => goBack()}
                >
                  <ArrowRight className="h-3 w-3 rotate-180" />
                </button>
                <div className="text-[10px] text-teal-300 font-medium">TEAM COMPARISON</div>
              </div>

              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-[10px] font-medium mb-2">Housekeeping Team Ranking</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-6">
                    <div className="text-[8px] font-medium w-5">1.</div>
                    <div className="text-[8px] flex-1">Sarah Johnson</div>
                    <div className="text-[8px] w-12 text-right">12.4 tasks/day</div>
                  </div>
                  <div className="flex items-center gap-6 bg-teal-500/20 p-1 rounded">
                    <div className="text-[8px] font-medium w-5">2.</div>
                    <div className="text-[8px] flex-1">You</div>
                    <div className="text-[8px] w-12 text-right">10.8 tasks/day</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[8px] font-medium w-5">3.</div>
                    <div className="text-[8px] flex-1">Michael Chen</div>
                    <div className="text-[8px] w-12 text-right">9.6 tasks/day</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[8px] font-medium w-5">4.</div>
                    <div className="text-[8px] flex-1">Elena Rodriguez</div>
                    <div className="text-[8px] w-12 text-right">9.2 tasks/day</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[8px] font-medium w-5">5.</div>
                    <div className="text-[8px] flex-1">David Kim</div>
                    <div className="text-[8px] w-12 text-right">8.7 tasks/day</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-[10px] font-medium mb-2">Response Time Comparison</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-6 bg-teal-500/20 p-1 rounded">
                    <div className="text-[8px] font-medium w-5">1.</div>
                    <div className="text-[8px] flex-1">You</div>
                    <div className="text-[8px] w-12 text-right">2.3 min</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[8px] font-medium w-5">2.</div>
                    <div className="text-[8px] flex-1">Sarah Johnson</div>
                    <div className="text-[8px] w-12 text-right">2.5 min</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[8px] font-medium w-5">3.</div>
                    <div className="text-[8px] flex-1">Elena Rodriguez</div>
                    <div className="text-[8px] w-12 text-right">2.8 min</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[8px] font-medium w-5">4.</div>
                    <div className="text-[8px] flex-1">Michael Chen</div>
                    <div className="text-[8px] w-12 text-right">3.1 min</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-[8px] font-medium w-5">5.</div>
                    <div className="text-[8px] flex-1">David Kim</div>
                    <div className="text-[8px] w-12 text-right">3.4 min</div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
    }
  }

  // Navigation functions
  const navigateTo = (screen: keyof typeof scenarios[keyof typeof scenarios]["screens"]) => {
    setHistory([...history, currentScreen])
    setCurrentScreen(screen)
  }

  const goBack = () => {
      if (history.length > 0) {
        const prevScreen = history[history.length - 1] as keyof typeof scenarios[keyof typeof scenarios]["screens"]
        setHistory(history.slice(0, -1))
        setCurrentScreen(prevScreen)
      }
    }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle className="text-red-700">Try Now: Interactive Watch Demo</DialogTitle>
          <DialogDescription className="text-red-800">Explore Wrist Connect features by interacting with the watch interface</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:p-6 p-2">
          <div className="md:col-span-1">
            <div className="space-y-4">
              <h3 className="text-lg text-blue-600 font-medium">Scenarios</h3>
              <div className="space-y-2">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <button
                    key={key}
                    className={`flex items-center gap-6 w-full p-2 rounded-md text-left ${
                      currentScenario === key
                        ? "bg-[#FEFAE0] text-[#DCA47C]"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                    onClick={() => {
                      setCurrentScenario(key as keyof typeof scenarios)
                      setCurrentScreen("main")
                      setHistory([])
                    }}
                  >
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        currentScenario === key ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-700"
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
                <p className="text-[0.8rem] text-red-500">
                  Try interacting with the watch interface by tapping on buttons and elements
                </p>
              </div>

              <div className="relative">
                {/* Watch display */}
                <div
                  ref={watchRef}
                  className="aspect-square w-[280px] relative rounded-[2rem] overflow-hidden shadow-xl border-[10px] border-[#CA7373]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F9C0AB] to-[#CA7373] flex items-center justify-center">
                    {/* Watch bezel */}
                    <div className="w-[90%] h-[100%] rounded-[1.5rem] bg-gradient-to-br from-[#F9C0AB]/50 to-[#F9C0AB] p-3 flex flex-col items-center justify-center">
                      {/* Watch screen */}
                      <div className="w-full h-full bg-black rounded-[1.25rem] overflow-hidden relative flex flex-col">
                        <div className="absolute inset-0 flex flex-col text-white p-3">
                          <div className="text-xs font-medium mb-1 flex justify-between items-center">
                            <span>10:42 AM</span>
                            <span className="text-[#FEFAE0]">●</span>
                          </div>

                          <div className="flex-1 overflow-hidden">
                            {scenarios[currentScenario].screens[currentScreen]?.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Tap on buttons and elements in the watch interface to interact with it
                </p>
                {history.length > 0 && (
                  <Button variant="outline" onClick={() => goBack()}>
                    Go Back
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
