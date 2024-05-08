import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Accueil from "@/pages/accueil";

export default function Home() {
  return (
    <>
      <Header />
      <Accueil />
    </>
  );
}
