import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Slider from "../components/slider";
import SocialsBar from "../components/socialsBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <h2>Bonjour moi c'est mehdi</h2>
        <SocialsBar />
        <Slider />
      </div>
    </>
  );
}
