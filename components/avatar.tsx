import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { MdOutlineSync } from "react-icons/md";

interface AvatarTransitionProps {
  avatarUrl: string;
  emojiUrl: string;
}

const AvatarTransition: React.FC<AvatarTransitionProps> = ({
  avatarUrl,
  emojiUrl,
}: AvatarTransitionProps) => {
  const [toggle, setToggle] = useState(false);

  const avatarVariants = {
    enter: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0, opacity: 0, rotate: 360 },
  };

  const spring = {
    type: "spring",
    stiffness: 50,
    damping: 10,
    mass: 0.8,
  };

  // Ping effect variants
  const pingVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: [0.9, 2.5],
      opacity: [0.6, 0],
      transition: { duration: 1.5, repeat: 0 },
    },
  };

  return (
    <div className="flex justify-between">
      <div className="relative w-24 md:w-28 h-24 md:h-28">
        <motion.div
          key={toggle ? "blue" : "green"}
          animate="animate"
          className="absolute inset-0 bg-blue-300 opacity-60 blur-md m-auto rounded-full"
          initial="initial"
          variants={pingVariants}
        />
        <motion.div
          animate={toggle ? "exit" : "enter"}
          className="absolute inset-0 flex justify-center items-center rounded-full"
          initial="exit"
          transition={spring}
          variants={avatarVariants}
        >
          <Image
            alt="Avatar"
            className="border-2 dark:border-knight mb-4 border-transparent rounded-full w-24 md:w-28 h-24 md:h-28 object-cover"
            height={128}
            src={avatarUrl}
            width={128}
          />
        </motion.div>
        <motion.div
          animate={toggle ? "enter" : "exit"}
          className="absolute inset-0 flex justify-center items-center rounded-full"
          initial="exit"
          transition={spring}
          variants={avatarVariants}
        >
          <Image
            alt="Emoji Avatar"
            className="border-2 dark:border-knight mb-4 border-transparent rounded-full w-24 md:w-28 h-24 md:h-28 object-cover"
            height={128}
            src={emojiUrl}
            width={128}
          />
        </motion.div>
      </div>
      <Button
        className="border-midnight dark:border-knight rounded-full"
        startContent={<MdOutlineSync size={16} />}
        variant="bordered"
        onPress={() => setToggle((prev) => !prev)}
      >
        Toggle
      </Button>
    </div>
  );
};

export default AvatarTransition;
