/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const VolunteerOpportunities = () => {
  const opportunities = [
    {
      title: "On-the-Ground Assistance",
      description:
        "Join volunteer teams deployed to affected areas to provide direct assistance such as distributing food and water, setting up shelters, or assisting in medical aid stations.",
      imageSrc: "/public/John_Morgan.jpg",
      alt: "On-the-Ground Assistance",
    },
    {
      title: "Remote Support",
      description:
        "Not able to travel to the disaster-stricken area? You can still offer valuable assistance remotely. Many organizations need volunteers to help with administrative tasks, communication efforts, data entry, and fundraising initiatives from the comfort of your own home.",
      imageSrc: "/public/Mia_Williams.jpg",
      alt: "Remote Support",
    },
    {
      title: "Specialized Skills",
      description:
        "If you have specific skills or expertise such as medical training, construction experience, counseling qualifications, or proficiency in languages spoken in the affected region, your services are invaluable. Many relief organizations seek volunteers with specialized skills to provide targeted support.",
      imageSrc: "/public/Nia_Adebayo.jpg",
      alt: "Specialized Skills",
    },
    {
      title: "Community Outreach and Support",
      description:
        "Assist in organizing community events, workshops, or support groups to provide emotional support and resources to individuals and families impacted by the disaster. Your compassionate presence and ability to listen can make a significant difference in the healing process.",
      imageSrc: "/public/Rigo_Louie.jpg",
      alt: "Community Outreach and Support",
    },
    {
      title: "Long-Term Recovery Efforts",
      description:
        "Disaster recovery is often a long-term process, and volunteers are needed beyond the immediate aftermath to support rebuilding efforts, community development projects, and resilience-building initiatives. Consider committing to volunteering over an extended period to ensure sustainable recovery.",
      imageSrc: "/public/Ellie_Anderson.jpg",
      alt: "Long-Term Recovery Efforts",
    },
    {
      title: "Training and Preparedness Programs",
      description:
        "Get involved in disaster preparedness and mitigation efforts by volunteering with organizations that offer training programs to communities at risk. Help educate individuals on emergency preparedness, evacuation procedures, and resilience-building strategies to minimize the impact of future disasters.",
      imageSrc: "/public/John_Morgan.jpg",
      alt: "Training and Preparedness Programs",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Volunteer Opportunities
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {opportunities.map((opportunity, index) => (
            <Opportunity
              key={index}
              title={opportunity.title}
              description={opportunity.description}
              imageSrc={opportunity.imageSrc}
              alt={opportunity.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Opportunity = ({ title, description, imageSrc, alt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white overflow-hidden shadow rounded-lg"
    >
      <img className="w-full h-56 object-cover" src={imageSrc} alt={alt} />
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default VolunteerOpportunities;
