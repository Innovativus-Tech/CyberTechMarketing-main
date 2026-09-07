import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="about-page-hero">
        <div className="site-container about-page-layout">
          <div className="about-page-copy">
            <p className="eyebrow"><span /> About Us</p>
            <h1>Cybertech <em>Mission &amp; Goal</em></h1>
            <p>
              At Cybertech Marketing, our mission is to empower businesses through
              innovative digital solutions that streamline operations,
              foster growth, and drive success. With a commitment to
              excellence and customer satisfaction we strive to deliver
              results that exceed expectations.
            </p>
          </div>
          <div className="about-page-visual">
            <div className="about-page-image">
              <Image
                src="/images/collaboration.webp"
                alt="Cybertech team collaborating"
                width={480}
                height={360}
                className="about-v2-img"
                priority
              />
            </div>
            <div className="about-page-stats">
              <div className="about-page-stats-top">
                <div className="about-v2-avatars">
                  <div className="avatar-stack">
                    <span className="avatar-circle" style={{background: 'linear-gradient(135deg, #e6332a, #ff7a3d)'}}>CT</span>
                    <span className="avatar-circle" style={{background: 'linear-gradient(135deg, #315a8f, #4a8fd4)'}}>DM</span>
                    <span className="avatar-circle" style={{background: 'linear-gradient(135deg, #202838, #3a4a60)'}}>AI</span>
                    <span className="avatar-circle avatar-count">50+</span>
                  </div>
                  <span className="about-v2-label">Happy Customers</span>
                </div>
                <a className="button button-primary about-v2-cta" href="/contact">Learn More <ArrowRight size={16} /></a>
              </div>
              <div className="about-page-stats-bottom">
                <div className="about-v2-globe-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div className="about-v2-stat">
                  <strong>50+</strong>
                  <span>Projects Done</span>
                </div>
                <div className="about-v2-stat">
                  <strong>100%</strong>
                  <span>Results Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
