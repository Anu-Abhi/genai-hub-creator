import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Brain, Code, FileText, Image, Zap, Star, Info } from "lucide-react";

const Models = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <section className="bg-muted/30 py-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">AI Models</h1>
                <p className="text-lg text-muted-foreground">Discover and use our specialized AI models for development</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search models..."
                    className="pl-8 w-full md:w-[200px] lg:w-[300px]"
                  />
                </div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8 flex flex-wrap">
                <TabsTrigger value="all">All Models</TabsTrigger>
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
              
              <TabsContent value="all" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {/* Code Models */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">CodeWizard</CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Popular
                        </Badge>
                      </div>
                      <CardDescription>v2.5 • Code Generation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Specialized for code generation and understanding programming concepts.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">Code Generation</Badge>
                        <Badge variant="outline" className="text-xs">Debugging</Badge>
                        <Badge variant="outline" className="text-xs">Refactoring</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.8</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Fast</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">FullStackGenius</CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Popular
                        </Badge>
                      </div>
                      <CardDescription>v3.0 • Full-Stack Development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">End-to-end development assistance for full-stack applications.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">Frontend</Badge>
                        <Badge variant="outline" className="text-xs">Backend</Badge>
                        <Badge variant="outline" className="text-xs">Database</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.9</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Medium</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Text Models */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">DocuMentor</CardTitle>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                          New
                        </Badge>
                      </div>
                      <CardDescription>v1.8 • Documentation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Create comprehensive documentation from code bases automatically.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">Documentation</Badge>
                        <Badge variant="outline" className="text-xs">Technical Writing</Badge>
                        <Badge variant="outline" className="text-xs">API Docs</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.6</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Medium</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Testing Models */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">TestCraftAI</CardTitle>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                          New
                        </Badge>
                      </div>
                      <CardDescription>v2.1 • Testing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Generate comprehensive test suites for your application.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">Unit Tests</Badge>
                        <Badge variant="outline" className="text-xs">Integration Tests</Badge>
                        <Badge variant="outline" className="text-xs">QA</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.7</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Fast</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* More models... */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">APIBuilder</CardTitle>
                      </div>
                      <CardDescription>v1.5 • Backend Development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Generate RESTful and GraphQL APIs from plain text descriptions.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">APIs</Badge>
                        <Badge variant="outline" className="text-xs">REST</Badge>
                        <Badge variant="outline" className="text-xs">GraphQL</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.5</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Medium</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">UIDesigner</CardTitle>
                      </div>
                      <CardDescription>v2.0 • Frontend Design</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Transform mockups and wireframes into responsive UI code.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">UI/UX</Badge>
                        <Badge variant="outline" className="text-xs">CSS</Badge>
                        <Badge variant="outline" className="text-xs">React</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.6</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Medium</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="code" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {/* Code models only - would duplicate some cards here */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">CodeWizard</CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Popular
                        </Badge>
                      </div>
                      <CardDescription>v2.5 • Code Generation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Specialized for code generation and understanding programming concepts.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">Code Generation</Badge>
                        <Badge variant="outline" className="text-xs">Debugging</Badge>
                        <Badge variant="outline" className="text-xs">Refactoring</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.8</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Fast</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">FullStackGenius</CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Popular
                        </Badge>
                      </div>
                      <CardDescription>v3.0 • Full-Stack Development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">End-to-end development assistance for full-stack applications.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">Frontend</Badge>
                        <Badge variant="outline" className="text-xs">Backend</Badge>
                        <Badge variant="outline" className="text-xs">Database</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.9</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Medium</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Other tab contents would be similar */}
              <TabsContent value="text" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">DocuMentor</CardTitle>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                          New
                        </Badge>
                      </div>
                      <CardDescription>v1.8 • Documentation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Create comprehensive documentation from code bases automatically.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">Documentation</Badge>
                        <Badge variant="outline" className="text-xs">Technical Writing</Badge>
                        <Badge variant="outline" className="text-xs">API Docs</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>4.6</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-secondary" />
                          <span>Medium</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="default" className="w-full">Try Model</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="image" className="mt-0">
                <div className="p-8 text-center">
                  <Brain className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Image Models Coming Soon</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We're working on adding image generation models to our platform. Join the waitlist to be notified when they're available.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Models;
