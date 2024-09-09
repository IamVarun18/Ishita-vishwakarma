import { AboutMe, Homepage } from "@/components";
import PublicLayout from "@/layouts/public";

const index = () => {
  return (
    <PublicLayout>
      
      <Homepage />
      <AboutMe />
    </PublicLayout>
  );
};

export default index;
