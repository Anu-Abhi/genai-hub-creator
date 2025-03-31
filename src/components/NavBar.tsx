
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Brain, Menu, Code, Sparkles, Layers, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">GenAI Hub</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Features <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="flex items-center gap-2" onClick={() => navigate('/playground')}>
                <Code className="h-4 w-4" /> 
                <span>Code Generation</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2" onClick={() => navigate('/models')}>
                <Sparkles className="h-4 w-4" /> 
                <span>AI Assistants</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2" onClick={() => navigate('/models')}>
                <Layers className="h-4 w-4" /> 
                <span>Model Deployment</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" asChild>
            <Link to="/models">Models</Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link to="/playground">Playground</Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link to="/docs">Documentation</Link>
          </Button>
        </div>
        
        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden md:flex" onClick={() => navigate('/playground')}>Sign In</Button>
          <Button onClick={() => navigate('/playground')}>Get Started</Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
