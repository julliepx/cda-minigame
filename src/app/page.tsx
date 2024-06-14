"use client";
import Button from "@/components/common/Button/Button";
import AltaLogo from "@/components/svgs/alta/AltaLogo/AltaLogo";
import Link from "next/link";
import "./page.scss";

export default function HomePage() {
  return (
    <section className="page home-page">
      <div className="background"></div>
      <main className="main">
        <h1 className="title">
          V<span className="o">O</span>CÊ CONSEGUE SER O{" "}
          <span className="crown">MAIS</span> <br /> RÁPIDO DO ALTA{" "}
          <span className="arrow-right">FLASH?</span>
        </h1>
        <Link href="/game">
          <Button title="PROVE" className="prove-button" />
        </Link>
      </main>
      <Link href="https://cidadealtarp.com/" target="_blank">
        <AltaLogo />
      </Link>
    </section>
  );
}
