
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, ClipboardList, GitCompare, Database, Brain } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'BRD Generation',
    description: 'Generate comprehensive Business Requirement Documents from team recordings, meetings, or existing system analysis.'
  },
  {
    icon: Users,
    title: 'User Story Creation',
    description: 'Automatically transform requirements into well-structured user stories following best practices for agile development.'
  },
  {
    icon: ClipboardList,
    title: 'Test Case Generation',
    description: 'Create test cases and testing scenarios directly from requirements and user stories for comprehensive QA coverage.'
  },
  {
    icon: GitCompare,
    title: 'Reverse Engineering',
    description: 'Extract business requirements and logic from existing code to build documentation for legacy systems.'
  },
  {
    icon: Database,
    title: 'JIRA Integration',
    description: 'Seamlessly push generated user stories, tasks, and epics to JIRA to keep your project management tool up to date.'
  },
  {
    icon: Brain,
    title: 'Cross-Role Collaboration',
    description: 'Facilitate collaboration between business analysts, developers, QA engineers, and stakeholders with AI-powered tools.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 -z-10 bg-muted/50"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">AI-Powered SDLC Tools</h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Streamline your entire software development lifecycle with tools designed for every team member, from business analysts to developers and QA engineers.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-card transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
