import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ShieldAlert,
  Send,
  Building,
  CheckCircle,
  ExternalLink,
  Info
} from 'lucide-react';
import { initialSchoolInfo } from '../data/initialData';
import { UserRole } from '../types';

interface ContactSectionProps {
  currentRole: UserRole;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentRole }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryStudentClass, setInquiryStudentClass] = useState('Grade 1');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Official Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Contact & Administrative Location
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Government Elementary School Chak No. 227/W.B, Markaz Zakheera, DEA Lodhran, Punjab, Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Official Institutional Registry
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                {initialSchoolInfo.name}
              </h3>
              <p className="font-urdu text-lg text-emerald-900 pt-0.5">
                {initialSchoolInfo.urduName}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              {/* Address */}
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Physical Location:</span>
                  <p className="text-slate-600">Chak No. 227/W.B, Markaz Zakheera</p>
                  <p className="text-slate-600">District Education Authority Lodhran, Punjab, Pakistan</p>
                </div>
              </div>

              {/* School Timings */}
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Official School Timings:</span>
                  <p className="text-slate-600 text-xs mt-1">
                    <strong>Summer:</strong> {initialSchoolInfo.timingSummer}
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    <strong>Winter:</strong> {initialSchoolInfo.timingWinter}
                  </p>
                </div>
              </div>

              {/* Official Contacts Placeholders (No Fabricated Data) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">Official Telephone:</span>
                    <p className="text-slate-500 text-[11px] italic mt-0.5">
                      {initialSchoolInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                  <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">Official Email:</span>
                    <p className="text-slate-500 text-[11px] italic mt-0.5">
                      {initialSchoolInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="flex items-start gap-3 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-xs">Emergency Escalation:</span>
                  <p className="text-[11px] mt-0.5">
                    {initialSchoolInfo.emergencyContact}
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-2 text-xs text-emerald-900">
              <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                Parents wishing to meet the Head Teacher can visit during morning recess or post-class administrative hours.
              </span>
            </div>
          </div>

          {/* Right Column: Parent / Community Message Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send an Inquiry or Message to Administration
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              For admission inquiries, progress queries, or suggestions regarding school facilities
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-sm">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-emerald-700">
                  Your message has been recorded for review by the school administration of GES Chak No. 227/W.B.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Parent / Guardian Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Contact Phone</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 0300-XXXXXXX"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Student's Class (if enrolled)</label>
                    <select
                      value={inquiryStudentClass}
                      onChange={(e) => setInquiryStudentClass(e.target.value)}
                      className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="New Admission">New Admission (ECE/PG)</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="General Community">General Community Citizen</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Message / Detail</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter your query or suggestion..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to School</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Google Maps Interactive Placeholder */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-700" />
                <span>Geographic Location: Chak No. 227/W.B, Markaz Zakheera</span>
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                District Lodhran, Punjab • Configurable Google Maps Navigation Frame
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Lodhran+Punjab+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-emerald-50 hover:text-emerald-900 transition"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-emerald-100 via-slate-100 to-teal-50 border border-slate-300 relative flex flex-col items-center justify-center p-6 text-center shadow-inner overflow-hidden">
            {/* Grid map pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white flex items-center justify-center mx-auto shadow-md">
                <MapPin className="w-7 h-7 text-emerald-100 animate-bounce" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-base">
                  Chak No. 227/W.B (Markaz Zakheera)
                </p>
                <p className="text-xs text-slate-600 mt-1 max-w-md">
                  District Education Authority (DEA) Lodhran, Punjab, Pakistan
                </p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/80 border border-emerald-300 text-[11px] font-mono font-bold text-emerald-800 shadow-2xs">
                  Coordinates & Embed Slot Ready for Administration API Setup
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
