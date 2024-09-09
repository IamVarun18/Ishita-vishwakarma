// import { useAppContext } from "contexts";
import Head from "next/head";
import Navbar from "./Navbar";

const PublicLayout = ({
  children = <></>,
  title = "Ishita Vishwakarma Portfolio",
  description,
  ogImage,
}) => {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content=""
        />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta
          name="description"
          content=""
        />
        <meta
          property="og:image"
          content={
            ogImage ? ogImage : ""
          }
        />
      </Head>
      <main className=" w-full relative ">
        <Navbar />
        {children}
      </main>
    </>
  );
};
export default PublicLayout;
