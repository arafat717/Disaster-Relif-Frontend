import DisasterNews from "../components/DisasterNews/DisasterNews";
import OurChildrenSection from "../components/OurChildrenSection/OurChildrenSection";
import OurService from "../components/OurService";
import OurShopArea from "../components/OurShopArea/OurShopArea";
import OurStatistic from "../components/OurStatistic/OurStatistic";
import DynamicTestomonal from "../components/Ui/DynamicTestomonal";
import VolunteerList from "../components/Ui/VolunteerList";
import DonationCard from "../components/common/DonationPost/DonationCard";
import Testimonial from "../components/common/Testimonial";
import VolunteerOpportunities from "../components/common/VolunteerOpportunities ";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <DonationCard></DonationCard>
      <OurService></OurService>
      <div className="max-w-[1250px] mx-auto">
        <OurShopArea></OurShopArea>
        <DisasterNews></DisasterNews>
      </div>
      <OurStatistic></OurStatistic>
      <div className="max-w-[1250px] mx-auto">
        <DynamicTestomonal></DynamicTestomonal>
        <VolunteerOpportunities></VolunteerOpportunities>
      </div>
      <OurChildrenSection></OurChildrenSection>

      <div className="max-w-[1250px] mx-auto">
        <VolunteerList></VolunteerList>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
