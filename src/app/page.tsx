/** @format */

import { Banner } from "./components/Home/Banner";
import { Featured } from "./components/Home/Featured";
import Soon from "./components/Home/Soon";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Featured />
      <Soon />
    </div>
  );
}
