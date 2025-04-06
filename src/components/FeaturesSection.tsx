
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, ClipboardList, GitCompare, Database, Brain } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: FileText,
    title: 'BRD Generation',
    description: 'Generate comprehensive Business Requirement Documents from team recordings, meetings, or existing system analysis.',
    persona: 'Business Analysts',
    link: '/brd-generator'
  },
  {
    icon: Users,
    title: 'User Story Creation',
    description: 'Automatically transform requirements into well-structured user stories following best practices for agile development.',
    persona: 'Product Owners',
    link: '/playground'
  },
  {
    icon: ClipboardList,
    title: 'Test Case Generation',
    description: 'Create test cases and testing scenarios directly from requirements and user stories for comprehensive QA coverage.',
    persona: 'QA Engineers',
    link: '/playground'
  },
  {
    icon: GitCompare,
    title: 'Reverse Engineering',
    description: 'Extract business requirements and logic from existing code to build documentation for legacy systems.',
    persona: 'Developers',
    link: '/playground'
  },
  {
    icon: Database,
    title: 'JIRA Integration',
    description: 'Seamlessly push generated user stories, tasks, and epics to JIRA to keep your project management tool up to date.',
    persona: 'Project Managers',
    link: '/brd-generator'
  },
  {
    icon: Brain,
    title: 'Cross-Role Collaboration',
    description: 'Facilitate collaboration between business analysts, developers, QA engineers, and stakeholders with AI-powered tools.',
    persona: 'All Team Members',
    link: '/playground'
  }
];

const personas = [
  'All Personas',
  'Business Analysts',
  'Product Owners',
  'Developers',
  'QA Engineers',
  'Project Managers'
];

const FeaturesSection = () => {
  const [selectedPersona, setSelectedPersona] = React.useState('All Personas');
  const navigate = useNavigate();
  
  // Filter features based on selected persona
  const filteredFeatures = selectedPersona === 'All Personas' 
    ? features 
    : features.filter(feature => feature.persona === selectedPersona);

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            AI-Powered Tools for the <span className="gradient-text">Entire SDLC Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Streamline your software development lifecycle with specialized tools designed for every team member, 
            from business analysts to developers and QA engineers.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <Tabs defaultValue="All Personas" className="w-full max-w-3xl">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {personas.map((persona) => (
                <TabsTrigger 
                  key={persona} 
                  value={persona}
                  onClick={() => setSelectedPersona(persona)}
                  className="text-xs md:text-sm"
                >
                  {persona}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-2">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <div className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-secondary/10 text-secondary">
                  {feature.persona}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{feature.description}</CardDescription>
                <Button 
                  size="sm" 
                  className="mt-2" 
                  onClick={() => navigate(feature.link)}
                >
                  Try Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button onClick={() => navigate('/brd-generator')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Start with BRD Generation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
