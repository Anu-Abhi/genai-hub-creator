
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Users, ClipboardList, GitCompare, Save, Download, Copy, PlayIcon } from "lucide-react";

const Playground = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <section className="py-8 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">SDLC AI Workspace</h1>
                <p className="text-lg text-muted-foreground">
                  Generate artifacts for every phase of your software development lifecycle
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2">
                  <Save className="h-4 w-4" /> Save
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" /> Export
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <Card className="lg:col-span-4 border">
                <CardHeader>
                  <CardTitle>Tool Selection</CardTitle>
                  <CardDescription>Choose the SDLC tool and configure settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Tabs defaultValue="brd" className="w-full">
                      <TabsList className="w-full">
                        <TabsTrigger value="brd" className="flex-1 gap-1">
                          <FileText className="h-4 w-4" /> BRD
                        </TabsTrigger>
                        <TabsTrigger value="stories" className="flex-1 gap-1">
                          <Users className="h-4 w-4" /> User Stories
                        </TabsTrigger>
                        <TabsTrigger value="tests" className="flex-1 gap-1">
                          <ClipboardList className="h-4 w-4" /> Test Cases
                        </TabsTrigger>
                        <TabsTrigger value="reverse" className="flex-1 gap-1">
                          <GitCompare className="h-4 w-4" /> Reverse
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Model</label>
                    <Select defaultValue="requirements">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="requirements">RequirementsPro v2.5</SelectItem>
                        <SelectItem value="brdmaster">BRDMaster v3.0</SelectItem>
                        <SelectItem value="analystai">AnalystAI v2.1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Output Format</label>
                    <Select defaultValue="detailed">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="detailed">Detailed</SelectItem>
                        <SelectItem value="executive">Executive Summary</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                        <SelectItem value="jira">JIRA Ready</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Parameters</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs text-muted-foreground">Detail Level</label>
                        <Select defaultValue="medium">
                          <SelectTrigger>
                            <SelectValue placeholder="Detail level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low (Overview)</SelectItem>
                            <SelectItem value="medium">Medium (Standard)</SelectItem>
                            <SelectItem value="high">High (Comprehensive)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-muted-foreground">Include Diagrams</label>
                        <Select defaultValue="yes">
                          <SelectTrigger>
                            <SelectValue placeholder="Diagrams" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Input</label>
                    <textarea 
                      className="w-full h-40 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your requirements, upload a meeting recording, or paste code for reverse engineering... (e.g., 'Create a comprehensive BRD for an employee onboarding system')"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full gap-2">
                    <PlayIcon className="h-4 w-4" /> Generate
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-8 border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Generated Output</CardTitle>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Copy className="h-4 w-4" /> Copy
                    </Button>
                  </div>
                  <CardDescription>Your generated content will appear here</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-4 min-h-[500px] font-mono text-sm overflow-auto">
                    <pre>{`# Business Requirements Document: Employee Onboarding System

## 1. Executive Summary
This document outlines the business requirements for a new Employee Onboarding System designed to streamline the process of integrating new employees into the organization. The system aims to improve efficiency, ensure compliance, and enhance the overall experience for new hires.

## 2. Project Stakeholders
- Human Resources Department
- IT Department
- Department Managers
- New Employees
- Executive Leadership

## 3. Business Objectives
- Reduce onboarding time by 40% 
- Ensure 100% compliance with regulatory requirements
- Improve new hire satisfaction and engagement
- Decrease administrative burden on HR staff
- Standardize onboarding across departments

## 4. Current Process Analysis
The current onboarding process is largely manual and paper-based, resulting in:
- Inconsistent employee experiences
- Delayed access to systems and resources
- Excessive administrative work
- Difficulty tracking completion of onboarding tasks
- Poor visibility into process bottlenecks

## 5. Functional Requirements

### 5.1 Pre-Boarding Module
- Self-service portal for new hires to complete paperwork before day one
- Document collection and verification
- Welcome communication capabilities
- Company information sharing

### 5.2 First Day Management
- Automated equipment and access provisioning
- New hire checklist generation
- Welcome kit preparation alerts
- Workspace readiness confirmation

### 5.3 Training Management
- Required training assignment based on role
- Progress tracking and reporting
- Integration with existing LMS
- Certification documentation

### 5.4 Task Assignment and Workflow
- Configurable workflows by department and role
- Task assignment to relevant departments
- Due date tracking and reminders
- Escalation procedures for delayed tasks

### 5.5 Reporting and Analytics
- Onboarding efficiency metrics
- Compliance reporting
- Time-to-productivity tracking
- Process bottleneck identification

## 6. Non-Functional Requirements
- Security: SOC 2 compliance, role-based access control
- Performance: Support for 50 concurrent users
- Availability: 99.9% uptime during business hours
- Scalability: Support for 500 new hires per month

## 7. Integration Requirements
- HRIS system integration
- Single Sign-On (SSO)
- Email and calendar systems
- IT ticketing system
- Document management system

## 8. User Stories
15 user stories have been generated and can be exported to JIRA.

## 9. Test Cases
32 test cases have been generated covering all major functionality.`}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
