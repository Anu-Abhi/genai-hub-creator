
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Sparkles, Brain, Layers, GitBranch, Cpu } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Code Generation',
    description: 'Transform natural language into production-ready code across multiple programming languages and frameworks.'
  },
  {
    icon: Brain,
    title: 'AI Assistants',
    description: 'Build custom AI assistants to help with documentation, code reviews, and technical support.'
  },
  {
    icon: Sparkles,
    title: 'Content Creation',
    description: 'Generate documentation, marketing materials, and technical content for your software products.'
  },
  {
    icon: Layers,
    title: 'Model Fine-tuning',
    description: 'Customize AI models with your own data to create specialized solutions for your specific needs.'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Manage different versions of your AI models and track changes over time with integrated versioning.'
  },
  {
    icon: Cpu,
    title: 'API Integration',
    description: 'Seamlessly integrate AI capabilities into your applications with our robust API endpoints.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 -z-10 bg-muted/50"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">AI-Powered Developer Tools</h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Access a comprehensive suite of generative AI tools designed specifically for software development.
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
