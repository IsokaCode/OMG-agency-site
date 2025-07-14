import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Menu, X, Play, Instagram, Youtube, Music2, Radio } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import metalicRoomBg from '../assets/metalic-room-background.png';

// Import producer images
import tm88 from '../assets/TM88.webp';
import tweekTunes from '../assets/new images/TWEEKTUNES.webp';
import lil88 from '../assets/new images/LIL88.webp';
import fyaMan from '../assets/new images/FYA_MAN.webp';
import dante from '../assets/new images/DANTE.webp';
import drinuzzo from '../assets/new images/DRINUZZO.webp';
import drippy from '../assets/new images/DRIPPY.webp';
import ejMacc from '../assets/new images/EJ_MACC.webp';
import eInThisMf from '../assets/new images/E_IN_THIS_MF.webp';

const producers = [
  {
    name: "TM88",
    image: tm88,
    row: 1,
    position: 1,
    positionSettings: {
      scale: 1.4,
      pentagon: 'center -51%',
      expanded: 'center -10%',
    },
    bio: "Atlanta's top charting producer with multiple platinum records. Known for innovative trap sounds and unique collaborations.",
    credits: ["Future", "Drake", "The Weeknd"],
    social: {
      instagram: "https://www.instagram.com/tm88",
      youtube: "https://www.youtube.com/channel/UCGEq656KhhGYra4X1KCQ5aw",
      spotify: "https://open.spotify.com/artist/5RMUeKq0dZxg9RHE1f0B9P",
      soundcloud: "https://soundcloud.com/tm88"
    }
  },
  {
    name: "LIL88",
    image: lil88,
    row: 1,
    position: 2,
    bio: "Lil88 is an Atlanta-based producer reshaping modern trap with his signature blend of hard-hitting drums and ambient textures.",
    credits: ["Playboi Carti", "Future", "Lil Uzi Vert"],
    social: {
      instagram: "https://www.instagram.com/1lil88/?hl=en",
      youtube: "https://www.youtube.com/watch?v=uxNEsITxPps",
      spotify: "https://artists.spotify.com/songwriter/4XA4AI3DUIlSaG0DSOKqnJ",
      soundcloud: "https://soundcloud.com/lil8800"
    }
  },
  {
    name: "TWEEKTUNE",
    image: tweekTunes,
    row: 1,
    position: 3,
    bio: "Tweek Tune is a rising producer known for his genre-bending sound and innovative musical vision with a distinctive style.",
    credits: ["A$AP FERG", "Quavo", "YE"],
    social: {
      instagram: "https://www.instagram.com/tweektune/?hl=en",
      youtube: "https://www.youtube.com/@tweektune1",
      spotify: "https://open.spotify.com/artist/4KXcvELWll88YwP38UJqaz",
      soundcloud: "https://soundcloud.com/tweektune"
    }
  },
  {
    name: "FYA MAN",
    image: fyaMan,
    row: 1,
    position: 4,
    bio: "Grammy and Emmy-winning producer Fya Man is a Chicago-born artist shaping modern hip-hop with a blend of futuristic and old-school sounds.",
    credits: ["NLE Choppa", "YE", "Lil Durk"],
    social: {
      instagram: "https://www.instagram.com/fyamanhof/?hl=en",
      youtube: "https://www.youtube.com/@FyaManHOF",
      spotify: "https://open.spotify.com/artist/644ezI82brXn85lO9kI6ab",
      soundcloud: "https://soundcloud.com/fyamanhof"
    }
  },
  {
    name: "DANTE",
    image: dante,
    row: 2,
    position: 1,
    positionSettings: {
      scale: 1.2,
      pentagon: 'center -130%',
      expanded: 'center -80%',
    },
    bio: "Dante Smith is a guitarist and producer signed to TM88's Crash Dummy Records, known for blending live instrumentation with trap and melodic rap production.",
    credits: ["Wiz Khalifa", "Pi'erre Bourne"],
    social: {
      instagram: "https://instagram.com/dantexsmith",
      youtube: "https://www.youtube.com/@DantexSmith",
      spotify: "https://open.spotify.com/artist/1mpbkq7xLsVwydz4vgcI0r",
      soundcloud: "https://soundcloud.com/dantexsmith"
    }
  },
  {
    name: "DINUZZO",
    image: drinuzzo,
    row: 2,
    position: 2,
    bio: "Dinuzzo is a genre-blending producer fusing R&B, Hip-Hop, and Pop with inspiration from icons like Pharrell Williams.",
    credits: ["Moneybagg Yo", "Trippie Redd", "Yung Bleu"],
    social: {
      instagram: "https://www.instagram.com/nuzzoworld/?hl=en",
      youtube: "https://www.youtube.com/@nuzzoworld",
      spotify: "https://open.spotify.com/artist/1TKmLwjmeEQJdfSbYMqvis",
      soundcloud: "https://soundcloud.com/dinuzzotheartist"
    }
  },
  {
    name: "DRIPPY",
    image: drippy,
    row: 2,
    position: 3,
    positionSettings: {
      scale: 1.5,
      pentagon: 'center -24%',
      expanded: 'center -20%',
    },
    bio: "Atlanta-based producer Drippy is a rising talent known for his unique sound and breakout remix of 'Spaz' by Mr. 2-17, which hit #8 on the Triller x Billboard chart.",
    credits: ["Rich Homie Quan", "MR 2-17"],
    social: {
      instagram: "https://www.instagram.com/drippyprod",
      youtube: "https://youtube.com/@nova",
      spotify: " ",
      soundcloud: " "
    }
  },
  {
    name: "EJ MACC",
    image: ejMacc,
    row: 3,
    position: 1,
    positionSettings: {
      scale: 1.6,
      pentagon: 'center 70%',
      expanded: 'center 80%',
    },
    bio: "EJ Macc is a rapidly raising hip-hop producer known for his skillful and expertly crafted sound.",
    credits: ["Rob49", "Lola Brooke", "42 Dugg"],
    social: {
      instagram: "https://www.instagram.com/ejmacc_/?hl=en",
      youtube: " ",
      spotify: " ",
      soundcloud: " "
    }
  },
  {
    name: "E IN THIS MF",
    image: eInThisMf,
    row: 3,
    position: 2,
    positionSettings: {
      scale: 1.2,
      pentagon: 'center -9%',
      expanded: 'center -5%',
    },
    bio: "E in this mf is a rising producer signed to Lil88, known for his explosive, genre-pushing beats in new-age rap.",
    credits: ["Ken Carson", "Destroy Lonely"],
    social: {
      instagram: "https://www.instagram.com/einthismf/?hl=en",
      youtube: " ",
      spotify: " ",
      soundcloud: " "
    }
  }
];

const videos = [
  {
    id: 1,
    title: 'Metro X - Studio Session',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=60',
    preview: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4'
  },
  {
    id: 2,
    title: 'Behind the Beat with Crystal',
    thumbnail: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&auto=format&fit=crop&q=60',
    preview: 'https://assets.mixkit.co/videos/preview/mixkit-dj-playing-music-at-a-concert-1237-large.mp4'
  },
  {
    id: 3,
    title: 'Voltage - Making the Hit',
    thumbnail: 'https://images.unsplash.com/photo-1583944000409-00dd0ba1a275?w=800&auto=format&fit=crop&q=60',
    preview: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-dj-playing-music-1238-large.mp4'
  }
];

const PentagonImage = ({ producer, delay, onSelect }: {
  producer: typeof producers[0],
  delay: number,
  onSelect: (producer: typeof producers[0]) => void
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    // Timer to start the falling animation
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Timer to fade in the content after the pentagon is in place.
    // The fall animation is 0.6s (600ms).
    const contentTimer = setTimeout(() => {
      setIsContentLoaded(true);
    }, delay + 600);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(contentTimer);
    };
  }, [delay]);

  return (
    <div
      className={`pentagon-container ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        width: '250px',
        height: '250px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        transform: `translateY(${isVisible ? '0' : '-200vh'}) rotate(180deg)`,
        transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
        transitionDelay: `${delay}ms`,
      }}
      onClick={() => onSelect(producer)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="pentagon-hover"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          clipPath: 'polygon(50% 0%, 100% 60%, 85% 85%, 15% 85%, 0% 60%)',
          cursor: 'pointer',
          border: isHovered ? '3px solid rgba(255,255,255,0.8)' : '2px solid rgba(255,255,255,0.3)',
          overflow: 'hidden',
          backfaceVisibility: 'hidden',
          background: 'linear-gradient(45deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
          boxShadow: isHovered
            ? '0 20px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3), inset 0 0 15px rgba(255,255,255,0.2)'
            : '0 10px 20px rgba(0,0,0,0.4), inset 0 0 10px rgba(255,255,255,0.1)',
          transition: 'all 0.3s ease-out',
        }}
      >
        <img
          src={producer.image}
          alt={producer.name}
          className="w-full h-full object-cover"
          style={{
            display: 'block',
            transition: 'all 0.3s ease, opacity 0.5s ease-in',
            opacity: isContentLoaded ? 1 : 0,
            // PentagonImage image filter
            filter: `${isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1.1) contrast(1.05)'}`,
            transform: `rotate(180deg) scale(${producer.positionSettings?.scale || 1})`,
            objectFit: 'cover',
            objectPosition: producer.positionSettings?.pentagon || 'center',
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
          style={{
            transition: 'opacity 0.3s ease',
            opacity: isHovered ? '0.2' : '0.3',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05))',
          }}
        />
      </div>
      <div
        className="name-label"
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%) rotate(180deg)',
          textAlign: 'center',
          width: '100%',
          color: '#fff',
          fontSize: isHovered ? '22px' : '20px',
          fontWeight: isHovered ? '600' : '500',
          textShadow: isHovered ? '0 2px 10px rgba(0,0,0,0.8), 0 0 5px rgba(255,255,255,0.5)' : '0 2px 5px rgba(0,0,0,0.7)',
          opacity: isContentLoaded ? (isHovered ? 1 : 0.9) : 0,
          transition: 'all 0.3s ease-in-out, opacity 0.5s ease-in',
        }}
      >
        {producer.name}
      </div>
    </div>
  );
};

// Add mapping of producer names to in-depth bios
const producerBios: Record<string, string> = {
  "FYA MAN": `Grammy and Emmy award-winning producer, artist, and influencer Fya Man is a highly influential figure who has played a pivotal role in shaping modern hip-hop. A native of Chicago, Fya Man crafts a unique sound, blending futuristic and old-school melodies. His contributions extend beyond music, significantly impacting fashion, film, and television. Fya Man's ability to expand and redefine the boundaries of different cultural sub-sections solidifies his place across multiple industries.\n\nFya Man is perhaps best known for his dynamic collaborations with Kanye West, contributing to the groundbreaking albums Donda and Ye. He crafted the sound for standout tracks like \"Everybody,\" \"Ok Ok,\" and \"Pure Souls.\" His work with Kanye has cemented him as a key figure in contemporary music production. In addition to his collaborations with Kanye, Fya Man has been instrumental in the rise of the Chicago Drill movement, working with prominent artists like Lil Durk to help define the genre's hard-hitting sound. His production on tracks such as \"Do It Again\" by NLE Choppa further showcases his versatility and ability to create hits across different sub-genres of rap.\n\nFya Man's ability to collaborate with a multitude of producers is evident in his contributions to Vic Mensa’s album The Autobiography, where he worked alongside Pharrell Williams. Beyond music, Fya Man earned his Emmy award for his role in CNN’s United Shades of America. He has also notably worked with Jay-Z on a Budweiser commercial. Fya Man's contributions have not only shaped the sound of Chicago but have also left an indelible mark on the broader landscape of hip-hop.`,
  "LIL88": `Lil88 is a trailblazing producer from Atlanta, known for shaping the sound of modern trap and hip-hop. Associated with established labels like 808 Mafia, Crash Dummy Records, and Opium, Lil88’s innovative production style separates him from the rest. His ability to blend hard-hitting beats with ambient sounds has earned him production credits for artists such as Future, Playboi Carti, Ken Carson, Destroy Lonely, and Homixide Gang.\n\nBeyond producing, Lil88 has displayed his versatility as a DJ for Ken Carson and Destroy Lonely. Some of his standout tracks include Playboi Carti’s hit \"Beno!\", Ken Carson’s \"ss,\" and the powerful collaboration \"Ain't No Love\" featuring Metro Boomin and Future. Recently, Lil88 continued to push sonic boundaries with Destroy Lonely’s “Love Last Forever,” and Ken Carson’s “More Chaos,” a high-energy follow-up to his breakout album “A Great Chaos”. Lil88 also played a pivotal role in the long-awaited album “Eternal Atake 2” by Lil Uzi Vert.\n\nLil88’s star power ascended further with his contributions to Future and Metro Boomin’s chart-topping anthems, \"We Don’t Trust You\" and \"We Still Don’t Trust You,\" both of which soared to #1 on the Billboard Hot 100. With a blend of visionary production and an undeniable influence on the new generation of trap music, Lil88 continues to shape the future of the genre.`,
  "DRIPPY": `Atlanta-based producer Drippy is an emergent talent making waves on the music scene. Known for his distinctive production style, Drippy has quickly gained recognition through landing the #8 spot on the Triller x Billboard chart with his popular remix of \"Spaz” by Mr. 2-17. This accomplishment has cemented his status as a rising star in the industry. Drippy’s standout work includes producing tracks like “Wyb Quan” and “Unlimited Budget” on the late Rich Homie Quan's acclaimed album Forever Goin In. Inspired by the vibrant music culture of Atlanta, Drippy’s career is only beginning, but his creative vision and dedication to the craft hint at an exciting future.`,
  "DINUZZO": `Dinuzzo is a dynamic producer blending R&B, Hip-Hop, and Pop to create a unique sound amongst the music industry. Inspired by icons like Pharrell Williams, he combines these classic influences with modern flow. He has garnered attention with a string of viral tracks, most notably JT’s breakout hit “JT Coming,” showcasing his knack for rhythm layering and sonic innovation. Dinuzzo has worked with a multitude of artists including Jaden, Luh Kel, Trippie Redd, Moneybagg Yo Yung Bleu, and Kehlani. With a growing legacy of production credits and collaboration, Dinuzzo is solidifying his place among the industry’s most innovative producers. Dinuzzo continues to push boundaries and create soundscapes that captivate listeners.`,
  "TWEEKTUNE": `Tweek Tune is a rising power in the production of new music, known for his genre-bending diversity and forward-thinking sound approach. An authenticated artist and producer, Tweek Tune has forged a distinctive personality with creative collaborations and expanding artistic vision. Among his cataloging are production credits with Fivio Foreign, Kanye West, Alicia Keys, Lil Tjay, Quavo, A$AP Ferg, Bobby Shmurda, and Desiigner, both a testament to his diversity and his contribution to creating chart-topping releases.\n\nTweek Tune is most famous for his contribution to City of Gods—a cinematic, chart-conquering classic from Fivio Foreign, Kanye West, and Alicia Keys. He has also collaborated on signature smashes like \"WAM\" by A$AP Ferg and MadeinTYO, \"Ice Cold\" by Lil Tjay, and \"Mama Told Me\" by Quavo, further highlighting his versatility and ability to create compelling music.\n\nTweek Tune is starting to make a lasting impact on today’s music scene. His production adds a unique quality that sets songs apart from the usual. Even early in his career, Tweek Tune’s ability to move effortlessly between artists and styles makes him a standout talent—one who’s poised to leave his mark on music, fashion, and culture as a whole.`,
  "E IN THIS MF": `E in this mf is a rising producer signed to Atlanta-based producer Lil88. E is known for crafting genre-pushing, explosive beats for new-age rap artists. He has produced standout tracks like “Veteran” and “thats my” by Destroy Lonely, and “Overtime” by Ken Carson. Most recently, he made waves with his “Blakk Rokkstar” production from Ken Carson’s 2025 top-charting album More Chaos. Although just the beginning, E is evolving quickly through his experimental, hard-hitting sound.`,
  "DANTE": `Dante Smith is a guitarist and producer signed to TM88’s Crash Dummy Records, known for blending live instrumentation with trap and melodic rap production. He adds a powerful, yet unique edge to hip-hop, with tracks including Wiz Khalifa’s “Peace and Love” and TM88 and Pi’erre Bourne’s “Cullinan”. Dante is also part of the dynamic music ensemble “The Lxcls”, blending latin, hip-hop, and rock to deliver a high-energy and electrifying sound. His innovative sound defines him as a pioneer in the music industry, with his future and influence looking bright.`,
  "EJ MACC": `EJ Macc is a rapidly rising hip-hop and rap producer known for his skillful and expertly crafted sound. He has produced standout tracks like “Bon Appétit” by Lola Brooke, “Hear Me Momma” by Rob49, and “Fake Friends Freestyle” by 42 Dugg, showcasing his versatility early on in his career. EJ Macc has also produced for major artists including French Montana and Sleepy Hallow. As his catalog expands and his distinct sound continues to evolve, EJ Macc is on the road to being one of the games next big super producers.`
};

const ExpandedProducer = ({ producer, onClose }: { 
  producer: typeof producers[0], 
  onClose: () => void 
}) => {
  const navigate = useNavigate();
  const [showDiscography, setShowDiscography] = useState(false);
  const [discographyVisible, setDiscographyVisible] = useState(false);
  const [showMoreBio, setShowMoreBio] = useState(false);
  const discographyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showDiscography) {
      // Delay setting visibility slightly to ensure the render cycle completes
      requestAnimationFrame(() => {
        setDiscographyVisible(true);
      });
    } else {
      setDiscographyVisible(false);
    }
  }, [showDiscography]);

  const handleBooking = () => {
    navigate('/booking', { 
      state: { 
        producer: { 
          name: producer.name, 
          image: producer.image 
        } 
      } 
    });
  };

  // Get Spotify embed URL based on producer
  const getSpotifyEmbedUrl = () => {
    if (producer.name === "Metro X") {
      // Use the correct ID provided by the user with view=coverart parameter for carousel view
      return "https://open.spotify.com/embed/artist/5RMUeKq0dZxg9RHE1f0B9P?utm_source=generator&theme=0&view=coverart";
    }
    
    const url = producer.social.spotify;
    const parts = url.split('/');
    const artistId = parts[parts.length - 1];
    return `https://open.spotify.com/embed/artist/${artistId}?utm_source=generator&theme=0&view=coverart`;
  };

  // Handle toggling discography with animation
  const toggleDiscography = () => {
    if (showDiscography) {
      setDiscographyVisible(false);
      // Wait for animation to complete before hiding the element
      setTimeout(() => {
        setShowDiscography(false);
      }, 400); // Slightly longer timeout to ensure animation completes
    } else {
      setShowDiscography(true);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-8"
      style={{
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      <div 
        className="relative w-full max-w-4xl bg-neutral-900/80 rounded-2xl overflow-hidden"
        style={{
          animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative aspect-square">
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 60%, 85% 85%, 15% 85%, 0% 60%)',
                  transform: 'scale(0.9) rotate(180deg)',
                }}
              >
                <img
                  src={producer.image}
                  alt={producer.name}
                  className="w-full h-full object-cover"
                  style={{
                    // ExpandedProducer image filter
                    filter: `brightness(1.1) contrast(1.05)`,
                    transform: `scale(${producer.positionSettings?.scale || 1}) rotate(180deg)`,
                    objectPosition: producer.positionSettings?.expanded || 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-transparent" />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-white mb-4">{producer.name}</h2>
              
              <div className="flex space-x-4 mb-6">
                <a 
                  href={producer.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Instagram size={28} />
                </a>
                <a 
                  href={producer.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Youtube size={28} />
                </a>
                <a 
                  href={producer.social.spotify} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Music2 size={28} />
                </a>
                <a 
                  href={producer.social.soundcloud} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Radio size={28} />
                </a>
              </div>
              
              <p className="text-gray-300 mb-4 text-lg">{producer.bio}</p>
              {/* More button */}
              {producerBios[producer.name] && (
                <button
                  className="mb-6 text-white underline hover:text-white/80 transition-colors text-base self-start"
                  onClick={() => setShowMoreBio(true)}
                >
                  More
                </button>
              )}
              
              <div className="mb-6">
                <h3 className="text-white text-xl font-semibold mb-2">Notable Credits:</h3>
                <div className="flex flex-wrap gap-2">
                  {producer.credits.map((credit, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-base"
                    >
                      {credit}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={toggleDiscography}
                className="w-full py-3 mb-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors flex items-center justify-center text-lg"
              >
                {showDiscography ? "Hide" : "Show"} Discography 
                <Music2 size={20} className="ml-2" />
              </button>

              <button 
                onClick={handleBooking}
                className="w-full py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors text-lg"
              >
                Book This Producer
              </button>
            </div>
          </div>

          {/* Spotify Discography Section with improved animation */}
          <div 
            ref={discographyRef}
            className="overflow-hidden transition-all duration-400 ease-out"
            style={{ 
              height: showDiscography ? (discographyVisible ? '336px' : '0') : '0',
              opacity: discographyVisible ? 1 : 0,
              visibility: showDiscography ? 'visible' : 'hidden',
            }}
          >
            <div className="p-8 pt-0 w-full transform transition-transform duration-400 ease-out"
              style={{
                transform: discographyVisible ? 'translateY(0)' : 'translateY(-40px)',
              }}
            >
              <div className="w-full rounded-lg overflow-hidden" style={{ height: "280px" }}>
                <iframe
                  src={getSpotifyEmbedUrl()}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ 
                    borderRadius: "12px",
                    transition: "opacity 0.4s ease-out",
                    opacity: discographyVisible ? 1 : 0,
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More Bio Modal */}
      {showMoreBio && producerBios[producer.name] && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-8" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <div className="relative w-full max-w-2xl bg-neutral-900/80 rounded-2xl overflow-y-auto max-h-[90vh]" style={{ animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <button
              onClick={() => setShowMoreBio(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            >
              <X size={24} />
            </button>
            <div className="p-8 text-white overflow-y-auto max-h-[80vh] text-center whitespace-pre-line">
              <h2 className="text-3xl font-bold mb-6">{producer.name}</h2>
              <p>{producerBios[producer.name]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MediaPentagon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const [randomVideo, setRandomVideo] = useState(videos[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      setRandomVideo(videos[randomIndex]);
      
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(error => {
          console.log("Video autoplay failed:", error);
        });
      }
    }
  }, [isHovered]);

  const handleClick = () => {
    if (containerRef.current) {
      setIsAnimating(true);
      
      // Initial position calculation
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - rect.width / 2;
      const centerY = window.innerHeight / 2 - rect.height / 2;
      
      // Move to center
      containerRef.current.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      containerRef.current.style.transform = `translate(${centerX - rect.left}px, ${centerY - rect.top}px) rotate(180deg)`;
      
      // After centering, start rotation
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
          containerRef.current.style.transform = `translate(${centerX - rect.left}px, ${centerY - rect.top}px) rotate(180deg) rotateY(1080deg)`;
        }
      }, 500);

      // Navigate after animation
      setTimeout(() => {
        navigate('/videos');
      }, 1500);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-8 right-8 z-40 cursor-pointer ${isAnimating ? 'pointer-events-none' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        width: '150px',
        height: '150px',
        transform: 'rotate(180deg)',
        transformOrigin: 'center center',
      }}
    >
      <div
        className="pentagon-hover group"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          clipPath: 'polygon(50% 0%, 100% 60%, 85% 85%, 15% 85%, 0% 60%)',
          border: '2px solid rgba(0,0,0,0.1)',
          overflow: 'hidden',
          background: 'linear-gradient(45deg, rgba(0,0,0,0.05), transparent)',
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <div className="shimmer-overlay"></div>
        {isHovered ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transform rotate-180"
          >
            <source src={randomVideo.preview} type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <Play 
              className="w-10 h-10 text-white transform rotate-180"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))',
              }}
            />
          </div>
        )}
      </div>
      <div
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-180 text-gray-800 text-lg font-medium"
        style={{
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          opacity: isHovered ? 1 : 0.8,
          transition: 'opacity 0.3s ease',
        }}
      >
        Media
      </div>
    </div>
  );
};

const ScrollingBanner = () => (
  <div className="bg-neutral-800/50 backdrop-blur-sm py-6 overflow-hidden whitespace-nowrap relative border-y border-neutral-700">
    <div className="animate-scroll inline-flex" style={{ width: '200%' }}>
      <span className="text-white text-4xl font-bold tracking-[0.2em] px-8 uppercase inline-block w-1/2">
        Representing the Biggest in the Game!!
      </span>
      <span className="text-white text-4xl font-bold tracking-[0.2em] px-8 uppercase inline-block w-1/2">
        Representing the Biggest in the Game!!
      </span>
    </div>
  </div>
);

// Utility to create slugs from producer names
const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Utility to find a producer by slug
const getProducerBySlug = (slug: string) =>
  producers.find(p => slugify(p.name) === slug);

const Producers = () => {
  const [selectedProducer, setSelectedProducer] = useState<typeof producers[0] | null>(null);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const navigate = useNavigate();
  const { producerSlug } = useParams();

  // Open modal if URL has a slug
  useEffect(() => {
    if (producerSlug) {
      const producer = getProducerBySlug(producerSlug);
      if (producer) setSelectedProducer(producer);
    } else {
      setSelectedProducer(null);
    }
  }, [producerSlug]);

  // When a producer is selected, update the URL
  const handleSelectProducer = (producer: typeof producers[0]) => {
    setSelectedProducer(producer);
    navigate(`/producers/${slugify(producer.name)}`);
  };

  // When modal is closed, go back to /producers
  const handleCloseModal = () => {
    setSelectedProducer(null);
    navigate('/producers');
  };

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = producers.map(producer => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = producer.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsGridVisible(true);
      } catch (error) {
        console.error("Failed to preload images", error);
        setIsGridVisible(true);
      }
    };

    // This tiny delay allows the page transition to finish before we start heavy image loading.
    const timer = setTimeout(() => {
      preloadImages();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageBackground>
      <ScrollingBanner />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-24 text-center tracking-wider">
          OUR PRODUCERS
        </h1>
        
        <div
          className={`flex flex-col items-center transition-opacity duration-700 ease-out ${isGridVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ gap: '80px' }}
        >
          <div className="flex justify-center items-center flex-wrap" style={{ gap: '40px' }}>
            {producers
              .filter(p => p.row === 1)
              .sort((a, b) => a.position - b.position)
              .map((producer, index) => (
                <PentagonImage 
                  key={producer.name} 
                  producer={producer} 
                  delay={index * 100}
                  onSelect={handleSelectProducer}
                />
              ))}
          </div>

          <div className="flex justify-center items-center flex-wrap" style={{ gap: '40px' }}>
            {producers
              .filter(p => p.row === 2)
              .sort((a, b) => a.position - b.position)
              .map((producer, index) => (
                <PentagonImage 
                  key={producer.name} 
                  producer={producer} 
                  delay={400 + index * 100}
                  onSelect={handleSelectProducer}
                />
              ))}
          </div>

          <div className="flex justify-center items-center flex-wrap" style={{ gap: '40px' }}>
            {producers
              .filter(p => p.row === 3)
              .sort((a, b) => a.position - b.position)
              .map((producer, index) => (
                <PentagonImage 
                  key={producer.name} 
                  producer={producer} 
                  delay={700 + index * 100}
                  onSelect={handleSelectProducer}
                />
              ))}
          </div>
        </div>
      </div>
      <MediaPentagon />
      
      {selectedProducer && (
        <ExpandedProducer 
          producer={selectedProducer} 
          onClose={handleCloseModal} 
        />
      )}
    </PageBackground>
  );
};

export default Producers;