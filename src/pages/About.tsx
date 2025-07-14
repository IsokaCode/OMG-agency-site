import React, { useState } from 'react';
import PageBackground from '../components/PageBackground';

const About = () => {
  const [showBioModal, setShowBioModal] = useState(false);

  return (
    <PageBackground>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">About OMG Agency</h1>
        
        <div className="text-center mb-16">
        <p className="text-gray-600 text-xl">ON MY GRIND. ALWAYS.</p>
        <br></br>
        <br></br>
        <p className="text-white text-xl">Born between the basslines of Atlanta and the hustle of New York City, OMG Agency (On My Grind) is a new kind of music company: one built for the now, the next, and the forever. We may be newly founded, but behind our name is a decades-deep foundation of experience in artist management, A&R, branding, and publishing. This isn't our first run, it's just our time to have everyone shine with us. </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
              <div className="text-gray-300 space-y-3 text-left">
                <p>We are music-first, business-sharp, and culture-built. OMG is powered by a team of creative disruptors who've lived on every side of the music industry.</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Discovered platinum-selling acts</li>
                  <li>Shaped brands from underground to global</li>
                  <li>Closed major publishing deals</li>
                  <li>Built careers from the ground up—without shortcuts</li>
                </ul>
                <p>Now, we've come together to launch something different: <span className="font-semibold">a creator-first agency that moves with independence and swift, precise execution.</span></p>
              </div>
            </div>

            <div className="bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <div className="text-gray-300 space-y-2 text-left">
                <ul className="list-disc list-inside ml-4">
                  <li>To build a music agency that grinds as hard as its clients do.</li>
                  <li>To amplify creativity, not control it.</li>
                  <li>To move with independence, but execute with industry-grade power.</li>
                  <li>To create not just hits—but careers.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pentagon is now clickable */}
          <div className="pentagon-container" style={{ transform: 'rotate(180deg)', cursor: 'pointer' }} onClick={() => setShowBioModal(true)}>
            <div
              className="pentagon-hover relative aspect-square"
              style={{
                clipPath: 'polygon(50% 0%, 100% 60%, 85% 85%, 15% 85%, 0% 60%)',
                border: '2px solid rgba(0,0,0,0.1)',
                background: 'linear-gradient(45deg, rgba(0,0,0,0.05), transparent)',
              }}
            >
              <div className="shimmer-overlay"></div>
              <img 
                src=" " 
                alt="Studio Session" 
                className="w-full h-full object-cover transform rotate-180"
                style={{ transform: 'rotate(180deg) scale(0.95)', objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transform rotate-180"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-3">What We Do</h3>
            <div className="text-gray-300 space-y-2 text-left">
              <p>At OMG, we manage, develop, and elevate producers, writers, and creatives who are shaping the sound of tomorrow.</p>
              <ul className="list-disc list-inside ml-4">
                <li><span className="font-semibold">Publishing & Administration:</span> We protect and monetize every note, hook, and tag with global precision.</li>
                <li><span className="font-semibold">Creative Development & A&amp;R:</span> We link our talent with top artists, labels, and sync opportunities—before the rest of the industry catches up.</li>
                <li><span className="font-semibold">Brand & Visual Direction:</span> From rollout to rebrand, we craft identities that travel as far as the music.</li>
                <li><span className="font-semibold">Business Strategy:</span> Whether you're building a catalog, landing placements, or negotiating a 360 deal, we make sure it pays off—long-term.</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-3">Who We Work With</h3>
            <div className="text-gray-300 space-y-2 text-left">
              <p>We proudly represent a roster of some of the most exciting producers in the game.</p>
              <ul className="list-disc list-inside ml-4">
                <li>From fast rising hitmakers making noise on streaming charts</li>
                <li>To in-demand names behind this year's biggest albums</li>
              </ul>
              <p>These aren't just beat-makers, they're architects of sound, and we're here to back their vision 100%.</p>
            </div>
          </div>

          <div className="bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-3">Based in ATL & NYC — Operating Worldwide</h3>
            <div className="text-gray-300 space-y-2 text-left">
              <p>We've got Atlanta in our blood, New York in our bones, and a global vision in our scope.</p>
              <ul className="list-disc list-inside ml-4">
                <li>Whether it's a sync deal in LA</li>
                <li>A session in London</li>
                <li>Or a release party in Lagos</li>
              </ul>
              <p className="mt-2">We move wherever the music does.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Modal */}
      {showBioModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-8" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <div className="relative w-full max-w-3xl bg-neutral-900/80 rounded-2xl overflow-y-auto max-h-[90vh]" style={{ animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <button
              onClick={() => setShowBioModal(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 text-white overflow-y-auto max-h-[80vh]">
              <h2 className="text-3xl font-bold mb-6">OMG Founder Info</h2>
              <p className="mb-4">For nearly a decade, Andre Mullings—known in the music industry as “Dre” or “International A”—has been a driving force behind some of music’s biggest names and boldest moves. As a seasoned manager and A&R, Dre’s resume includes:</p>
              <ul className="list-disc list-inside mb-6 pl-4">
                <li>Grammy-nominated placements</li>
                <li>Chart-topping records across genres</li>
                <li>Executive roles in major industry projects</li>
              </ul>
              <hr className="my-6 border-neutral-700" />
              <h3 className="text-2xl font-bold mb-2">Career Highlights</h3>
              <h4 className="text-lg font-semibold mb-1 mt-4">Early Breakthroughs</h4>
              <p className="mb-2">Dre made waves early by securing a Grammy nomination for Best Rap Album with the track “Ball w/o You” (21 Savage’s <i>I Am &gt; I Was</i>, produced by TM88).</p>
              <p className="mb-2">His placement credits include:</p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>Travis Scott</li>
                <li>Don Toliver</li>
                <li>Lil Durk</li>
                <li>Lil Uzi Vert</li>
                <li>Future</li>
                <li>Wiz Khalifa</li>
                <li>Moneybagg Yo</li>
              </ul>
              <h4 className="text-lg font-semibold mb-1 mt-4">Executive Production & A&R</h4>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>A&R’d and executive produced <i>Yo88!</i> (TM88 & Pi’erre Bourne)</li>
                <li>Recent projects include Yung Mal’s <i>Iceberg Where You Been</i> and Big Jade’s latest EP</li>
                <li>A&R consulting for Alamo Records/Sony</li>
                <li>Contributions to hits like Drake’s Billboard #1 “Way 2 Sexy” and the diamond-certified “XO Tour Llif3” (Lil Uzi Vert)</li>
              </ul>
              <h4 className="text-lg font-semibold mb-1 mt-4">Manager & Power Broker</h4>
              <p className="mb-2">Dre manages some of the most lucrative publishing catalogs in the game, representing:</p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>TM88</li>
                <li>Lil88</li>
                <li>Fya Man</li>
                <li>TrellGotWings</li>
                <li>DP Beats</li>
                <li>Young Lyxx</li>
              </ul>
              <p className="mb-4">He’s known for closing 7-figure publishing deals with major players like Sony ATV and Warner Chappell, and recently secured a JV partnership for a Crash Dummy Inc producer—taking the brand global.</p>
              <hr className="my-6 border-neutral-700" />
              <h3 className="text-2xl font-bold mb-2">Tours & Brand Partnerships</h3>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>Managed national and international tours for MGK, TM88, and more (including Coachella’s Sahara Stage)</li>
                <li>Led successful brand collaborations: TM88 x 1800 Tequila, Splice, FL Studio (Image Line)</li>
              </ul>
              <h3 className="text-2xl font-bold mb-2 mt-6">Business Ventures</h3>
              <p className="mb-2">As Founder of The International A Agency, Dre has secured strategic partnerships with:</p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>Taylor Gang Records & Management</li>
                <li>Black Wax</li>
                <li>The Mezzo Agency</li>
              </ul>
              <p className="mb-2">He also owns stakes in labels and companies like Crash Dummy Records [C$D] (with TM88), You See It Records (with Young Lyxx), Legal Equalizer, and Drip Tech Co.</p>
              <h4 className="text-lg font-semibold mb-1 mt-4">Fashion & Merch</h4>
              <p className="mb-4">Ventures include consulting for When Smoke Clears and The Merch God.</p>
              <hr className="my-6 border-neutral-700" />
              <h3 className="text-2xl font-bold mb-2">On My Grind Agency [OMG] & 2024 Success</h3>
              <p className="mb-2">In 2024, Dre evolved his roster into On My Grind Agency [OMG], adding talent like Fya Man, Tweektune, Dinuzzo, E In This Mf, EJ Macc, Drippy, and Dante Smith.</p>
              <p className="mb-2">This year alone:</p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>10 #1 Billboard charting placements</li>
                <li>2 new Grammy nominations:
                  <ul className="list-disc list-inside ml-6">
                    <li><i>Lil88</i> (<b>Best Rap Album: Future & Metro Boomin – We Don’t Trust You</b>)</li>
                    <li><i>Fya Man</i> (<b>Best Spoken Word Poetry Album</b>)</li>
                  </ul>
                </li>
              </ul>
              <hr className="my-6 border-neutral-700" />
              <h3 className="text-2xl font-bold mb-2">The Road Ahead</h3>
              <p>With a world-class team and a relentless drive, Dre is shaping the future of culture and music—one bold move at a time.</p>
            </div>
          </div>
        </div>
      )}
    </PageBackground>
  );
};

export default About;