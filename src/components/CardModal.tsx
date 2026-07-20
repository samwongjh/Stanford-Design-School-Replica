import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CardDetail } from '../types';
import { X, Calendar, MapPin, Clock, BookOpen, CheckCircle, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';

interface CardModalProps {
  card: CardDetail | null;
  onClose: () => void;
  onToggleRegister: (id: string) => void;
  isRegistered: boolean;
  onAddToLibrary: (id: string) => void;
  isAddedToLibrary: boolean;
}

export default function CardModal({
  card,
  onClose,
  onToggleRegister,
  isRegistered,
  onAddToLibrary,
  isAddedToLibrary
}: CardModalProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'practice'>('details');
  const [reflectionInput, setReflectionInput] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  if (!card) return null;

  const isDark = card.colorClass.includes('bg-stone-900') || card.textColorClass.includes('text-white');
  const hasImage = card.details?.image;

  // Render mock practice exercises matching standard d.school activities
  const getPracticeExercise = () => {
    switch (card.type) {
      case 'Tool':
        return {
          title: 'Unpack this Tool: 2-Minute Practice',
          prompt: `Think about a current project or personal blocker. How could you apply "${card.title}" to outline or reframe it today?`,
          actionLabel: 'Save Reflection',
        };
      case 'Workshop':
        return {
          title: 'Workshop Warmup',
          prompt: `To prepare for a workshop like "${card.title}", think about your primary learning goal. What specific creative habit do you want to build or strengthen?`,
          actionLabel: 'Log My Learning Goal',
        };
      default:
        return {
          title: 'Design Reflection Challenge',
          prompt: `Consider the core idea of "${card.title}". Write a quick sentence about how you can share or apply this perspective with a teammate or classmate.`,
          actionLabel: 'Log My Thought',
        };
    }
  };

  const exercise = getPracticeExercise();

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (reflectionInput.trim()) {
      setReflectionSaved(true);
      setTimeout(() => {
        setReflectionSaved(false);
        setReflectionInput('');
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-950 backdrop-blur-sm"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white text-stone-900 shadow-2xl rounded-none border border-stone-200 flex flex-col overflow-hidden max-h-[90vh] z-10 select-text"
        >
          {/* Card Accent Top-Bar */}
          <div 
            className={`h-2.5 w-full ${card.colorClass}`}
            style={card.isCustom && card.customBgColor ? { backgroundColor: card.customBgColor } : {}}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 transition-colors rounded-full z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div className="overflow-y-auto flex-1 p-6 md:p-10 space-y-6">
            {/* Header: Category & Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold ${
                card.type === 'Workshop' ? 'bg-sky-100 text-sky-800' :
                card.type === 'Tool' ? 'bg-emerald-100 text-emerald-800' :
                card.type === 'Story' ? 'bg-amber-100 text-amber-800' :
                card.type === 'Buy Now' ? 'bg-stone-900 text-white' :
                'bg-stone-100 text-stone-700'
              }`}>
                {card.type}
              </span>
              {card.tag && (
                <span className="text-xs font-mono uppercase tracking-widest bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200">
                  {card.tag}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 font-sans leading-tight">
              {card.title}
            </h1>

            {/* Interactive Tabs */}
            <div className="flex border-b border-stone-200">
              <button
                onClick={() => setActiveTab('details')}
                className={`py-2 px-4 text-sm font-semibold tracking-wide border-b-2 transition-all ${
                  activeTab === 'details'
                    ? 'border-red-500 text-red-600 font-bold'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Information
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className={`py-2 px-4 text-sm font-semibold tracking-wide border-b-2 transition-all flex items-center gap-1.5 ${
                  activeTab === 'practice'
                    ? 'border-red-500 text-red-600 font-bold'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                Practice &amp; Reflect
              </button>
            </div>

            {/* Tab 1: Details / Information */}
            {activeTab === 'details' && (
              <div className="space-y-6">
                {/* Image if exists */}
                {hasImage && (
                  <div className="relative aspect-video w-full overflow-hidden border border-stone-200 bg-stone-50">
                    <img
                      src={card.details?.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {/* Subtitle / Description */}
                {card.description && (
                  <p className="text-lg text-stone-700 leading-relaxed font-sans font-medium italic border-l-4 border-red-500 pl-4">
                    {card.description}
                  </p>
                )}

                {/* Long description text */}
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-stone-400">Context &amp; Background</h3>
                  <p className="text-stone-700 leading-relaxed text-base font-sans">
                    {card.details?.longDescription || 
                      "This concept belongs to the d.school repertoire of creative mindsets, structural toolsets, and project logs. It promotes continuous experiment cycles, active listening, observation bias mitigation, and radical teamwork."
                    }
                  </p>
                </div>

                {/* Meta details table */}
                {(card.details?.date || card.details?.duration || card.details?.location || card.details?.format) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                    {card.details?.date && (
                      <div className="flex items-center gap-3 text-stone-600 text-sm font-mono">
                        <Calendar className="w-4 h-4 text-stone-400" />
                        <div>
                          <p className="text-xs text-stone-400 uppercase tracking-tighter">Dates Offered</p>
                          <p className="font-semibold text-stone-800">{card.details.date}</p>
                        </div>
                      </div>
                    )}
                    {card.details?.duration && (
                      <div className="flex items-center gap-3 text-stone-600 text-sm font-mono">
                        <Clock className="w-4 h-4 text-stone-400" />
                        <div>
                          <p className="text-xs text-stone-400 uppercase tracking-tighter">Course Duration</p>
                          <p className="font-semibold text-stone-800">{card.details.duration}</p>
                        </div>
                      </div>
                    )}
                    {card.details?.location && (
                      <div className="flex items-center gap-3 text-stone-600 text-sm font-mono">
                        <MapPin className="w-4 h-4 text-stone-400" />
                        <div>
                          <p className="text-xs text-stone-400 uppercase tracking-tighter">Location</p>
                          <p className="font-semibold text-stone-800">{card.details.location}</p>
                        </div>
                      </div>
                    )}
                    {card.details?.format && (
                      <div className="flex items-center gap-3 text-stone-600 text-sm font-mono">
                        <BookOpen className="w-4 h-4 text-stone-400" />
                        <div>
                          <p className="text-xs text-stone-400 uppercase tracking-tighter">Format</p>
                          <p className="font-semibold text-stone-800">{card.details.format}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Call to Actions based on Category */}
                <div className="pt-6 border-t border-stone-200 flex flex-wrap gap-4">
                  {card.type === 'Workshop' && (
                    <button
                      onClick={() => onToggleRegister(card.id)}
                      className={`px-6 py-3 font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-2 ${
                        isRegistered
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-stone-900 text-white hover:bg-stone-800'
                      }`}
                    >
                      {isRegistered ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Registered on Campus!
                        </>
                      ) : (
                        'Request Free On-Campus Registration'
                      )}
                    </button>
                  )}

                  {card.type === 'Buy Now' && (
                    <button
                      onClick={() => onAddToLibrary(card.id)}
                      className={`px-6 py-3 font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-2 ${
                        isAddedToLibrary
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-stone-900 text-white hover:bg-stone-800'
                      }`}
                    >
                      {isAddedToLibrary ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Added to My d.school Library
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          Add Book to Library Tracker
                        </>
                      )}
                    </button>
                  )}

                  {(card.type === 'Tool' || card.type === 'Read More') && (
                    <div className="text-xs text-stone-500 font-mono flex items-center gap-1.5 bg-stone-50 p-3 w-full border border-stone-200">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>This d.school resource is free. Click the "Practice &amp; Reflect" tab above to test your skills offline right now!</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 2: Practice & Reflection */}
            {activeTab === 'practice' && (
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-none space-y-3">
                  <h3 className="text-lg font-extrabold text-amber-950 flex items-center gap-2 font-sans">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    {exercise.title}
                  </h3>
                  <p className="text-amber-900 text-sm leading-relaxed font-sans">
                    {exercise.prompt}
                  </p>
                </div>

                <form onSubmit={handleSaveReflection} className="space-y-3">
                  <label htmlFor="reflection-text" className="block text-xs uppercase tracking-widest font-bold text-stone-500">
                    Write your quick draft or note here:
                  </label>
                  <textarea
                    id="reflection-text"
                    value={reflectionInput}
                    onChange={(e) => setReflectionInput(e.target.value)}
                    rows={4}
                    placeholder="E.g., I would prototype this tomorrow by asking 3 teammates for direct raw feedback..."
                    className="w-full border-stone-300 focus:border-red-500 focus:ring-red-500 rounded-none text-sm font-sans"
                    required
                  />

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-red-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors"
                    >
                      {exercise.actionLabel}
                    </button>

                    {reflectionSaved && (
                      <span className="text-xs text-emerald-600 font-semibold font-mono flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Saved in your local creative journal!
                      </span>
                    )}
                  </div>
                </form>

                <div className="pt-6 border-t border-stone-200 space-y-3">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400">Why practice?</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-mono">
                    At the d.school, we believe that learning happens by doing. Taking 2 minutes to draft a rapid experiment is a bias toward action that unlocks latent creative patterns.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
