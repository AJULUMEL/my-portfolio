'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50">
      <motion.div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <motion.div
          className="w-12 h-12 border-4 border-primary border-t-accent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Loading text */}
        <motion.p
          className="text-foreground font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>

        {/* Dots animation */}
        <motion.div className="flex gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.1,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}