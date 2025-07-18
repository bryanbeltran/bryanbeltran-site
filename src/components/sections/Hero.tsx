"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="space-y-6 py-20 max-w-2xl mx-auto px-4 text-center"
    >
      <h1 className="text-5xl font-bold">Bryan Beltran</h1>
      <p className="text-xl text-muted-foreground">
        I&apos;m a backend-focused developer who builds practical tools. This site is a living hub for my projects, blog posts, and experiments.
      </p>
      <div role="group" className="flex justify-center gap-4 pt-4">
        <Link href="#featured">
          <Button size="lg">See What I&apos;m Building</Button>
        </Link>
        <Link href="#contact">
          <Button variant="outline" size="lg">Contact Me</Button>
        </Link>
      </div>
    </section>
  );
}
