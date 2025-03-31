
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayIcon, Code, FileText, Image } from 'lucide-react';

const PlaygroundSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive AI Playground</h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Experiment with our AI models in real-time. Test different prompts, adjust parameters, and see the results instantly.
          </p>
        </div>
        
        <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-6 border-b lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium">Try it yourself</h3>
                <Button size="sm" variant="outline" className="gap-1">
                  <PlayIcon className="h-4 w-4" /> Run
                </Button>
              </div>
              
              <Tabs defaultValue="code" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="code" className="flex items-center gap-1">
                    <Code className="h-4 w-4" /> Code
                  </TabsTrigger>
                  <TabsTrigger value="text" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" /> Text
                  </TabsTrigger>
                  <TabsTrigger value="image" className="flex items-center gap-1">
                    <Image className="h-4 w-4" /> Image
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="code" className="mt-0">
                  <div className="rounded-md border bg-muted/50 p-4">
                    <textarea 
                      className="w-full h-32 bg-transparent resize-none focus:outline-none" 
                      placeholder="Enter your prompt here... (e.g., 'Create a React function to fetch and display user data from an API')"
                    ></textarea>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Model:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>CodeWizard v2.5</option>
                          <option>FullStackGenius v3.0</option>
                          <option>TestCraftAI v2.1</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Language:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>TypeScript</option>
                          <option>JavaScript</option>
                          <option>Python</option>
                          <option>Java</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="text" className="mt-0">
                  <div className="rounded-md border bg-muted/50 p-4">
                    <textarea 
                      className="w-full h-32 bg-transparent resize-none focus:outline-none" 
                      placeholder="Enter your prompt here... (e.g., 'Write documentation for a RESTful API that manages user authentication')"
                    ></textarea>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Model:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>DocuMentor v1.8</option>
                          <option>TextGenius v2.2</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Style:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>Technical</option>
                          <option>Tutorial</option>
                          <option>Reference</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="image" className="mt-0">
                  <div className="rounded-md border bg-muted/50 p-4">
                    <textarea 
                      className="w-full h-32 bg-transparent resize-none focus:outline-none" 
                      placeholder="Describe the image you want to generate... (e.g., 'A modern web application dashboard with dark mode UI')"
                    ></textarea>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Model:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>VisionCraft v1.2</option>
                          <option>UIDreamer v2.0</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center text-sm gap-2">
                        <label className="text-muted-foreground">Style:</label>
                        <select className="bg-background border rounded px-2 py-1 text-sm">
                          <option>UI Design</option>
                          <option>Mockup</option>
                          <option>Wireframe</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:w-1/2 p-6 bg-sidebar text-sidebar-foreground flex flex-col">
              <h3 className="text-xl font-medium mb-4">Results</h3>
              
              <div className="flex-grow rounded-md p-4 text-sm font-mono overflow-auto bg-sidebar-accent text-sidebar-accent-foreground">
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
              
              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm">Copy</Button>
                <Button variant="secondary" size="sm">Save to Collection</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button asChild className="gap-2">
            <Link to="/playground">
              Open Full Playground <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;
