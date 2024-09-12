import { AboutMe, Homepage, Musiclib } from "@/components";
import ContactForm from "@/components/home/ContactForm";
import PublicLayout from "@/layouts/public";

const Index = () => {
  return (
    <PublicLayout>
      <Homepage />
      <AboutMe />
      <Musiclib />
      <ContactForm/>
    </PublicLayout>
  );
};

export default Index;
