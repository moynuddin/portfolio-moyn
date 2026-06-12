'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '@/data/portfolioData';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ScrollReveal from '../animations/ScrollReveal';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate database/API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Confetti explosion on successful form submission!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    reset();

    // Fade out success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const contactDetails = [
    { icon: <Mail className="w-5 h-5 text-accent" />, label: 'Email Me', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <LinkedinIcon className="w-5 h-5 text-primary" />, label: 'LinkedIn', value: 'moyn-uddin', href: personalInfo.linkedin },
    { icon: <GithubIcon className="w-5 h-5 text-secondary" />, label: 'GitHub', value: 'moynuddin', href: personalInfo.github },
    { icon: <MapPin className="w-5 h-5 text-accent" />, label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary mb-4">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">Touch</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-6" />
            <p className="text-text-muted text-base sm:text-lg">
              Have an opening, contract query, or want to discuss AI integration in your platform? Drop a line!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Details Cards */}
          <ScrollReveal direction="right" className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                Let&apos;s build something exceptional together.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I am open to full-time leadership roles, architect contracts, and consultant opportunities. Feel free to shoot an email or reach out on social channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((detail) => {
                const innerContent = (
                  <Card 
                    key={detail.label} 
                    className="p-5 flex items-start space-x-4 border-surface-border hover:border-accent/40 hover:bg-surface/40 h-full group"
                    hoverEffect={true}
                  >
                    <div className="p-3 rounded-xl bg-surface-border/20 group-hover:bg-accent/10 transition-colors duration-300">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted block mb-0.5">
                        {detail.label}
                      </span>
                      <span className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors duration-200 break-all leading-snug">
                        {detail.value}
                      </span>
                    </div>
                  </Card>
                );

                return detail.href ? (
                  <a key={detail.label} href={detail.href} target="_blank" rel="noopener noreferrer">
                    {innerContent}
                  </a>
                ) : (
                  <div key={detail.label}>{innerContent}</div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal direction="left" className="lg:col-span-7">
            <Card className="p-6 sm:p-10 border-surface-border bg-surface/25">
              
              {submitSuccess ? (
                /* Success Message Overlay */
                <ScrollReveal direction="none" className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-extrabold text-2xl text-text-primary mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-text-secondary max-w-sm mb-6 text-sm">
                    Thank you for reaching out. I will review your message and respond shortly.
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => setSubmitSuccess(false)}>
                    Send another message
                  </Button>
                </ScrollReveal>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name input */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                        className={`w-full px-4 py-3 bg-surface border rounded-xl outline-none text-text-primary text-sm focus:border-accent transition-colors duration-200 ${
                          errors.name ? 'border-red-400/50' : 'border-surface-border'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name.message}</span>
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        className={`w-full px-4 py-3 bg-surface border rounded-xl outline-none text-text-primary text-sm focus:border-accent transition-colors duration-200 ${
                          errors.email ? 'border-red-400/50' : 'border-surface-border'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email.message}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Acme Inc."
                      {...register('company')}
                      className="w-full px-4 py-3 bg-surface border border-surface-border rounded-xl outline-none text-text-primary text-sm focus:border-accent transition-colors duration-200"
                    />
                  </div>

                  {/* Message input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Hi Moyn, I would love to discuss a project..."
                      {...register('message', { required: 'Message is required' })}
                      className={`w-full px-4 py-3 bg-surface border rounded-xl outline-none text-text-primary text-sm focus:border-accent transition-colors duration-200 resize-none ${
                        errors.message ? 'border-red-400/50' : 'border-surface-border'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full py-3.5 font-bold flex items-center justify-center space-x-2 shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>

                </form>
              )}

            </Card>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
