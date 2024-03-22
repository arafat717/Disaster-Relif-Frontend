import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ComponentsTitle from "../shared/ComponentsTitle";

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div>
      <ComponentsTitle
        topTitle="about us"
        boldblackTitle="our mission"
      ></ComponentsTitle>
      <section
        id="about-us"
        className="py-8 px-4 sm:px-8 lg:px-16 flex justify-center my-10"
      >
        <div className="w-full">
          <div
            ref={ref}
            className="flex flex-col justify-center items-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1.5 }}
              className="hover:bg-cyan-300 hover:text-black duration-500 p-4 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                Our Mission:
              </h3>
              <p className="text-center">
                At [Your Website Name], we are driven by the belief that
                everyone deserves help and support in times of disaster. Our
                mission is to provide immediate assistance, promote long-term
                recovery, and enhance resilience in disaster-affected
                communities worldwide. We aim to make a meaningful impact by
                delivering essential supplies, facilitating rebuilding efforts,
                and empowering individuals and communities to thrive despite
                adversity.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-row lg:flex-row justify-between mb-8">
            <div className="w-full lg:w-full mb-4 lg:mr-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="hover:bg-cyan-300 hover:text-black  duration-500 p-4 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Our Objectives:</h3>
                <ul className="list-disc pl-6">
                  <li>
                    Immediate Relief: We strive to deliver essential supplies
                    and support to disaster-affected areas promptly, ensuring
                    that affected individuals receive the assistance they need
                    to survive and recover from the immediate aftermath of
                    disasters.
                  </li>
                  <li>
                    Long-Term Recovery: We are committed to facilitating
                    sustainable rebuilding efforts and community rehabilitation,
                    aiming to restore stability, livelihoods, and hope to
                    disaster-stricken communities in the long term.
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="w-full lg:w-2/3 mb-4 lg:ml-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="hover:bg-cyan-300 hover:text-black  duration-500 p-4 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Our Impact:</h3>
                <p>
                  We measure our success by the tangible outcomes and positive
                  changes we bring to disaster-affected communities. Our impact
                  includes:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Number of Lives Impacted: We track the number of individuals
                    and families who have received assistance and support
                    through our relief efforts.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1, delay: 0.6 }}
              className="hover:bg-cyan-300 hover:text-black  duration-500 p-4 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                Our Approach:
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Collaboration: We collaborate with local authorities,
                  non-governmental organizations (NGOs), businesses, and
                  volunteers to maximize our impact and reach more people in
                  need.
                </li>
                <li>
                  Transparency: We prioritize transparency in our operations,
                  finances, and decision-making processes, ensuring
                  accountability and trust among our stakeholders, donors, and
                  partners.
                </li>
              </ul>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1, delay: 0.8 }}
              className="hover:bg-cyan-300 hover:text-black  duration-500  p-4 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                How You Can Help:
              </h3>
              <p className="text-center">
                Join us in our mission to make a difference. Whether through
                donations, volunteering, or spreading awareness, your support is
                invaluable in helping us provide assistance and hope to
                disaster-affected communities around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
