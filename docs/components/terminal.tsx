"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  { text: "npm i fetch-qwery", delay: 1000 },
  {
    text: "added 1 package, and audited 2 packages in 345ms",
    type: "output",
    delay: 500,
  },
];

export function Terminal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [history, setHistory] = useState<{ text: string; type?: string }[]>([]);

  useEffect(() => {
    if (currentStep >= steps.length) {
      const resetTimer = setTimeout(() => {
        setHistory([]);
        setDisplayedText("");
        setCurrentStep(0);
      }, 3000); // Wait 3 seconds before restarting the loop
      return () => clearTimeout(resetTimer);
    }

    const step = steps[currentStep];
    if (step.type === "output") {
      const timer = setTimeout(() => {
        setHistory((prev) => [...prev, { text: step.text, type: "output" }]);
        setCurrentStep((prev) => prev + 1);
      }, step.delay);
      return () => clearTimeout(timer);
    }

    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(step.text.substring(0, i + 1));
      i++;
      if (i >= step.text.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setHistory((prev) => [...prev, { text: step.text }]);
          setDisplayedText("");
          setCurrentStep((prev) => prev + 1);
        }, 1000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [currentStep]);

  return (
    <div className="relative group mx-auto w-full max-w-2xl">
      <div className="relative overflow-hidden bg-background border-2 border-foreground retro-shadow backdrop-blur-none">

        <div className="flex items-center gap-2 border-b-2 border-foreground bg-secondary px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-4 w-4 rounded-none bg-destructive border-2 border-foreground" />
            <div className="h-4 w-4 rounded-none bg-yellow-400 border-2 border-foreground" />
            <div className="h-4 w-4 rounded-none bg-green-500 border-2 border-foreground" />
          </div>
          <span className="ml-2 text-[12px] uppercase tracking-widest text-foreground font-black">
            terminal — fetch-qwery
          </span>
        </div>

        <div className="p-7 text-left font-mono font-bold text-sm leading-relaxed min-h-[160px] max-h-[160px] overflow-y-auto bg-foreground scrollbar-hide">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`mb-3 ${item.type === "output" ? "text-background/80 font-normal" : "text-background"}`}
            >
              {item.type !== "output" && (
                <span className="text-secondary mr-3 select-none">❯</span>
              )}
              {item.text}
            </div>
          ))}
          {currentStep < steps.length &&
            steps[currentStep].type !== "output" && (
              <div className="flex items-center">
                <span className="text-secondary mr-3 select-none">❯</span>
                <span className="text-background">
                  {displayedText}
                  <span className="animate-pulse bg-secondary ml-1 w-3 h-4 inline-block" />
                </span>
              </div>
            )}
          {currentStep === steps.length && (
            <div className="flex items-center">
              <span className="text-secondary mr-3 select-none">❯</span>
              <span className="animate-pulse bg-secondary w-3 h-4 inline-block" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
