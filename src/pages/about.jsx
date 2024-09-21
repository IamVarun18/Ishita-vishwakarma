import PublicLayout from '@/layouts/public';
import { Aboutfront, ContactForm, Indiagt, Winner } from '@/components';




const About = () => {
  return (
    <PublicLayout>
      <Aboutfront />
      <Winner />
      <Indiagt/>
      
      <ContactForm/>
    </PublicLayout>
  );
};

export default About;
