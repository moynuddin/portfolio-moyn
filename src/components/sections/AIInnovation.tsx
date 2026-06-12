'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, GitMerge } from 'lucide-react';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

export default function AIInnovation() {
  const [activeTab, setActiveTab] = useState<'agent' | 'rag' | 'workflow'>('agent');

  const topics = [
    {
      id: 'agent',
      title: 'Agent Architecture',
      icon: <Cpu className="w-5 h-5" />,
      tagline: 'Autonomous Execution Loops',
      description: 'Moyn designs LLM-powered autonomous agents that leverage tools, observe outcomes, and refine prompts dynamically. This setup underpins Zentra, which triggers headless testing, collects logs, and compiles web performance analyses.'
    },
    {
      id: 'rag',
      title: 'RAG Pipeline',
      icon: <Database className="w-5 h-5" />,
      tagline: 'Retrieval-Augmented Generation',
      description: 'High-speed document parsing, segmenting, semantic indexing, and search context injection. Using LangChain.js and vector databases, Moyn feeds precise contextual knowledge into LLMs to avoid hallucinations and maintain enterprise security boundaries.'
    },
    {
      id: 'workflow',
      title: 'AI Workflows (LangGraph)',
      icon: <GitMerge className="w-5 h-5" />,
      tagline: 'Cyclic Graph Agent States',
      description: 'Utilizing LangGraph, Moyn creates stateful multi-agent systems. These systems partition complex goals (such as coding assistants) into planning, testing, and feedback nodes that loop until validation tests are passed.'
    }
  ];

  return (
    <section id="ai" className="relative py-24 bg-background/50 overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary mb-4">
              AI & <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-secondary to-primary">Innovation</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-6" />
            <p className="text-text-muted text-base sm:text-lg">
              Showcasing my specialized engineering in LLM integration, LangChain workflows, and vector search systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Explanations list */}
          <ScrollReveal direction="right" className="lg:col-span-5 flex flex-col space-y-4">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id as 'agent' | 'rag' | 'workflow')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 outline-none flex items-start space-x-4 cursor-pointer ${
                  activeTab === topic.id
                    ? 'border-accent/40 bg-surface/50 shadow-lg shadow-accent/5'
                    : 'border-surface-border/50 glass hover:bg-surface/30 hover:border-surface-border'
                }`}
              >
                <div className={`p-3 rounded-xl ${
                  activeTab === topic.id 
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-surface-border/30 text-text-muted'
                }`}>
                  {topic.icon}
                </div>
                <div>
                  <h3 className={`font-heading font-bold text-lg leading-tight ${
                    activeTab === topic.id ? 'text-accent' : 'text-text-primary'
                  }`}>
                    {topic.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-text-muted mt-1 block">
                    {topic.tagline}
                  </span>
                </div>
              </button>
            ))}
          </ScrollReveal>

          {/* Right Side: Interactive animated SVG schema */}
          <ScrollReveal direction="left" className="lg:col-span-7">
            <Card className="p-6 sm:p-8 border-surface-border hover:border-accent/30 flex flex-col items-center justify-center min-h-[380px] bg-surface/25 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 'agent' && (
                  <motion.div
                    key="agent-diagram"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full flex flex-col items-center"
                  >
                    <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-6">Interactive Schema</span>
                    
                    {/* SVG Diagram - Agent */}
                    <svg viewBox="0 0 500 200" className="w-full max-w-lg overflow-visible text-text-primary font-heading">
                      {/* Definitions for arrow markers & gradients */}
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--primary))" />
                        </marker>
                        <linearGradient id="primary-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgb(var(--primary))" />
                          <stop offset="100%" stopColor="rgb(var(--accent))" />
                        </linearGradient>
                      </defs>

                      {/* Paths (Connecting lines) */}
                      <motion.path 
                        d="M 60 100 L 140 100" 
                        stroke="url(#primary-accent)" strokeWidth="2" markerEnd="url(#arrow)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }}
                      />
                      <motion.path 
                        d="M 220 100 L 300 100" 
                        stroke="url(#primary-accent)" strokeWidth="2" markerEnd="url(#arrow)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                      />
                      <motion.path 
                        d="M 380 100 L 440 100" 
                        stroke="url(#primary-accent)" strokeWidth="2" markerEnd="url(#arrow)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
                      />
                      
                      {/* Loop Feedback path */}
                      <motion.path 
                        d="M 340 60 C 340 20, 180 20, 180 60" 
                        fill="transparent" stroke="rgb(var(--accent))" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }}
                      />

                      {/* User Input node */}
                      <g transform="translate(10, 75)">
                        <rect width="60" height="50" rx="8" fill="rgba(255,255,255,0.05)" stroke="var(--surface-border)" strokeWidth="1.5" />
                        <text x="30" y="30" fill="currentColor" fontSize="10" textAnchor="middle" fontWeight="bold">USER</text>
                      </g>

                      {/* Prompt Manager Node */}
                      <g transform="translate(130, 75)">
                        <rect width="100" height="50" rx="8" fill="rgba(99,102,241,0.1)" stroke="rgb(var(--primary))" strokeWidth="1.5" />
                        <text x="50" y="24" fill="currentColor" fontSize="10" textAnchor="middle" fontWeight="bold">Prompt</text>
                        <text x="50" y="38" fill="currentColor" fontSize="9" textAnchor="middle" className="fill-text-muted">Manager</text>
                      </g>

                      {/* LLM Engine Node */}
                      <g transform="translate(290, 75)" className="diagram-node-active">
                        <rect width="100" height="50" rx="8" fill="rgba(6,182,212,0.15)" stroke="rgb(var(--accent))" strokeWidth="2" />
                        <text x="50" y="24" fill="currentColor" fontSize="10" textAnchor="middle" fontWeight="bold">LLM Core</text>
                        <text x="50" y="38" fill="currentColor" fontSize="9" textAnchor="middle" className="fill-accent">Gemini / GPT</text>
                      </g>

                      {/* Execution Tools Node */}
                      <g transform="translate(430, 75)">
                        <rect width="65" height="50" rx="8" fill="rgba(255,255,255,0.05)" stroke="var(--surface-border)" strokeWidth="1.5" />
                        <text x="32" y="24" fill="currentColor" fontSize="10" textAnchor="middle" fontWeight="bold">Tool</text>
                        <text x="32" y="38" fill="currentColor" fontSize="9" textAnchor="middle" className="fill-text-muted">Executor</text>
                      </g>

                      {/* Animated Dot Pulses */}
                      <circle r="4" fill="rgb(var(--accent))">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 100 L 140 100" />
                      </circle>
                      <circle r="4" fill="rgb(var(--primary))">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 220 100 L 300 100" />
                      </circle>
                      <circle r="4" fill="rgb(var(--accent))">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 340 60 C 340 20, 180 20, 180 60" />
                      </circle>
                    </svg>

                    <p className="text-xs text-text-muted text-center max-w-sm mt-6">
                      {topics[0].description}
                    </p>
                  </motion.div>
                )}

                {activeTab === 'rag' && (
                  <motion.div
                    key="rag-diagram"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full flex flex-col items-center"
                  >
                    <span className="text-xs font-semibold text-secondary uppercase tracking-widest mb-6">Interactive Schema</span>

                    {/* SVG Diagram - RAG */}
                    <svg viewBox="0 0 500 200" className="w-full max-w-lg overflow-visible text-text-primary font-heading">
                      <defs>
                        <marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--secondary))" />
                        </marker>
                      </defs>

                      {/* Lines */}
                      <motion.path 
                        d="M 60 100 L 120 100" stroke="rgb(var(--secondary))" strokeWidth="2" markerEnd="url(#arrow2)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }}
                      />
                      <motion.path 
                        d="M 200 100 L 260 100" stroke="rgb(var(--secondary))" strokeWidth="2" markerEnd="url(#arrow2)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
                      />
                      <motion.path 
                        d="M 340 100 L 400 100" stroke="rgb(var(--secondary))" strokeWidth="2" markerEnd="url(#arrow2)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
                      />

                      {/* Doc upload Node */}
                      <g transform="translate(10, 75)">
                        <rect width="50" height="50" rx="8" fill="rgba(255,255,255,0.05)" stroke="var(--surface-border)" strokeWidth="1.5" />
                        <text x="25" y="24" fill="currentColor" fontSize="10" textAnchor="middle" fontWeight="bold">PDF</text>
                        <text x="25" y="38" fill="currentColor" fontSize="8" textAnchor="middle" className="fill-text-muted">Files</text>
                      </g>

                      {/* Vectorizer Embeddings Node */}
                      <g transform="translate(110, 75)">
                        <rect width="100" height="50" rx="8" fill="rgba(139,92,246,0.1)" stroke="rgb(var(--secondary))" strokeWidth="1.5" />
                        <text x="50" y="24" fill="currentColor" fontSize="9" textAnchor="middle" fontWeight="bold">Embeddings</text>
                        <text x="50" y="38" fill="currentColor" fontSize="8" textAnchor="middle" className="fill-text-muted">LangChain</text>
                      </g>

                      {/* Vector DB Node */}
                      <g transform="translate(250, 75)" className="diagram-node-active">
                        <rect width="100" height="50" rx="8" fill="rgba(6,182,212,0.1)" stroke="rgb(var(--accent))" strokeWidth="2" />
                        <text x="50" y="24" fill="currentColor" fontSize="9" textAnchor="middle" fontWeight="bold">Pinecone DB</text>
                        <text x="50" y="38" fill="currentColor" fontSize="8" textAnchor="middle" className="fill-accent">Vector Index</text>
                      </g>

                      {/* LLM Answer Generator Node */}
                      <g transform="translate(390, 75)">
                        <rect width="90" height="50" rx="8" fill="rgba(255,255,255,0.05)" stroke="var(--surface-border)" strokeWidth="1.5" />
                        <text x="45" y="24" fill="currentColor" fontSize="9" textAnchor="middle" fontWeight="bold">Retrieval</text>
                        <text x="45" y="38" fill="currentColor" fontSize="8" textAnchor="middle" className="fill-text-muted">LLM Stream</text>
                      </g>

                      {/* Pulses */}
                      <circle r="4" fill="rgb(var(--secondary))">
                        <animateMotion dur="2s" repeatCount="indefinite" path="M 60 100 L 120 100" />
                      </circle>
                      <circle r="4" fill="rgb(var(--accent))">
                        <animateMotion dur="2s" repeatCount="indefinite" path="M 200 100 L 260 100" />
                      </circle>
                    </svg>

                    <p className="text-xs text-text-muted text-center max-w-sm mt-6">
                      {topics[1].description}
                    </p>
                  </motion.div>
                )}

                {activeTab === 'workflow' && (
                  <motion.div
                    key="workflow-diagram"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full flex flex-col items-center"
                  >
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-6">Interactive Schema</span>

                    {/* SVG Diagram - LangGraph */}
                    <svg viewBox="0 0 500 200" className="w-full max-w-lg overflow-visible text-text-primary font-heading">
                      <defs>
                        <marker id="arrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--primary))" />
                        </marker>
                      </defs>

                      {/* Circular flow graph */}
                      <motion.path 
                        d="M 100 100 H 170" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrow3)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
                      />
                      <motion.path 
                        d="M 250 100 H 320" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrow3)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      
                      {/* Cyclic loops */}
                      <motion.path 
                        d="M 360 70 C 360 30, 210 30, 210 70" fill="transparent" stroke="rgb(var(--secondary))" strokeWidth="2" markerEnd="url(#arrow3)"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }}
                      />

                      {/* Nodes */}
                      <g transform="translate(20, 75)">
                        <circle cx="25" cy="25" r="25" fill="rgba(255,255,255,0.05)" stroke="var(--surface-border)" strokeWidth="1.5" />
                        <text x="25" y="28" fill="currentColor" fontSize="9" textAnchor="middle" fontWeight="bold">Input</text>
                      </g>

                      {/* Node A */}
                      <g transform="translate(160, 75)">
                        <rect width="100" height="50" rx="8" fill="rgba(99,102,241,0.1)" stroke="rgb(var(--primary))" strokeWidth="1.5" />
                        <text x="50" y="24" fill="currentColor" fontSize="10" textAnchor="middle" fontWeight="bold">Planner</text>
                        <text x="50" y="38" fill="currentColor" fontSize="8" textAnchor="middle" className="fill-text-muted">Agent State</text>
                      </g>

                      {/* Node B */}
                      <g transform="translate(310, 75)" className="diagram-node-active">
                        <rect width="100" height="50" rx="8" fill="rgba(139,92,246,0.15)" stroke="rgb(var(--secondary))" strokeWidth="2" />
                        <text x="50" y="24" fill="currentColor" fontSize="10" textAnchor="middle" fontWeight="bold">Evaluator</text>
                        <text x="50" y="38" fill="currentColor" fontSize="8" textAnchor="middle" className="fill-secondary">Testing Node</text>
                      </g>

                      {/* Terminal Circle */}
                      <g transform="translate(440, 90)">
                        <circle cx="10" cy="10" r="10" fill="rgba(6,182,212,0.2)" stroke="rgb(var(--accent))" strokeWidth="1.5" />
                        <path d="M 6 10 L 9 13 L 14 7" fill="transparent" stroke="rgb(var(--accent))" strokeWidth="1.5" />
                      </g>
                      
                      <motion.path 
                        d="M 410 100 H 430" stroke="rgb(var(--accent))" strokeWidth="2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.6 }}
                      />

                      {/* Loop pulse */}
                      <circle r="4" fill="rgb(var(--secondary))">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 360 70 C 360 30, 210 30, 210 70" />
                      </circle>
                    </svg>

                    <p className="text-xs text-text-muted text-center max-w-sm mt-6">
                      {topics[2].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
