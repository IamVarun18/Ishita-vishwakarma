import PublicLayout from '@/layouts/public';
import Aboutfront from '@/components/about/Aboutfront';
import { Press } from '@/components';

const About = () => {
  return (
    <PublicLayout>
      <Aboutfront />
      <Press/>
    </PublicLayout>
  );
};

export default About;
