import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Target,
  Sparkles
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { features } from "@/data/features";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  const stats = [
    { number: "500+", label: "Courses Mapped", icon: <Target className="w-5 h-5" /> },
    { number: "100+", label: "Colleges Nearby", icon: <Users className="w-5 h-5" /> },
    { number: "95%", label: "Student Satisfaction", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "24/7", label: "AI Support", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <>
      <div className="grid-background"></div>

      <HeroSection />

      <section className="relative py-16 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to find your path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered guidance that understands your unique situation and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="mb-4 mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to clarity in just minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative group">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-2rem)] w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}

                <div className="relative z-10 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border-2 border-primary/20">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ava
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors duration-200"
              >
                <AccordionTrigger className="hover:no-underline text-left py-4">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to find your{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  perfect path?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students who've found clarity and direction with ava.
                Your future starts with the next click.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base font-medium group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start your journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>

              <Link
                href="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/20/03/20250920034107-SQ2AQ7OW.json"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base font-medium border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                >
                  Talk to ava first
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No credit card needed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Instant results
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 