"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Clock, Radio } from "lucide-react";
import {
  socialProofNames,
  socialProofCities,
  socialProofActions,
} from "@/lib/quiz-data";

export function SocialProof() {
  const [viewerCount, setViewerCount] = useState(127);
  const [notification, setNotification] = useState<{
    name: string;
    age: number;
    action: string;
    city: string;
    time: string;
  } | null>(null);

  useEffect(() => {
    // Update viewer count randomly
    const viewerInterval = setInterval(() => {
      setViewerCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(100, Math.min(150, prev + change));
      });
    }, 3000);

    // Show random notifications
    const notificationInterval = setInterval(() => {
      const name = socialProofNames[Math.floor(Math.random() * socialProofNames.length)];
      const city = socialProofCities[Math.floor(Math.random() * socialProofCities.length)];
      const action = socialProofActions[Math.floor(Math.random() * socialProofActions.length)];
      const age = Math.floor(Math.random() * 25) + 35;
      const minutes = Math.floor(Math.random() * 5) + 1;

      setNotification({
        name,
        age,
        action,
        city,
        time: `hace ${minutes} min`,
      });

      setTimeout(() => setNotification(null), 4000);
    }, 8000);

    // Show initial notification
    setTimeout(() => {
      setNotification({
        name: "José L.",
        age: 52,
        action: "inició su tratamiento",
        city: "Valencia",
        time: "hace 3 min",
      });
      setTimeout(() => setNotification(null), 4000);
    }, 2000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(notificationInterval);
    };
  }, []);

  return (
    <>
      {/* Footer Social Proof */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="relative">
                <Users className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>
              <span className="text-sm font-medium">{viewerCount}</span>
              <span className="text-xs">personas viendo</span>
            </div>
            <div className="flex items-center gap-1.5 text-destructive">
              <Radio className="h-3.5 w-3.5 animate-pulse" />
              <span className="text-xs font-semibold">EN VIVO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-20 left-1/2 z-50 w-[90%] max-w-sm"
          >
            <div className="flex items-center gap-3 rounded-xl bg-white border border-border shadow-lg p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground truncate">
                    {notification.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({notification.age} años)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {notification.action} • {notification.city}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                <Clock className="h-3 w-3" />
                {notification.time}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
