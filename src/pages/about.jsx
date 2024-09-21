import PublicLayout from '@/layouts/public';
import { Aboutfront, Indiagt, Winner } from '@/components';




const About = () => {
  return (
    <PublicLayout>
      <Aboutfront />
      <Winner />
      <Indiagt/>
    </PublicLayout>
  );
};

export default About;
