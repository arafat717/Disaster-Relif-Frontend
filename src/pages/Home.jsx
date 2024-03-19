import Carousel from "../components/Carousel";
import OurService from "../components/OurService";
import AboutUs from "../components/common/AboutUs ";
import Banner from "../components/common/Banner";
import DonationCard from "../components/common/DonationPost/DonationCard";
import Testimonial from "../components/common/Testimonial";
import VolunteerOpportunities from "../components/common/VolunteerOpportunities ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DonationCard></DonationCard>
      <Testimonial></Testimonial>
      <OurService></OurService>
      <VolunteerOpportunities></VolunteerOpportunities>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
