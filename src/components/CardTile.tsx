import React from 'react';
import { motion } from 'motion/react';
import { CardDetail } from '../types';
import { ArrowRight, ShoppingBag, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

interface CardTileProps {
  card: CardDetail;
  onClick: () => void;
}

export default function CardTile({ card, onClick }: CardTileProps): React.JSX.Element {
  const isDark = card.colorClass.includes('bg-stone-900') || card.textColorClass.includes('text-white');
  const hasImage = card.details?.image;

  // Render a specific icon or flag based on card category
  const renderCategoryIcon = () => {
    switch (card.type) {
      case 'Workshop':
        return <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Workshop</span>;
      case 'Story':
        return <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Story</span>;
      case 'Tool':
        return <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Tool</span>;
      case 'Buy Now':
        return (
          <div className="flex items-center gap-1 opacity-70">
            <ShoppingBag className="w-3.5 h-3" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Buy Now</span>
          </div>
        );
      case 'Read More':
        return <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Read More</span>;
      case 'Event':
        return <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Event</span>;
      case 'Custom':
        return (
          <div className="flex items-center gap-1 text-red-500 font-bold">
            <Sparkles className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-widest">User Created</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      id={`card-${card.id}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={onClick}
      className={`tile relative p-6 flex flex-col justify-between group cursor-pointer overflow-hidden aspect-square rounded-none border border-black/5 ${
        hasImage ? 'bg-stone-900 text-white' : card.colorClass
      }`}
      style={card.isCustom && card.customBgColor ? { backgroundColor: card.customBgColor } : {}}
    >
      {/* Background Image with Dark Overlay */}
      {hasImage && (
        <>
          <img
            src={card.details?.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent opacity-80" />
        </>
      )}

      {/* Top Bar: Category / Tags */}
      <div className="relative z-10 flex justify-between items-start">
        {renderCategoryIcon()}
        {card.tag && (
          <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
            isDark ? 'border-white/30 text-white/90' : 'border-stone-900/20 text-stone-700'
          }`}>
            {card.tag}
          </span>
        )}
      </div>

      {/* Middle/Bottom Area: Titles & Details */}
      <div className="relative z-10 flex flex-col h-full justify-between mt-4">
        {/* Fill empty space if we want content to sit at bottom */}
        <div className="flex-1" />

        <div className="space-y-3">
          {/* Main Title */}
          <h2 className={`font-sans font-extrabold tracking-tight leading-tight group-hover:underline ${
            card.title.length > 50 ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
          } ${isDark ? 'text-white' : 'text-stone-900'}`}>
            {card.title}
          </h2>

          {/* Simple Short Description if exists */}
          {card.description && (
            <p className={`text-xs leading-relaxed line-clamp-3 opacity-80 ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>
              {card.description}
            </p>
          )}

          {/* Special metadata formatting for Workshops/Events */}
          {(card.details?.date || card.details?.duration || card.details?.location) && (
            <div className={`text-[10px] space-y-0.5 pt-2 border-t font-mono ${
              isDark ? 'border-white/10 text-white/70' : 'border-stone-900/10 text-stone-600'
            }`}>
              {card.details?.date && <p>Date: {card.details.date}</p>}
              {card.details?.duration && <p>Length: {card.details.duration}</p>}
              {card.details?.location && <p>Venue: {card.details.location}</p>}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar: Interactive Arrow triggers or details */}
      <div className="relative z-10 flex justify-end items-center mt-3 pt-2">
        {card.type === 'Read More' ? (
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
            isDark 
              ? 'border-white text-white group-hover:bg-white group-hover:text-stone-900' 
              : 'border-stone-900 text-stone-900 group-hover:bg-stone-900 group-hover:text-white'
          }`}>
            <ArrowRight className="w-4 h-4" />
          </div>
        ) : card.type === 'Buy Now' ? (
          <div className="flex items-center gap-1.5 text-xs font-semibold underline opacity-85 group-hover:opacity-100">
            <span>Learn More</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        ) : (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className={`text-[10px] font-semibold tracking-wider flex items-center gap-1 ${
              isDark ? 'text-white/80' : 'text-stone-600'
            }`}>
              View details <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        )}
      </div>
    </motion.section>
  );
}
