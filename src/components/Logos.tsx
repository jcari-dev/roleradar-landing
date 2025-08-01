import React from "react";
import Image from "next/image";

// Place your SVGs here:
// public/roleradar-landing/logos/
//   ├─ greenhouse.svg
//   ├─ ashby.svg
//   └─ lever.svg
// Anything under /public is served from the site root, so these resolve to
// /roleradar-landing/logos/<file>.svg when deployed on GitHub Pages.

const logos = [
  { name: "Greenhouse", src: "/roleradar-landing/logos/greenhouse.svg" },
  { name: "Ashby",      src: "/roleradar-landing/logos/ashby.svg" },
  { name: "Lever",      src: "/roleradar-landing/logos/lever.svg" },
] as const;

const Logos: React.FC = () => (
  <section id="logos" className="py-32 px-5 bg-background">
    <p className="text-lg font-medium text-center">
      Made possible by the public‑facing API&#39;s from these amazing companies
    </p>

    <div className="mt-5 w-full flex flex-wrap items-center justify-evenly gap-5 sm:gap-10 logos-container">
      {logos.map(({ name, src }) => (
        <Image
          key={name}
          src={src}
          alt={`${name} logo`}
          width={160}
          height={48}
          className="h-12 w-auto"
          priority={false}
        />
      ))}
    </div>
  </section>
);

export default Logos;
