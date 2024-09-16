import {
  AboutMe,
  ContactForm,
  Homepage,
  Musiclib,
  Upcoming,
} from "@/components";

import PublicLayout from "@/layouts/public";

const Index = () => {
  return (
    <PublicLayout>
      <Homepage />
      <AboutMe />
      <Musiclib />
      <Upcoming />
      <ContactForm />
    </PublicLayout>
  );
};

export default Index;
