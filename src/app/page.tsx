import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Chris</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a UX designer & developer that loves{" "}
        <Highlight>dynamic web apps</Highlight> in tech, AI, & start-ups related industries.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a senior UX engineer based in southern California with over{" "}
        <Highlight>7 years of experience</Highlight> building scalable web apps
        that are performance optimized and modern.
      </Paragraph>
      {/* <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading> */}
      {/* <Products /> */}
      <TechStack />
      <WorkHistory />
     
    </Container>
  );
}
