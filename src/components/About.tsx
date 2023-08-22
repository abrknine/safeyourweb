import { motion } from 'framer-motion';
import { AiOutlineSafety, AiOutlineTeam, AiOutlineSecurityScan, AiOutlineLock } from 'react-icons/ai';
import AboutCard from './utils/AboutCard';


const AboutUs: React.FC = () => {
    const cardData = [
        {
          icon: <AiOutlineSafety className="text-3xl text-blue-500 mb-2" />,
          title: 'Comprehensive Security',
          description:
            'Our state-of-the-art security systems ensure full protection of your online assets. We employ advanced algorithms and continuous monitoring to keep your data safe and secure.',
        },
        {
          icon: <AiOutlineTeam className="text-3xl text-blue-500 mb-2" />,
          title: 'Team of Experts',
          description:
            'Our dedicated team of cybersecurity professionals is always ready to assist you. With a deep understanding of the threat landscape, we provide personalized solutions tailored to your needs.',
        },
        {
          icon: <AiOutlineSecurityScan className="text-3xl text-blue-500 mb-2" />,
          title: 'Cutting-Edge Technology',
          description:
            'We utilize the latest technology to stay ahead of threats and provide top-notch security solutions. Our proactive approach ensures that your digital assets are protected from both known and emerging risks.',
        },
        {
          icon: <AiOutlineLock className="text-3xl text-blue-500 mb-2" />,
          title: 'Data Privacy',
          description:
            'Your data privacy is our priority. We implement robust encryption measures and data handling practices to ensure the confidentiality of your sensitive information.',
        },
      ];
      
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#06041e] to-[#111111] py-8 text-white"
      >
        <div className="px-10 md:px-20 lg:px-28">
          <h1 className="text-4xl font-extrabold mb-6">Elevating Trust Through Web Security Excellence</h1>
          <p className="text-lg mb-8">
          We redefine IT security through innovative features tailored to your needs. Our experts merge technology and experience for next-gen solutions. We empower you to anticipate threats, protect assets, and transform security. From advanced threat detection to tailored services, we secure your data's future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {cardData.map((card, index) => (
              <AboutCard key={index} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default AboutUs;