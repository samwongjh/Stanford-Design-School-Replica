import React, { useState } from 'react';
import { CardDetail } from '../types';
import { X, Sparkles, Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CardCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCard: (card: CardDetail) => void;
}

const PALETTE_PRESETS = [
  { name: 'Sky Blue', bg: '#0ea5e9', text: 'text-white', class: 'bg-sky-500 text-white' },
  { name: 'Soft Mint', bg: '#d1fae5', text: 'text-stone-900', class: 'bg-emerald-100 text-stone-900' },
  { name: 'Soft Amber', bg: '#fef9c3', text: 'text-stone-900', class: 'bg-amber-100 text-stone-900' },
  { name: 'Light Ivory', bg: '#fefce8', text: 'text-stone-900', class: 'bg-amber-50 text-stone-900' },
  { name: 'Cosmic Pink', bg: '#fce7f3', text: 'text-stone-900', class: 'bg-pink-100 text-stone-900' },
  { name: 'Dark Charcoal', bg: '#1c1917', text: 'text-white', class: 'bg-stone-900 text-white' },
];

export default function CardCreator({ isOpen, onClose, onAddCard }: CardCreatorProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [type, setType] = useState<CardDetail['type']>('Tool');
  const [tag, setTag] = useState('');
  const [selectedPalette, setSelectedPalette] = useState(PALETTE_PRESETS[1]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newCard: CardDetail = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      type,
      description: description.trim() || undefined,
      tag: tag.trim() || undefined,
      colorClass: selectedPalette.class,
      textColorClass: selectedPalette.text,
      customBgColor: selectedPalette.bg,
      details: {
        longDescription: longDescription.trim() || undefined,
        location: 'Virtual Prototyper',
        date: 'Created Today',
      },
      isCustom: true,
    };

    onAddCard(newCard);
    
    // Reset state
    setTitle('');
    setDescription('');
    setLongDescription('');
    setType('Tool');
    setTag('');
    setSelectedPalette(PALETTE_PRESETS[1]);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-950 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-white text-stone-900 shadow-2xl rounded-none border border-stone-200 flex flex-col overflow-hidden max-h-[90vh] z-10 select-text"
        >
          {/* Header */}
          <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-extrabold tracking-tight text-stone-900 font-sans">
                d.school Tile Architect
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-stone-200 hover:bg-stone-300 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="card-title" className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">
                Idea / Project Title *
              </label>
              <input
                id="card-title"
                type="text"
                required
                maxLength={90}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="E.g., Radical Curiosity: A Framework for Exploration"
                className="w-full border-stone-300 focus:border-red-500 focus:ring-red-500 rounded-none text-sm font-sans"
              />
            </div>

            {/* Sub-description (Teaser) */}
            <div>
              <label htmlFor="card-description" className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">
                Teaser / Sub-description
              </label>
              <input
                id="card-description"
                type="text"
                maxLength={140}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="E.g., A self-paced toolkit to run active observation experiments in public spaces..."
                className="w-full border-stone-300 focus:border-red-500 focus:ring-red-500 rounded-none text-sm font-sans"
              />
            </div>

            {/* Type & Tag */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="card-type" className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">
                  Card Category
                </label>
                <select
                  id="card-type"
                  value={type}
                  onChange={(e) => setType(e.target.value as CardDetail['type'])}
                  className="w-full border-stone-300 focus:border-red-500 focus:ring-red-500 rounded-none text-sm font-sans"
                >
                  <option value="Tool">Tool</option>
                  <option value="Story">Story</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Buy Now">Buy Now</option>
                  <option value="Read More">Read More</option>
                </select>
              </div>

              <div>
                <label htmlFor="card-tag" className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">
                  Topic Tag
                </label>
                <input
                  id="card-tag"
                  type="text"
                  maxLength={16}
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="E.g., Impact, Education"
                  className="w-full border-stone-300 focus:border-red-500 focus:ring-red-500 rounded-none text-sm font-sans"
                />
              </div>
            </div>

            {/* Color Palette Presets */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">
                Visual Canvas Color Theme
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PALETTE_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => setSelectedPalette(preset)}
                    className="h-10 relative flex items-center justify-center border border-stone-200 transition-all hover:scale-[1.03] select-none"
                    style={{ backgroundColor: preset.bg }}
                  >
                    <span className={`text-[10px] font-bold ${preset.text === 'text-white' ? 'text-white' : 'text-stone-800'}`}>
                      {preset.name}
                    </span>
                    {selectedPalette.name === preset.name && (
                      <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-600 text-white rounded-full flex items-center justify-center">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Long Description */}
            <div>
              <label htmlFor="card-long-description" className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">
                Detailed Context / Full Description
              </label>
              <textarea
                id="card-long-description"
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
                rows={3}
                placeholder="Write a few paragraphs about your project goals, physical or digital methodologies, team collaboration processes, and community outcomes..."
                className="w-full border-stone-300 focus:border-red-500 focus:ring-red-500 rounded-none text-sm font-sans"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-none"
              >
                <Plus className="w-4 h-4" />
                Publish Tile to d.school Grid
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
