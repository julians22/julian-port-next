"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Paper from "./paper";

import { cn } from "@/lib/utils";
import AvatarTransition from "@/components/avatar";
import { DockDemo } from "@/components/dock-demo";
import { ThemeSwitch } from "@/components/theme-switch";
import IconCloud from "@/components/icon-cloud";
import MapComponent from "@/components/map";
import { layouts, selectedCard } from "@/config/layout";
import { icons } from "@/config/icons";
import useWindowWidth from "@/hooks/useWindowWidth";
import ProjectSlider from "./projects-slider";
import { sendGTMEvent } from "@next/third-parties/google";

interface HomeProps {
  avatarUrl: string;
  emojiUrl: string;
  resumeUrl: string;
  paperUrl: string;
}

const Home = ({
  avatarUrl,
  emojiUrl,
  resumeUrl,
  paperUrl,
}: HomeProps) => {
  const width = useWindowWidth();
  const [tabSelected, setTabSelected] = useState("all");
  const router = useRouter();

  if (!width) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Tabs
        aria-label="Tabs"
        className="mb-2 md:mb-6 rounded-full"
        classNames={{
          cursor: "shadow-none",
          tabList:
            "bg-[#ece7e7] dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-full",
        }}
        motionProps={{
          initial: { scale: 0.8 },
          animate: { scale: 1 },
          exit: { scale: 0.8 },
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        radius={"full"}
        onSelectionChange={(selected) => {

          if (selected === "blog") {
            router.push("/blog");

            return;
          }
          setTabSelected(selected as string);
          sendGTMEvent({ event: "tabChange", value: selected as string });
        }}
      >
        <Tab key="all" title="All" />
        <Tab key="about" title="About" />
        <Tab key="projects" title="Projects" />
        {/* <Tab key="blog" title="Blog" /> */}
      </Tabs>

      <Responsive
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        className="w-full h-full layout"
        cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
        isDraggable={width > 480}
        isResizable={false}
        layouts={layouts[tabSelected]}
        margin={[15, 15]}
        width={width}
      >
        <div
          key="avatar"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex flex-col justify-between p-5 overflow-hidden z-[1]",
            selectedCard[tabSelected]["avatar"] ? "opacity-100" : "opacity-50",
          )}
        >
          <AvatarTransition avatarUrl={avatarUrl} emojiUrl={emojiUrl} />
          <p className="text-sm md:text-medium">
            Hey! I’m <span className="font-oleo text-2xl"> Julian</span>, I
            boast a rich five-year tenure in the realm of programming. Fluent in
            languages such as JavaScript and PHP, I bring a dynamic skill set to
            the table. I hold a Bachelor&apos;s Degree in System Information
            from Nusa Mandiri University in Jakarta, Indonesia, a testament to
            commitment to academic excellence.
          </p>
          <DockDemo resumeUrl={resumeUrl} />
        </div>
        <div
          key="mapComponent"
          className={cn(
            "bg-white dark:bg-darkBg cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
            selectedCard[tabSelected]["mapComponent"]
              ? "opacity-100"
              : "opacity-50",
          )}
        >
          <MapComponent />
        </div>
        <div
          key="themeSwitch"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
            selectedCard[tabSelected]["themeSwitch"]
              ? "opacity-100"
              : "opacity-50",
          )}
        >
          <ThemeSwitch />
        </div>
        <div
          key="iconCloud"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center relative overflow-hidden p-10 md:p-8 z-[1]",
            selectedCard[tabSelected]["iconCloud"]
              ? "opacity-100"
              : "opacity-50",
          )}
        >
          <IconCloud iconSlugs={icons} />
        </div>
        <div
          key="project-slider"
          className={cn(
            "bg-cardYellow dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
            selectedCard[tabSelected]["project-slider"]
              ? "opacity-100"
              : "opacity-50",
          )}
        >
            <ProjectSlider />

        </div>
        <div
          key="paper"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
            selectedCard[tabSelected]["paper"] ? "opacity-100" : "opacity-50",
          )}
        >
          <Paper paperUrl={paperUrl} />
        </div>
      </Responsive>
    </div>
  );
};

export default Home;
