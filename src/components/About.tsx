"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.pexels.com/photos/2899726/pexels-photo-2899726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3535417/pexels-photo-3535417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1853354/pexels-photo-1853354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3064257/pexels-photo-3064257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        
      </div> */}

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Chris Nguyen - a passionate UX developer
          and a connoisseur of awesome design. Welcome to my corner of the
          digital world!
        </Paragraph>
        
        <Paragraph className=" mt-4">
          Through my resume, I aim to share my insights, experiences, and
          creations with you. Whether you&apos;re a fellow developer seeking
          collaboration, a fellow recruiter in search of talent, or simply someone
          who appreciates aspects of design, AI, and tech, there&apos;s something
          here for you.
        </Paragraph>
       
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          journey with you.
        </Paragraph>
      </div>
    </div>
  );
}
