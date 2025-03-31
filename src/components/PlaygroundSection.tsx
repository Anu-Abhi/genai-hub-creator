
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Users, ClipboardList, GitCompare } from 'lucide-react';

const PlaygroundSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive SDLC Workspace</h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Experience AI-powered tools for every phase of your software development lifecycle. Generate requirements, create user stories, and build test cases in real-time.
          </p>
        </div>
        
        <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-6 border-b lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium">Try it yourself</h3>
                <Button size="sm" variant="outline" className="gap-1">
                  Generate
                </Button>
              </div>
              
              <Tabs defaultValue="brd" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="brd" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" /> BRD
                  </TabsTrigger>
                  <TabsTrigger value="stories" className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> User Stories
                  </TabsTrigger>
                  <TabsTrigger value="tests" className="flex items-center gap-1">
                    <ClipboardList className="h-4 w-4" /> Test Cases
                  </TabsTrigger>
                  <TabsTrigger value="reverse" className="flex items-center gap-1">
                    <GitCompare className="h-4 w-4" /> Reverse Eng.
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="brd" className="mt-0">
                  <div className="rounded-md border bg-muted/50 p-4">
                    <textarea 
                      className="w-full h-32 bg-transparent resize-none focus:outline-none" 
                      placeholder="Upload a meeting recording or describe the system requirements here... (e.g., 'Create a BRD for a customer relationship management system')"
                    ></textarea>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Model:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>RequirementsPro v2.5</option>
                          <option>BRDMaster v3.0</option>
                          <option>AnalystAI v2.1</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Format:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>Detailed</option>
                          <option>Executive</option>
                          <option>Technical</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="stories" className="mt-0">
                  <div className="rounded-md border bg-muted/50 p-4">
                    <textarea 
                      className="w-full h-32 bg-transparent resize-none focus:outline-none" 
                      placeholder="Enter your requirements or BRD summary to generate user stories... (e.g., 'Generate user stories for a customer onboarding process')"
                    ></textarea>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Model:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>StoryCreator v1.8</option>
                          <option>AgileGenius v2.2</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Format:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>JIRA Ready</option>
                          <option>Detailed</option>
                          <option>Agile Format</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tests" className="mt-0">
                  <div className="rounded-md border bg-muted/50 p-4">
                    <textarea 
                      className="w-full h-32 bg-transparent resize-none focus:outline-none" 
                      placeholder="Enter user stories or requirements to generate test cases... (e.g., 'Generate test cases for user authentication and password reset')"
                    ></textarea>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Model:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>TestCraft v1.2</option>
                          <option>QAGenius v2.0</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Type:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>Functional</option>
                          <option>Integration</option>
                          <option>UI/UX</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reverse" className="mt-0">
                  <div className="rounded-md border bg-muted/50 p-4">
                    <textarea 
                      className="w-full h-32 bg-transparent resize-none focus:outline-none" 
                      placeholder="Paste code snippets or describe an existing system to generate a BRD through reverse engineering..."
                    ></textarea>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Model:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>CodeToDoc v1.2</option>
                          <option>ReverseEngineer v2.0</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Output:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>Business Requirements</option>
                          <option>Technical Specs</option>
                          <option>System Overview</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:w-1/2 p-6 bg-sidebar text-sidebar-foreground flex flex-col">
              <h3 className="text-xl font-medium mb-4">Generated Content</h3>
              
              <div className="flex-grow rounded-md p-4 text-sm font-mono overflow-auto bg-sidebar-accent text-sidebar-accent-foreground">
                <pre>{`# Business Requirements Document: CRM System

## 1. Introduction
This document outlines the business requirements for a new Customer Relationship Management (CRM) system designed to enhance customer interaction and streamline sales processes.

## 2. Stakeholders
- Sales Department
- Marketing Team
- Customer Support
- Executive Leadership

## 3. Business Objectives
- Improve customer retention by 15%
- Reduce sales cycle time by 25%
- Consolidate customer interaction data
- Enable data-driven marketing decisions

## 4. Functional Requirements
1. Contact Management
   - Store customer profiles with contact history
   - Segment customers by various attributes
   - Track relationship history
   
2. Sales Pipeline Management
   - Visual representation of sales stages
   - Deal tracking and forecasting
   - Automated follow-up reminders

3. Reporting & Analytics
   - Customizable dashboards
   - Performance reports by rep, region, product
   - Trend analysis for decision support

## 5. Integration Requirements
- Email system integration
- Marketing automation tools
- Support ticket system
- ERP and accounting software

## 6. User Stories Generated: 15
## 7. Test Cases Generated: 32`}</pre>
              </div>
              
              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm">Copy</Button>
                <Button variant="secondary" size="sm">Export to JIRA</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button asChild className="gap-2">
            <Link to="/playground">
              Open Full Workspace <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
