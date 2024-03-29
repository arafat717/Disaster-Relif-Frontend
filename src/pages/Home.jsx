import Carousel from "../components/Carousel";
import OurService from "../components/OurService";
import DynamicTestomonal from "../components/Ui/DynamicTestomonal";
import VolunteerList from "../components/Ui/VolunteerList";
import AboutUs from "../components/common/AboutUs ";
// import Banner from "../components/common/Banner";
import DonationCard from "../components/common/DonationPost/DonationCard";
import Testimonial from "../components/common/Testimonial";
import VolunteerOpportunities from "../components/common/VolunteerOpportunities ";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <HeroSection></HeroSection>
      <DonationCard></DonationCard>
      <OurService></OurService>
      <DynamicTestomonal></DynamicTestomonal>
      <VolunteerOpportunities></VolunteerOpportunities>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <Testimonial></Testimonial>
      <VolunteerList></VolunteerList>
    </div>
  );
};

export default Home;
