
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { FileText, Code, ClipboardList, LightbulbIcon, Zap, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tools = [
  {
    icon: LightbulbIcon,
    title: 'Story Telling',
    description: 'Automatically summarize lengthy notes and distill key points for creating the BRD and thereafter the user stories directly in Jira.',
    image: '/lovable-uploads/d4297b7a-a3c3-4413-b7f2-df2eb557e80e.png',
    persona: 'Business Analysts'
  },
  {
    icon: Code,
    title: 'CodEYfi',
    description: 'Generate documentation from a code while mapping the dependencies to understand the existing system better.',
    image: '/lovable-uploads/d4297b7a-a3c3-4413-b7f2-df2eb557e80e.png',
    persona: 'Developers'
  },
  {
    icon: ClipboardList,
    title: 'TestEYfi',
    description: 'Generate functional test cases for your user stories and BRD on the click of a button to ensure comprehensive coverage.',
    image: '/lovable-uploads/d4297b7a-a3c3-4413-b7f2-df2eb557e80e.png',
    persona: 'QA Engineers'
  },
  {
    icon: FileText,
    title: 'BRD Generation',
    description: 'Generate comprehensive Business Requirement Documents from team recordings, meetings, or existing system analysis.',
    persona: 'Business Analysts'
  },
  {
    icon: Zap,
    title: 'JIRA Integration',
    description: 'Seamlessly push generated user stories, tasks, and epics to JIRA to keep your project management tool up to date.',
    persona: 'Project Managers'
  },
  {
    icon: Brain,
    title: 'Cross-Role Collaboration',
    description: 'Facilitate collaboration between business analysts, developers, QA engineers, and stakeholders with AI-powered tools.',
    persona: 'All Team Members'
  }
];

const personas = [
  'All Personas',
  'Business Analysts',
  'Developers',
  'QA Engineers',
  'Project Managers'
];

const FeaturesSection = () => {
  const [selectedPersona, setSelectedPersona] = React.useState('All Personas');
  
  // Filter features based on selected persona
  const filteredTools = selectedPersona === 'All Personas' 
    ? tools
    : tools.filter(tool => tool.persona === selectedPersona);

  // Show only the first 3 tools for the main highlight cards
  const mainTools = filteredTools.slice(0, 3);

  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Welcome to Modern <span className="gradient-text">Workspace</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Empower your software development capabilities with AI-powered tools for every team member
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            {personas.map((persona) => (
              <button
                key={persona}
                onClick={() => setSelectedPersona(persona)}
                className={`inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  selectedPersona === persona
                    ? 'bg-background text-foreground shadow-sm'
                    : 'hover:bg-background/40'
                }`}
              >
                {persona}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainTools.map((tool, index) => (
            <Card 
              key={index} 
              className="border bg-card transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {tool.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={tool.image} 
                    alt={tool.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <div className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                  {tool.persona}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{tool.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="secondary">
                  Try Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredTools.length > 3 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.slice(3).map((tool, index) => (
              <Card 
                key={index + 3} 
                className="border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <div className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                    {tool.persona}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{tool.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Try Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            The EY Modern Workspace is proprietary and confidential. For internal use only. All Rights Reserved.
          </p>
          <a 
            href="/privacy" 
            className="inline-flex items-center text-primary text-sm font-medium hover:underline"
          >
            Privacy Statement
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
