"use client";
import React, { useState, useEffect, useRef } from "react";

type Stat = {
  number: number;
  suffix: string;
  label: string;
};

type AnimatedCounterProps = {
  targetNumber: number;
  suffix: string;
  duration?: number;
};

const StatisticsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const stats: Stat[] = [
    {
      number: 99,
      suffix: "%",
      label: "Positive Feedback",
    },
    {
      number: 2300,
      suffix: "+",
      label: "Happy Patients a week",
    },
    {
      number: 43,
      suffix: "",
      label: "Professionals",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    targetNumber,
    suffix,
    duration = 2000,
  }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number | null = null;
      const startNumber = 0;

      const animateNumber = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(
          startNumber + (targetNumber - startNumber) * easeOutQuart
        );

        setCurrentNumber(current);

        if (progress < 1) {
          requestAnimationFrame(animateNumber);
        }
      };

      requestAnimationFrame(animateNumber);
    }, [isVisible, targetNumber, duration]);

    return (
      <span>
        {currentNumber.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="bg-teal-900 w-full py-12 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedCounter
                  targetNumber={stat.number}
                  suffix={stat.suffix}
                  duration={2500 + index * 200}
                />
              </div>
              <div className="text-teal-200 text-sm md:text-base font-medium">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-teal-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
