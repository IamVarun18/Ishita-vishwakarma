import PublicLayout from '@/layouts/public';
import { Aboutfront, Indiagt, Winner } from '@/components';



import Aboutfront from '@/components/about/Aboutfront';
import { Press } from '@/components';

const About = () => {
  return (
    <PublicLayout>
      <Aboutfront />
      <Winner />
      <Indiagt/>
      <Press/>
    </PublicLayout>
  );
};

export default About;
