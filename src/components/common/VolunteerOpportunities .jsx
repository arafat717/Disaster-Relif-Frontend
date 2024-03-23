/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ComponentsTitle from "../shared/ComponentsTitle";

const VolunteerOpportunities = () => {
  const theme = useSelector((state) => state.toggle.theme);
  const opportunities = [
    {
      title: "On-the-Ground Assistance",
      description:
        "Join volunteer teams deployed to affected areas to provide direct assistance such as distributing food and water, setting up shelters, or assisting in medical aid stations.",
      imageSrc:
        "https://img.freepik.com/premium-photo/happy-volunteers-are-holding-sign-showing-messages_107420-41588.jpg?w=900",
      alt: "On-the-Ground Assistance",
    },
    {
      title: "Remote Support",
      description:
        "Not able to travel to the disaster-stricken area? You can still offer valuable assistance remotely. Many organizations need volunteers to help with administrative tasks, communication efforts, data entry, and fundraising initiatives from the comfort of your own home.",
      imageSrc:
        "https://img.freepik.com/free-photo/hands-holding-donation-box-with-provisions_23-2148733814.jpg?w=900&t=st=1711170266~exp=1711170866~hmac=5e20aebd3d477cc238f99270123c5b19f47695b437c13846a2363d28c2e4e4e7",
      alt: "Remote Support",
    },
    {
      title: "Specialized Skills",
      description:
        "If you have specific skills or expertise such as medical training, construction experience, counseling qualifications, or proficiency in languages spoken in the affected region, your services are invaluable. Many relief organizations seek volunteers with specialized skills to provide targeted support.",
      imageSrc:
        "https://img.freepik.com/free-photo/damaged-car-russian-s-war-ukraine_23-2149437943.jpg?w=900&t=st=1711170367~exp=1711170967~hmac=6ef14c763a278b022b9bd9fe70422ef769807d7a09a6dc347dfab8b4578c536a",
      alt: "Specialized Skills",
    },
    {
      title: "Community Outreach and Support",
      description:
        "Assist in organizing community events, workshops, or support groups to provide emotional support and resources to individuals and families impacted by the disaster. Your compassionate presence and ability to listen can make a significant difference in the healing process.",
      imageSrc:
        "https://as1.ftcdn.net/v2/jpg/01/80/09/80/1000_F_180098018_06AUp5MYXQJJsMiwxOLT1ZruSpqhUaZL.jpg",
      alt: "Community Outreach and Support",
    },
    {
      title: "Long-Term Recovery Efforts",
      description:
        "Disaster recovery is often a long-term process, and volunteers are needed beyond the immediate aftermath to support rebuilding efforts, community development projects, and resilience-building initiatives. Consider committing to volunteering over an extended period to ensure sustainable recovery.",
      imageSrc:
        "https://as1.ftcdn.net/v2/jpg/06/41/12/98/1000_F_641129819_l0iqEWBYI8JE2aHmEU5ur4z3dyNzRxmI.jpg",
      alt: "Long-Term Recovery Efforts",
    },
    {
      title: "Training and Preparedness Programs",
      description:
        "Get involved in disaster preparedness and mitigation efforts by volunteering with organizations that offer training programs to communities at risk. Help educate individuals on emergency preparedness, evacuation procedures, and resilience-building strategies to minimize the impact of future disasters.",
      imageSrc:
        "https://img.freepik.com/free-photo/high-angle-kid-s-toy-russian-s-war-ukraine_23-2149437952.jpg?w=900&t=st=1711170510~exp=1711171110~hmac=17908a92a8a4a37b33cbfb18071178397a0c248438d600b99f037ef5feae6f9f",
      alt: "Training and Preparedness Programs",
    },
  ];

  return (
    <>
      <ComponentsTitle
        topTitle="Volunteer"
        boldblackTitle="Volunteer Opportunities"
      ></ComponentsTitle>
      <div className={`black ${theme} py-10 mb-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </>
  );
};

const Opportunity = ({ title, description, imageSrc, alt }) => {
  const theme = useSelector((state) => state.toggle.theme);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`card ${theme} overflow-hidden shadow rounded-lg`}
    >
      <img className="w-full h-56 object-cover" src={imageSrc} alt={alt} />
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium ">{title}</h3>
        <p className="mt-2 text-sm ">{description}</p>
      </div>
    </motion.div>
  );
};

export default VolunteerOpportunities;
