import { AboutMe, Homepage } from "@/components";
import PublicLayout from "@/layouts/public";

const Index = () => {
  return (
    <PublicLayout>
      <Homepage />
      <AboutMe />
    </PublicLayout>
  );
};

export default Index;
