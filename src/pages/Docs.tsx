
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Book, Code, GitBranch, ArrowRight, FileText, Terminal } from "lucide-react";

const Docs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <section className="py-10 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Documentation</h1>
                <p className="text-lg text-muted-foreground">
                  Learn how to integrate and use our GenAI capabilities in your projects
                </p>
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="pl-8 w-full md:w-[300px]"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <Card className="sticky top-20">
                  <CardHeader className="pb-2">
                    <CardTitle>Contents</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex flex-col space-y-1">
                      <Button variant="ghost" className="justify-start gap-2">
                        <Book className="h-4 w-4" /> Getting Started
                      </Button>
                      <Button variant="ghost" className="justify-start gap-2">
                        <Code className="h-4 w-4" /> API Reference
                      </Button>
                      <Button variant="ghost" className="justify-start gap-2">
                        <Terminal className="h-4 w-4" /> SDK Documentation
                      </Button>
                      <Button variant="ghost" className="justify-start gap-2">
                        <FileText className="h-4 w-4" /> Tutorials
                      </Button>
                      <Button variant="ghost" className="justify-start gap-2">
                        <GitBranch className="h-4 w-4" /> Examples
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-9">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started with GenAI Hub</CardTitle>
                    <CardDescription>
                      A complete guide to integrating GenAI capabilities into your development workflow
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="quickstart" className="w-full">
                      <TabsList className="mb-6">
                        <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                        <TabsTrigger value="installation">Installation</TabsTrigger>
                        <TabsTrigger value="configuration">Configuration</TabsTrigger>
                        <TabsTrigger value="usage">Basic Usage</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="quickstart" className="mt-0">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-medium mb-2">Quick Start Guide</h3>
                            <p className="text-muted-foreground mb-4">
                              Get up and running with GenAI Hub in just a few minutes.
                            </p>
                            
                            <div className="space-y-4">
                              <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                  1
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium mb-1">Sign up for an account</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Create an account on the GenAI Hub platform to get your API key.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                  2
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium mb-1">Install the SDK</h4>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Add the GenAI Hub SDK to your project using npm, yarn, or pnpm.
                                  </p>
                                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-3 font-mono text-sm">
                                    <code>npm install @genai-hub/sdk</code>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                  3
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium mb-1">Initialize the SDK</h4>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Configure the SDK with your API key.
                                  </p>
                                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-3 font-mono text-sm">
                                    <code>{`import { GenAIHub } from '@genai-hub/sdk';

// Initialize the SDK
const genAI = new GenAIHub({
  apiKey: 'your-api-key',
});`}</code>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                  4
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium mb-1">Generate your first code</h4>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Use the SDK to generate code with the CodeWizard model.
                                  </p>
                                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-3 font-mono text-sm">
                                    <code>{`// Generate code
const result = await genAI.generateCode({
  model: 'codewizard-v2',
  prompt: 'Create a React button component with hover effects',
  language: 'typescript',
});

console.log(result.code);`}</code>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-medium mb-2">Next Steps</h3>
                            <p className="text-muted-foreground mb-4">
                              Once you've got the basics working, you can explore our more advanced features.
                            </p>
                            
                            <div className="grid gap-4 md:grid-cols-2">
                              <Card className="border bg-card">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base">Explore Models</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-2">
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Discover all the specialized AI models available for different tasks.
                                  </p>
                                  <Button variant="link" className="p-0 h-auto gap-1 text-primary">
                                    View Model Catalog <ArrowRight className="h-3 w-3" />
                                  </Button>
                                </CardContent>
                              </Card>
                              
                              <Card className="border bg-card">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base">Sample Projects</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-2">
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Check out example projects that showcase integration patterns.
                                  </p>
                                  <Button variant="link" className="p-0 h-auto gap-1 text-primary">
                                    Browse Examples <ArrowRight className="h-3 w-3" />
                                  </Button>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="installation" className="mt-0">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-medium mb-2">Installation</h3>
                            <p className="text-muted-foreground mb-4">
                              Install the GenAI Hub SDK in your project.
                            </p>
                            
                            <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value="npm">
                                <AccordionTrigger>NPM</AccordionTrigger>
                                <AccordionContent>
                                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-3 font-mono text-sm">
                                    <code>npm install @genai-hub/sdk</code>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="yarn">
                                <AccordionTrigger>Yarn</AccordionTrigger>
                                <AccordionContent>
                                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-3 font-mono text-sm">
                                    <code>yarn add @genai-hub/sdk</code>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="pnpm">
                                <AccordionTrigger>PNPM</AccordionTrigger>
                                <AccordionContent>
                                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-3 font-mono text-sm">
                                    <code>pnpm add @genai-hub/sdk</code>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="cdn">
                                <AccordionTrigger>CDN</AccordionTrigger>
                                <AccordionContent>
                                  <div className="bg-sidebar text-sidebar-foreground rounded-md p-3 font-mono text-sm">
                                    <code>{`<script src="https://cdn.genai-hub.com/sdk@latest/dist/genai-hub.min.js"></script>`}</code>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        </div>
                      </TabsContent>
                      
                      {/* Configuration tab content */}
                      <TabsContent value="configuration" className="mt-0">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-medium mb-2">Configuration Options</h3>
                            <p className="text-muted-foreground mb-4">
                              Learn about all the configuration options available when initializing the SDK.
                            </p>
                            
                            <div className="bg-sidebar text-sidebar-foreground rounded-md p-4 font-mono text-sm mb-4">
                              <code>{`import { GenAIHub } from '@genai-hub/sdk';

// Initialize with all configuration options
const genAI = new GenAIHub({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.genai-hub.com', // optional, for using custom endpoints
  version: 'v1', // API version
  timeout: 30000, // request timeout in ms
  debug: false, // enable debug logging
});`}</code>
                            </div>
                            
                            <h4 className="font-medium mb-2">Configuration Reference</h4>
                            <div className="border rounded-md overflow-hidden">
                              <table className="w-full">
                                <thead className="bg-muted">
                                  <tr>
                                    <th className="px-4 py-2 text-left text-sm font-medium">Option</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium">Type</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium">Default</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium">Description</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y">
                                  <tr>
                                    <td className="px-4 py-2 text-sm font-mono">apiKey</td>
                                    <td className="px-4 py-2 text-sm">string</td>
                                    <td className="px-4 py-2 text-sm">-</td>
                                    <td className="px-4 py-2 text-sm">Your API key (required)</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 text-sm font-mono">baseUrl</td>
                                    <td className="px-4 py-2 text-sm">string</td>
                                    <td className="px-4 py-2 text-sm text-muted-foreground">https://api.genai-hub.com</td>
                                    <td className="px-4 py-2 text-sm">API base URL</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 text-sm font-mono">version</td>
                                    <td className="px-4 py-2 text-sm">string</td>
                                    <td className="px-4 py-2 text-sm text-muted-foreground">v1</td>
                                    <td className="px-4 py-2 text-sm">API version to use</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 text-sm font-mono">timeout</td>
                                    <td className="px-4 py-2 text-sm">number</td>
                                    <td className="px-4 py-2 text-sm text-muted-foreground">30000</td>
                                    <td className="px-4 py-2 text-sm">Request timeout in milliseconds</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 text-sm font-mono">debug</td>
                                    <td className="px-4 py-2 text-sm">boolean</td>
                                    <td className="px-4 py-2 text-sm text-muted-foreground">false</td>
                                    <td className="px-4 py-2 text-sm">Enable debug logging</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      {/* Usage tab content */}
                      <TabsContent value="usage" className="mt-0">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-medium mb-2">Basic Usage</h3>
                            <p className="text-muted-foreground mb-4">
                              Learn how to use the core features of the GenAI Hub SDK.
                            </p>
                            
                            <h4 className="font-medium mb-2">Code Generation</h4>
                            <div className="bg-sidebar text-sidebar-foreground rounded-md p-4 font-mono text-sm mb-6">
                              <code>{`// Generate code with the CodeWizard model
const result = await genAI.generateCode({
  model: 'codewizard-v2',
  prompt: 'Create a React button component with hover effects',
  language: 'typescript',
  framework: 'react',
});

console.log(result.code);`}</code>
                            </div>
                            
                            <h4 className="font-medium mb-2">Documentation Generation</h4>
                            <div className="bg-sidebar text-sidebar-foreground rounded-md p-4 font-mono text-sm mb-6">
                              <code>{`// Generate documentation from code
const docs = await genAI.generateDocumentation({
  model: 'documentor-v1',
  code: mySourceCode,
  language: 'typescript',
  format: 'markdown',
});

console.log(docs.content);`}</code>
                            </div>
                            
                            <h4 className="font-medium mb-2">Code Explanation</h4>
                            <div className="bg-sidebar text-sidebar-foreground rounded-md p-4 font-mono text-sm">
                              <code>{`// Explain complex code
const explanation = await genAI.explainCode({
  model: 'codewizard-v2',
  code: complexCode,
  detailLevel: 'detailed',
});

console.log(explanation.explanation);`}</code>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
