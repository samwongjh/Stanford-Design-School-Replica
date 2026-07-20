import { useState, useEffect } from 'react';
import { initialStokes } from '../data/initialCards';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, RotateCcw, HelpCircle, Check, Timer, Sparkles, AlertCircle } from 'lucide-react';

interface StokeDeckWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StokeDeckWidget({ isOpen, onClose }: StokeDeckWidgetProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timerLeft, setTimerLeft] = useState<number | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [completedList, setCompletedList] = useState<string[]>([]);

  const activeStoke = initialStokes[currentIdx];

  // Parse time string like "3 mins" into seconds
  const parseSeconds = (timeStr: string) => {
    const num = parseInt(timeStr);
    return isNaN(num) ? 120 : num * 60;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timerLeft !== null && timerLeft > 0) {
      interval = setInterval(() => {
        setTimerLeft((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
    } else if (timerLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerLeft]);

  if (!isOpen) return null;

  const handleNextStoke = () => {
    setCurrentIdx((prev) => (prev + 1) % initialStokes.length);
    setTimerActive(false);
    setTimerLeft(null);
  };

  const startTimer = () => {
    const secs = parseSeconds(activeStoke.duration);
    setTimerLeft(secs);
    setTimerActive(true);
  };

  const toggleComplete = () => {
    if (completedList.includes(activeStoke.id)) {
      setCompletedList((prev) => prev.filter((id) => id !== activeStoke.id));
    } else {
      setCompletedList((prev) => [...prev, activeStoke.id]);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-950 backdrop-blur-sm"
        />

        {/* Panel Container */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 24, stiffness: 220 }}
          className="relative w-full max-w-md h-full bg-stone-900 text-white shadow-2xl flex flex-col overflow-hidden border-l border-stone-800 z-10 select-text"
        >
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex justify-between items-center bg-stone-950">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500 animate-pulse" />
              <div>
                <h2 className="text-lg font-extrabold tracking-tight font-sans">
                  d.school Stoke Deck
                </h2>
                <p className="text-[10px] uppercase tracking-wider font-mono text-stone-400">
                  Daily Creative Gym
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-stone-800 hover:bg-stone-700 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Card View */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Card Meta Indicator */}
              <div className="flex justify-between items-center text-xs font-mono text-stone-400">
                <span>WARMUP {currentIdx + 1} OF {initialStokes.length}</span>
                <span className="flex items-center gap-1">
                  <Timer className="w-3.5 h-3.5 text-amber-500" />
                  {activeStoke.duration}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold tracking-tight font-sans text-red-400 leading-tight">
                  {activeStoke.title}
                </h3>
                <p className="text-sm font-sans text-stone-300 italic">
                  "{activeStoke.tagline}"
                </p>
              </div>

              {/* Materials if any */}
              {activeStoke.materials && (
                <div className="flex items-center gap-2 bg-stone-800/40 p-2.5 border border-stone-800 text-xs text-stone-300 font-mono">
                  <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Materials: {activeStoke.materials}</span>
                </div>
              )}

              {/* Steps */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Steps to Execute</h4>
                <ol className="space-y-3">
                  {activeStoke.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-stone-200 font-sans">
                      <span className="w-5 h-5 bg-stone-800 text-stone-300 font-mono text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Timer & Completion actions */}
            <div className="pt-6 border-t border-stone-800 space-y-4">
              {/* Timer Bar */}
              {timerLeft !== null ? (
                <div className="bg-stone-950 p-4 border border-stone-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Timer className={`w-5 h-5 ${timerActive ? 'text-red-500 animate-spin' : 'text-stone-500'}`} />
                    <span className="text-2xl font-mono tracking-widest font-extrabold">
                      {formatTime(timerLeft)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTimerActive(!timerActive)}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                        timerActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-red-600 hover:bg-red-700'
                      }`}
                    >
                      {timerActive ? 'Pause' : 'Resume'}
                    </button>
                    <button
                      onClick={() => {
                        setTimerLeft(parseSeconds(activeStoke.duration));
                        setTimerActive(false);
                      }}
                      className="p-1.5 bg-stone-800 hover:bg-stone-700"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={startTimer}
                  className="w-full py-3 bg-stone-800 hover:bg-stone-700 border border-stone-700 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  Initiate Challenge Timer
                </button>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={toggleComplete}
                  className={`py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border flex items-center justify-center gap-1.5 ${
                    completedList.includes(activeStoke.id)
                      ? 'bg-emerald-900 border-emerald-600 text-emerald-200'
                      : 'bg-transparent border-stone-700 hover:bg-stone-800 text-stone-300'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  {completedList.includes(activeStoke.id) ? 'Completed!' : 'Mark Completed'}
                </button>

                <button
                  onClick={handleNextStoke}
                  className="py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Draw Next Stoke
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
