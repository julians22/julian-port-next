import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import { projects } from "@/config/projects";

function ProjectSlider() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        stopOnMouseEnter: false,
        startDelay: 2000,
        speed: 1,
      }),
    ],
  );

  return (
    <div ref={emblaRef} className="overflow-hidden embla">
      <div className="flex gap-x-4 px-4 embla__container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] lg:flex-[0_0_300px] rounded-xl overflow-hidden embla__slide group"
          >
            <Image
              alt={project.title}
              className="group-hover:grayscale-0 group-hover:scale-105 z-50 transform transition-all grayscale scale-100"
              height={200}
              src={project.imageUrl}
              width={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSlider;
