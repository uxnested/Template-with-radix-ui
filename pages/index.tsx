import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as Popover from "@radix-ui/react-popover";
import Header from "../components/Navigation/Header";
import Footer from "../components/Navigation/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
