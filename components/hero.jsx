"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then(mod => ({ default: mod.World })), {
  ssr: false,
  loading: () => (
    <div className="aspect-square w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto flex items-center justify-center">
      <div className="w-full aspect-square rounded-full border border-border/20 bg-muted/20 animate-pulse flex items-center justify-center">
        <div className="text-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto rounded-full border-2 border-primary/30 border-t-primary animate-spin mb-2 sm:mb-3" />
          <p className="text-xs text-muted-foreground px-2">Loading...</p>
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

  const sampleArcs = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 19.0760,
      endLng: 72.8777,
      arcAlt: 0.2,
      color: "#3b82f6",
    },
    {
      order: 2,
      startLat: 40.7128,
      startLng: -74.0060,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      color: "#10b981",
    }
  ];

  const globeConfig = {
    pointSize: 3,
    globeColor: "#1e293b",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.08,
    emissive: "#1e293b",
    emissiveIntensity: 0.15,
    shininess: 1.2,
    polygonColor: "rgba(255,255,255,0.95)",
    ambientLight: "#60a5fa",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 0.7,
    rings: 0,
    maxRings: 1,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.3,
  };

  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">

          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight">
                Career clarity
                <br />
                <span className="text-primary font-normal">made simple</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0">
                AI-powered guidance to help you discover the right courses and colleges for your future
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base group">
                  Get started
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Button>
              </Link>

              <Link
                href="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/20/03/20250920034107-SQ2AQ7OW.json"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                  Ask ava
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
              <div className="aspect-square w-full">
                {isMounted && (
                  <div className="w-full h-full flex items-center justify-center">
                    <World
                      data={sampleArcs}
                      globeConfig={globeConfig}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;