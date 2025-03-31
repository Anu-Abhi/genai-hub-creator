
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Zap, Info } from 'lucide-react';

const models = [
  {
    name: 'CodeWizard',
    version: 'v2.5',
    description: 'Specialized for code generation and understanding programming concepts.',
    tags: ['Code Generation', 'Debugging', 'Refactoring'],
    rating: 4.8,
    speed: 'Fast',
    isPopular: true
  },
  {
    name: 'DocuMentor',
    version: 'v1.8',
    description: 'Create comprehensive documentation from code bases automatically.',
    tags: ['Documentation', 'Technical Writing', 'API Docs'],
    rating: 4.6,
    speed: 'Medium',
    isNew: true
  },
  {
    name: 'FullStackGenius',
    version: 'v3.0',
    description: 'End-to-end development assistance for full-stack applications.',
    tags: ['Frontend', 'Backend', 'Database'],
    rating: 4.9,
    speed: 'Medium',
    isPopular: true
  },
  {
    name: 'TestCraftAI',
    version: 'v2.1',
    description: 'Generate comprehensive test suites for your application.',
    tags: ['Unit Tests', 'Integration Tests', 'QA'],
    rating: 4.7,
    speed: 'Fast',
    isNew: true
  }
];

const ModelsSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Explore AI Models</h2>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Choose from our curated collection of specialized models for different development tasks.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 flex items-center gap-2">
            View All Models <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model, index) => (
            <Card key={index} className="border flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{model.name}</CardTitle>
                  {model.isPopular && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      Popular
                    </Badge>
                  )}
                  {model.isNew && (
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                      New
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{model.version}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm mb-4">{model.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{model.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span>{model.speed}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full justify-between">
                  Try Model <Info className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
