"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import Globe components to avoid SSR issues
const World = dynamic(() => import("@/components/ui/globe").then(mod => ({ default: mod.World })), {
  ssr: false,
  loading: () => (
    <div className="aspect-square max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] flex items-center justify-center">
      <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 animate-pulse flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary/30 animate-spin border-4 border-primary/20 border-t-primary/60" />
          <p className="text-xs sm:text-sm text-muted-foreground px-4">Loading interactive globe...</p>
        </div>
      </div>
    </div>
  )
});

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sample data for the globe - career-related connections
  const sampleArcs = [
    {
      order: 1,
      startLat: 40.7128,
      startLng: -74.0060, // New York
      endLat: 51.5074,
      endLng: -0.1278, // London
      arcAlt: 0.3,
      color: "#3b82f6", // Blue
    },
    {
      order: 2,
      startLat: 37.7749,
      startLng: -122.4194, // San Francisco
      endLat: 35.6762,
      endLng: 139.6503, // Tokyo
      arcAlt: 0.4,
      color: "#10b981", // Green
    },
    {
      order: 3,
      startLat: 55.7558,
      startLng: 37.6176, // Moscow
      endLat: -33.8688,
      endLng: 151.2093, // Sydney
      arcAlt: 0.5,
      color: "#8b5cf6", // Purple
    },
    {
      order: 4,
      startLat: 28.6139,
      startLng: 77.2090, // Delhi
      endLat: 19.0760,
      endLng: 72.8777, // Mumbai
      arcAlt: 0.2,
      color: "#f59e0b", // Orange
    }
  ];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#1a1a2e",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute top-60 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] animate-pulse" />
            v1
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Confused about{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Career or courses?
              </span>
              <br />
              We got you
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your AI buddy helps you figure out the right path after school or
              college. No more stress, just clear steps made for you.
            </p>
          </div>

          <div className="pt-4 flex flex-col md:flex-row items-center justify-center gap-1">
            <Link href="/dashboard" className="w-full md:w-auto">
              <Button
                size="sm"
                className="h-10 px-6 text-base font-medium bg-primary hover:bg-primary/90 group shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto"
              >
                Get started
              </Button>
            </Link>
            <span className="mx-2 hidden md:inline-block" /> {/* Spacer for desktop */}
            <Link
              href="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/20/03/20250920034107-SQ2AQ7OW.json"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <Button
                size="sm"
                className="h-10 px-6 text-base font-medium w-full md:w-auto"
              >
                Ask ava
              </Button>
            </Link>
          </div>

          <div className="pt-12 md:pt-16">
            <div className="relative mx-auto max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4">
              <div className="relative aspect-square max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] mx-auto flex items-center justify-center overflow-hidden rounded-2xl">
                {isMounted && (
                  <div className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
                    <div className="w-full h-full max-w-[400px] max-h-[400px] sm:max-w-[500px] sm:max-h-[500px] lg:max-w-[600px] lg:max-h-[600px]">
                      <World
                        data={sampleArcs}
                        globeConfig={globeConfig}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;