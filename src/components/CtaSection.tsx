
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of developers who are building smarter, faster, and more efficiently with our GenAI tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Free tier includes 500 requests per month.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
