
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
import { PlayIcon, Code, FileText, Image, Save, Download, Copy } from "lucide-react";

const Playground = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <section className="py-8 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">AI Playground</h1>
                <p className="text-lg text-muted-foreground">
                  Test and experiment with our AI models in real-time
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
                  <CardTitle>Model Selection</CardTitle>
                  <CardDescription>Choose the AI model and configure settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Tabs defaultValue="code" className="w-full">
                      <TabsList className="w-full">
                        <TabsTrigger value="code" className="flex-1 gap-1">
                          <Code className="h-4 w-4" /> Code
                        </TabsTrigger>
                        <TabsTrigger value="text" className="flex-1 gap-1">
                          <FileText className="h-4 w-4" /> Text
                        </TabsTrigger>
                        <TabsTrigger value="image" className="flex-1 gap-1">
                          <Image className="h-4 w-4" /> Image
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Model</label>
                    <Select defaultValue="codewizard">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="codewizard">CodeWizard v2.5</SelectItem>
                        <SelectItem value="fullstack">FullStackGenius v3.0</SelectItem>
                        <SelectItem value="testcraft">TestCraftAI v2.1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Language</label>
                    <Select defaultValue="typescript">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="typescript">TypeScript</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="csharp">C#</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Parameters</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs text-muted-foreground">Temperature</label>
                        <Select defaultValue="0.7">
                          <SelectTrigger>
                            <SelectValue placeholder="Temperature" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0.3">0.3 (More focused)</SelectItem>
                            <SelectItem value="0.5">0.5</SelectItem>
                            <SelectItem value="0.7">0.7 (Balanced)</SelectItem>
                            <SelectItem value="0.9">0.9</SelectItem>
                            <SelectItem value="1.0">1.0 (More creative)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-muted-foreground">Max Tokens</label>
                        <Select defaultValue="2048">
                          <SelectTrigger>
                            <SelectValue placeholder="Max tokens" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1024">1024</SelectItem>
                            <SelectItem value="2048">2048</SelectItem>
                            <SelectItem value="4096">4096</SelectItem>
                            <SelectItem value="8192">8192</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Prompt</label>
                    <textarea 
                      className="w-full h-40 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your prompt here... (e.g., 'Create a React function to fetch and display user data from an API')"
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
                    <CardTitle>Results</CardTitle>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Copy className="h-4 w-4" /> Copy
                    </Button>
                  </div>
                  <CardDescription>The generated output will appear here</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-4 min-h-[500px] font-mono text-sm overflow-auto">
                    <pre>{`// Generated React component to fetch and display user data
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Spinner } from './ui/spinner';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const UserDisplay = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{user.email}</p>
            <p className="text-sm text-muted-foreground">
              Role: {user.role}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};`}</pre>
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
