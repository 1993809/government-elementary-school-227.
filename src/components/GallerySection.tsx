import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Filter,
  Camera,
  Info,
  ExternalLink,
  Sparkles,
  X
} from 'lucide-react';
import { initialGalleryItems, galleryCategories } from '../data/initialData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = initialGalleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Campus Life & Activities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            School Photo Gallery
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Capturing classroom learning, morning assemblies, sports competitions, cleanliness campaigns, and national celebrations at GES Chak No. 227/W.B.
          </p>
        </div>

        {/* Required Transparency Disclaimer */}
        <div className="mb-8 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <span>
            <strong>Official Photo Notice: </strong>
            In adherence to student privacy and transparency standards, the images below serve as structured institutional placeholders. Actual campus event photographs will be uploaded directly through authorized school administration channels.
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 hover:bg-white hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Placeholder Art Card */}
                <div
                  className={`h-44 bg-gradient-to-tr ${item.imagePlaceholderColor} relative flex items-center justify-center p-4 text-white overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors"></div>
                  <Camera className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="absolute bottom-2 left-2 text-[10px] bg-black/40 px-2 py-0.5 rounded-full text-white/90 backdrop-blur-xs font-mono">
                    {item.date}
                  </span>
                  <span className="absolute top-2 right-2 text-[10px] bg-emerald-900/80 px-2 py-0.5 rounded-full text-emerald-200 font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-1 flex items-center justify-between text-[11px] text-emerald-700 font-bold">
                <span>View Full Details</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
              
              <div
                className={`h-64 bg-gradient-to-tr ${selectedPhoto.imagePlaceholderColor} relative flex items-center justify-center text-white p-6`}
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition"
                >
                  <X className="w-5 h-5" />
                </button>
                <Camera className="w-16 h-16 text-white/60" />
                <span className="absolute bottom-3 left-4 text-xs font-mono bg-black/40 px-3 py-1 rounded-full text-white">
                  {selectedPhoto.category} • {selectedPhoto.date}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-slate-900">{selectedPhoto.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>GES Chak No. 227/W.B</span>
                  <span>Markaz Zakheera, DEA Lodhran</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
