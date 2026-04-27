'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

interface ScreenshotModalProps {
  isOpen: boolean;
  projectName: string;
  screenshots: string[];
  onClose: () => void;
}

export default function ScreenshotModal({
  isOpen,
  projectName,
  screenshots,
  onClose,
}: ScreenshotModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, projectName]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, screenshots.length]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] flex flex-col border border-blue-100 dark:border-slate-700">
              {/* Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-blue-100 dark:border-slate-800 gap-2">
                <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">{projectName} - Screenshots</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                >
                  <FiX className="w-6 h-6 text-slate-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Image Display */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-3 sm:p-4">
                {screenshots.length > 0 ? (
                  <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={screenshots[currentIndex]}
                    alt={`${projectName} screenshot ${currentIndex + 1}`}
                    className="max-w-full max-h-[60vh] sm:max-h-[70vh] rounded-lg object-contain"
                  />
                ) : (
                  <p className="text-slate-500 dark:text-gray-400">No screenshots available</p>
                )}
              </div>

              {/* Navigation */}
              {screenshots.length > 1 && (
                <div className="flex items-center justify-between p-3 sm:p-4 border-t border-blue-100 dark:border-slate-800">
                  <button
                    onClick={prevImage}
                    className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <FiChevronLeft className="w-6 h-6 text-primary" />
                  </button>

                  <span className="text-slate-600 dark:text-gray-400 text-sm font-medium">
                    {currentIndex + 1} / {screenshots.length}
                  </span>

                  <button
                    onClick={nextImage}
                    className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <FiChevronRight className="w-6 h-6 text-primary" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
