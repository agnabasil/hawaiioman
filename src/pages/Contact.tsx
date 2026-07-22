import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { localBusinessSchema } from '../data/seo';

// RFC-5322-practical email check: catches typos and junk without rejecting valid addresses.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real users leave this hidden field empty; bots fill everything.
    // Silently drop the submission (fake success) so spam bots get no signal.
    if ((formData.get('company') as string)?.trim()) {
      setStatus('success');
      form.reset();
      return;
    }

    const name = (formData.get('name') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const message = (formData.get('message') as string) || '';

    // Validate before hitting the network — blocks junk/malformed entries.
    if (name.length < 2) {
      setErrorMsg('Please enter your full name.');
      setStatus('error');
      return;
    }
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    if (message.trim().length < 5) {
      setErrorMsg('Please enter a short message.');
      setStatus('error');
      return;
    }
    // Reject oversized payloads before they hit the network.
    if (message.length > 5000) {
      setErrorMsg('Your message is too long (5000 characters max).');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      // Endpoint provided by user securely linking to their Google Sheet
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwK8TL0UfewfILI4iwyWI4e0gc8L8hJKAMuQFg4o3TUJ67UF_c5-uW-SF758PiK9CTdqw/exec';

      // We use no-cors to blindly fire the POST request and bypass strict Google CORS preflight checks
      await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Submission failed:', error);
      setErrorMsg("We couldn't deliver your message. Please try again or email us directly.");
      setStatus('error');
    }
  };
  return (
    <div className="flex-grow flex items-center justify-center p-4 md:p-8 lg:p-12 relative min-h-[80vh]">
      <SEOHead
        title="Contact Us"
        description="Get in touch with Hawaii Fresh Juice in Muscat, Oman. Visit our juice bar in Al Wadi Al Kabir, or drop us a message about wholesale inquiries, partnerships, or feedback."
        canonical="https://hawaiioman.com/contact"
        jsonLd={[
          localBusinessSchema,
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Hawaii Fresh Juice",
            "url": "https://hawaiioman.com/contact"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hawaiioman.com" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://hawaiioman.com/contact" }
            ]
          }
        ]}
      />

      {/* Organic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-muted/5 rounded-[60%_40%_30%_70%/50%_40%_50%_60%] -z-10 pointer-events-none hidden md:block"></div>

      {/* Contact Container Card */}
      <div className="w-full max-w-[1000px] bg-surface rounded-2xl md:rounded-[3rem] shadow-soft overflow-hidden flex flex-col lg:flex-row relative z-10 border border-muted/5">

        {/* Left Column: Contact Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl lg:text-[40px] font-bold text-text-main mb-3">Say Marhaba!</h1>
            <p className="text-muted text-lg">We'd love to hear from you. Drop us a line about our juices, wholesale inquiries, or just to say hi.</p>
          </div>

          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Honeypot — hidden from users, off-screen, excluded from tab order. Bots fill it. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] w-px h-px opacity-0 pointer-events-none"
            />

            <div className="relative">
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Full Name"
                required
                maxLength={100}
                autoComplete="name"
                className="w-full bg-background-light border-0 border-b-2 border-muted/30 focus:border-primary px-4 py-3 placeholder-muted text-text-main focus:ring-0 transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Email Address"
                required
                maxLength={254}
                autoComplete="email"
                className="w-full bg-background-light border-0 border-b-2 border-muted/30 focus:border-primary px-4 py-3 placeholder-muted text-text-main focus:ring-0 transition-colors"
              />
            </div>

            <div className="relative mb-6">
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                maxLength={5000}
                className="w-full bg-background-light border-0 border-b-2 border-muted/30 focus:border-primary px-4 py-3 placeholder-muted text-text-main resize-none focus:ring-0 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 px-8 bg-primary text-surface font-bold text-lg rounded-full hover:bg-[#e05625] transition-colors shadow-md hover:shadow-lg flex justify-center items-center gap-2 tracking-wide uppercase group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
              {status !== 'submitting' && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>}
            </button>

            {status === 'error' && (
              <div className="bg-red-50 text-red-800 border-l-4 border-red-500 p-4 rounded-md animate-fade-in">
                <p className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-600">error</span>
                  Something went wrong
                </p>
                <p className="text-sm mt-1">{errorMsg || "We couldn't deliver your message. Please try again or email us directly."}</p>
              </div>
            )}

            {status === 'idle' && (
              <p className="text-sm text-muted mt-2 text-center">We typically reply within 24 hours.</p>
            )}
          </form>
        </div>

        {/* Right Column: Location & Map */}
        <div className="w-full lg:w-1/2 bg-background-light p-8 md:p-12 border-l border-muted/5 flex flex-col">
          <h2 className="font-display text-2xl font-bold text-text-main mb-6">Visit Our Muscat Juice Bar</h2>

          <address className="space-y-6 mb-8 flex-grow not-italic">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="font-bold text-text-main mb-1">Location</h3>
                <p className="text-muted">Al Wadi Al Kabir<br />Muscat, Sultanate of Oman</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm shrink-0">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <h3 className="font-bold text-text-main mb-1">Hours</h3>
                <p className="text-muted">Sat-Thur: 8am - 6pm<br />Fri: Holiday</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm shrink-0">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h3 className="font-bold text-text-main mb-1">Contact</h3>
                <p className="text-muted">
                  <a href="mailto:jannajuices@gmail.com" className="hover:text-primary transition-colors">jannajuices@gmail.com</a><br />
                  <a href="tel:+96879727401" className="hover:text-primary transition-colors">+968 7972 7401</a>
                </p>
              </div>
            </div>
          </address>

          {/* Map Area */}
          <div className="w-full h-64 bg-gray-200 rounded-2xl relative overflow-hidden group cursor-pointer shadow-inner">
            <img
              src="/images/locations/contact-map.jpg"
              onError={(e) => { e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDyNJgiGGf-qMvEAC_51PlcsTxi4wdLnvnU8iXYGTGeGY1DXCmYis6hozd8ndp9Jbd1EMRM5Jg6VSrM7pMw35qM9mUiXBTqESK88e7_eN_Lo3XY5p4n6eG1dBm7xXfV6FYLqxYwx6Hs7CVjmh9Hf16PXtjC68yO0x-jVSBXVSSm5XgLWzUGPSAgyoV4CE2c3h0zaleaYc2cAGS0dSkWmdlC06ArvdEtse5X1KU2pyGW_3ZL9C0krNUSWg36BtfzbnU2FC-Cp11a7msV"; }}
              alt="Map showing Hawaii Fresh Juice bar location in Al Wadi Al Kabir, Muscat, Oman"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              width={500}
              height={256}
              loading="lazy"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-primary rounded-full rounded-br-none rotate-45 flex items-center justify-center shadow-lg border-2 border-surface animate-bounce">
                <span className="material-symbols-outlined -rotate-45 text-surface text-xl">local_drink</span>
              </div>
              <div className="w-4 h-1 bg-black/20 rounded-full blur-[2px] mt-2"></div>
            </div>
            <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-text-main shadow-sm flex items-center gap-1 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[16px]">directions</span>
              Get Directions
            </div>
          </div>

        </div>
      </div>

      {/* Success Popup Modal */}
      {status === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-dark/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl flex flex-col items-center text-center transform transition-all scale-100 border border-muted/10">
            <div className="w-20 h-20 bg-[#F0FAEE] rounded-full flex items-center justify-center text-primary mb-6 shadow-inner ring-8 ring-[#F0FAEE]/50">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="font-display font-bold text-3xl text-text-main mb-4">Message Sent!</h3>
            <p className="text-muted text-base mb-10 leading-relaxed">
              Thank you for reaching out to Hawaii Fresh Juice. Your message has been safely delivered and we will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="w-full py-4 px-8 bg-primary text-surface font-bold text-lg rounded-full hover:bg-primary/90 transition-all shadow-[0_8px_20px_rgba(242,100,49,0.3)] hover:shadow-[0_12px_25px_rgba(242,100,49,0.4)] hover:-translate-y-1 tracking-wide uppercase"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
