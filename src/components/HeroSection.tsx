
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Supercharge Your Development with <span className="gradient-text">GenAI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Access powerful AI models, tools, and APIs to accelerate your software development. 
              Build smarter applications with less code and more innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Documentation
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Brain className="h-4 w-4 text-secondary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
              <span>Trusted by 1000+ developers worldwide</span>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="glass-card rounded-lg p-1">
              <div className="bg-sidebar rounded-md p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs text-muted-foreground ml-2">code-generator.ts</span>
                </div>
                <pre className="text-xs sm:text-sm overflow-x-auto text-left text-white">
                  <code>{`import { genAI } from '@genai-hub/core';

// Initialize the AI code generator
const codeGen = genAI.createGenerator({
  model: 'code-wizard-v2',
  temperature: 0.7,
});

// Generate a React component
const result = await codeGen.generateCode({
  prompt: 'Create a responsive navbar',
  language: 'typescript',
  framework: 'react'
});

console.log(result.code);`}</code>
                </pre>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
