
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, MessageSquare, Send, RefreshCw, CheckCircle, FileUp } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const BrdGenerator = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [brdContent, setBrdContent] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    stakeholders: "",
    timeline: "",
  });
  const [userStories, setUserStories] = useState<string[]>([]);
  const [jiraApiKey, setJiraApiKey] = useState("");
  const [jiraUrl, setJiraUrl] = useState("");
  const [jiraProject, setJiraProject] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const uploadRecording = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a Teams recording file to upload",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    // Simulate file upload and transcription
    await new Promise((resolve) => setTimeout(resolve, 2500));
    
    // Mock project details extraction
    const mockProjectDetails = {
      title: "Sales Portal Modernization",
      description: "Replace the legacy sales portal with a modern, responsive solution that improves user experience and integrates with our new CRM system.",
      stakeholders: "Sales team, IT department, Marketing, Customer Success",
      timeline: "Q1 2025 - Q3 2025",
    };
    
    setProjectDetails(mockProjectDetails);
    setIsUploading(false);
    setActiveTab("details");
    
    toast({
      title: "Upload complete",
      description: "Teams recording successfully processed and project details extracted",
    });
  };

  const generateBRD = async () => {
    setIsGenerating(true);
    // Simulate BRD generation
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const mockBRD = `# Business Requirements Document
## Project: ${projectDetails.title}

### Executive Summary
${projectDetails.description}

### Stakeholders
${projectDetails.stakeholders}

### Project Timeline
${projectDetails.timeline}

### Business Objectives
1. Improve sales team efficiency by 20%
2. Reduce customer onboarding time by 30%
3. Increase data accuracy and reporting capabilities
4. Support mobile access for field sales representatives

### Functional Requirements
1. User authentication and role-based access control
2. Customer data management and search functionality
3. Sales pipeline visualization and tracking
4. Quote generation and approval workflow
5. Integration with existing CRM and ERP systems
6. Mobile-responsive design for field sales representatives
7. Automated email notifications for key sales activities
8. Dashboard with customizable KPIs and metrics

### Non-Functional Requirements
1. 99.9% system availability during business hours
2. Response time under 2 seconds for all primary functions
3. Compliance with GDPR and relevant data protection regulations
4. Secure data transmission and storage (encryption in transit and at rest)
5. Support for minimum 1,000 concurrent users

### Out of Scope
1. Integration with legacy accounting systems
2. Hardware procurement for end-users
3. Training curriculum development (though basic training documents will be provided)`;

    setBrdContent(mockBRD);
    setChatHistory([
      { role: "system", content: "BRD has been generated based on your Teams meeting recording. You can ask questions or request edits." }
    ]);
    
    setIsGenerating(false);
    setActiveTab("brd");
    
    toast({
      title: "BRD Generated",
      description: "Business Requirements Document has been created",
    });
  };

  const sendChatMessage = async () => {
    if (!chatMessage.trim()) return;
    
    const userMessage = { role: "user", content: chatMessage };
    setChatHistory(prev => [...prev, userMessage]);
    setChatMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        role: "system", 
        content: "I've updated the BRD based on your feedback. The changes have been applied to the document." 
      };
      setChatHistory(prev => [...prev, aiResponse]);
      
      // Simulate the BRD being updated based on the chat
      if (chatMessage.toLowerCase().includes("add security requirement")) {
        setBrdContent(prev => prev + "\n\n### Security Requirements\n1. Multi-factor authentication for all users\n2. Role-based access control\n3. Regular security audits\n4. Encryption of sensitive data");
      }
    }, 1000);
  };

  const generateUserStories = async () => {
    setIsGenerating(true);
    // Simulate user stories generation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const mockUserStories = [
      "As a sales representative, I want to quickly search for customer details, so that I can retrieve their information during calls.",
      "As a sales manager, I want to visualize the team's sales pipeline, so that I can track progress and forecast revenue.",
      "As a field sales agent, I want to access customer information on mobile devices, so that I can update details while out of office.",
      "As an account executive, I want to generate quotes automatically, so that I can send them to clients without delays.",
      "As a sales director, I want customizable dashboards for sales metrics, so that I can monitor team performance at a glance."
    ];
    
    setUserStories(mockUserStories);
    setIsGenerating(false);
    setActiveTab("stories");
    
    toast({
      title: "User Stories Generated",
      description: "Created 5 user stories from the BRD",
    });
  };

  const pushToJira = async () => {
    if (!jiraApiKey || !jiraUrl || !jiraProject) {
      toast({
        title: "Missing JIRA details",
        description: "Please provide JIRA API key, URL and project key",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    // Simulate pushing to JIRA
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsGenerating(false);
    
    toast({
      title: "Success!",
      description: "User stories have been pushed to JIRA successfully",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">BRD Generator</h1>
        <p className="text-muted-foreground mb-8">
          Generate comprehensive Business Requirement Documents from Teams meeting recordings and convert them to user stories
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="upload">
              <Upload className="mr-2 h-4 w-4" /> Upload Recording
            </TabsTrigger>
            <TabsTrigger value="details">
              <FileText className="mr-2 h-4 w-4" /> Project Details
            </TabsTrigger>
            <TabsTrigger value="brd">
              <MessageSquare className="mr-2 h-4 w-4" /> BRD Collaboration
            </TabsTrigger>
            <TabsTrigger value="stories">
              <CheckCircle className="mr-2 h-4 w-4" /> User Stories
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Teams Meeting Recording</CardTitle>
                <CardDescription>
                  Upload your Teams meeting recording to extract project details and generate a BRD
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed rounded-lg p-6 text-center bg-muted/30">
                  <FileUp className="mx-auto h-8 w-8 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag and drop your recording file, or click to browse
                  </p>
                  <Input 
                    id="file-upload" 
                    type="file" 
                    accept=".mp4,.mp3,.wav" 
                    className="hidden" 
                    onChange={handleFileChange} 
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="mt-4 cursor-pointer">
                      Select file
                    </Button>
                  </label>
                  {selectedFile && (
                    <p className="mt-2 text-sm">Selected: {selectedFile.name}</p>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={uploadRecording} disabled={!selectedFile || isUploading}>
                  {isUploading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Upload and Process"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Extracted Project Details</CardTitle>
                <CardDescription>
                  Review the project details extracted from your Teams meeting recording
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Project Title</h3>
                  <Input 
                    value={projectDetails.title} 
                    onChange={(e) => setProjectDetails({...projectDetails, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Description</h3>
                  <Textarea 
                    value={projectDetails.description} 
                    onChange={(e) => setProjectDetails({...projectDetails, description: e.target.value})}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Stakeholders</h3>
                  <Input 
                    value={projectDetails.stakeholders} 
                    onChange={(e) => setProjectDetails({...projectDetails, stakeholders: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Timeline</h3>
                  <Input 
                    value={projectDetails.timeline} 
                    onChange={(e) => setProjectDetails({...projectDetails, timeline: e.target.value})}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={generateBRD} disabled={isGenerating || !projectDetails.title || !projectDetails.description}>
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate BRD"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="brd">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="h-[700px] flex flex-col">
                <CardHeader>
                  <CardTitle>Business Requirements Document</CardTitle>
                  <CardDescription>
                    Edit the generated BRD directly or use the chat to make changes
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto">
                  <Textarea 
                    value={brdContent} 
                    onChange={(e) => setBrdContent(e.target.value)}
                    className="min-h-full"
                  />
                </CardContent>
                <CardFooter>
                  <Button onClick={generateUserStories}>
                    Generate User Stories
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="h-[700px] flex flex-col">
                <CardHeader>
                  <CardTitle>Collaborative Editing</CardTitle>
                  <CardDescription>
                    Chat with AI to refine and improve your BRD
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto">
                  <div className="space-y-4">
                    {chatHistory.map((message, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg ${
                          message.role === "user" 
                            ? "bg-primary text-primary-foreground ml-10" 
                            : "bg-muted mr-10"
                        }`}
                      >
                        {message.content}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Textarea
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Ask a question or request an edit..."
                    className="flex-grow resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendChatMessage();
                      }
                    }}
                  />
                  <Button size="icon" onClick={sendChatMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="stories">
            <Card>
              <CardHeader>
                <CardTitle>Generated User Stories</CardTitle>
                <CardDescription>
                  Review, edit and push user stories to JIRA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {userStories.map((story, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="font-medium">User Story #{index + 1}</h3>
                    <Textarea 
                      value={story} 
                      onChange={(e) => {
                        const newStories = [...userStories];
                        newStories[index] = e.target.value;
                        setUserStories(newStories);
                      }}
                      rows={2}
                    />
                  </div>
                ))}
                
                <div className="border-t pt-4 mt-6">
                  <h3 className="font-medium mb-4">JIRA Integration</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">JIRA URL</label>
                      <Input 
                        placeholder="https://your-company.atlassian.net" 
                        value={jiraUrl} 
                        onChange={(e) => setJiraUrl(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">JIRA API Key</label>
                      <Input 
                        type="password" 
                        placeholder="Your JIRA API key" 
                        value={jiraApiKey} 
                        onChange={(e) => setJiraApiKey(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">JIRA Project Key</label>
                      <Input 
                        placeholder="e.g., SPM" 
                        value={jiraProject} 
                        onChange={(e) => setJiraProject(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={pushToJira} disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Pushing to JIRA...
                    </>
                  ) : (
                    "Push to JIRA"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default BrdGenerator;
