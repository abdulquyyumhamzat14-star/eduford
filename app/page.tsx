import Image from "next/image";
import Banner from "./Layout/Page/Banner";
import Program from "./Layout/Page/Program";
import About from "./Layout/Page/About";


export default function Home() {
  return (
    <div>
      <Banner />
      <Program/>
      <About/>
    </div>
  );
}
