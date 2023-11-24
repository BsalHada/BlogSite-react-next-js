import Image from "next/image";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import Section1 from "./components/body/sections/Section1";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-start justify-between pt-10 ">

    //   <Header/>
    //   <Footer/>

    // </main>
    <main className="flex min-h-screen flex-col ">
      <Header />
      <Section1/>
      <Footer />
    </main>
  );
}
