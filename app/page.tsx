import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactFormSection from "@/components/ContactFormSection";
import { getHomePageContent } from '@/lib/homePage';

export default async function Home() {
  const homePageContent = await getHomePageContent();

  return (
    <>
      <Hero content={homePageContent} />
      <Partners
        heading={homePageContent.partnersHeading}
        partners={homePageContent.partnerNames}
      />
      <Services
        title={homePageContent.servicesTitle}
        description={homePageContent.servicesDescription}
      />
      <WhyChooseUs
        title={homePageContent.whyChooseTitle}
        description={homePageContent.whyChooseDescription}
        highlights={homePageContent.whyChooseHighlights}
        reasons={homePageContent.whyChooseReasons}
      />
      <Testimonials
        title={homePageContent.testimonialsTitle}
        subtitle={homePageContent.testimonialsSubtitle}
      />
      <ContactFormSection />
    </>
  );
}
