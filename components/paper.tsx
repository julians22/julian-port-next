import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
interface PaperProps {
  paperUrl: string;
}

const Paper = ({ paperUrl }: PaperProps) => {
  return (
    <div className="relative bg-cardYellow dark:bg-darkBg w-full h-full group">
      <div className="-top-40 left-40 absolute dark:hidden bg-cardPink rounded-full w-[135%] h-full" />
      <div className="top-16 md:top-1/2 left-12 md:left-16 absolute rounded-2xl w-full -translate-y-1/2 -rotate-[30deg]">
        <Image
          alt="Paper"
          className="rounded-2xl w-full h-full object-contain"
          height={1280}
          src={paperUrl}
          width={1577}
        />
      </div>
      <button className="group-hover:w-60 bottom-2 left-2 absolute border-2 dark:border-knight bg-white hover:bg-default-100 dark:bg-darkBg p-2 border-transparent rounded-full w-10 md:w-[2.75rem] h-10 md:h-[2.75rem] transition-all duration-500 ease-in-out">
        <div className="flex justify-center items-center">
          <Link
            isExternal
            color="foreground"
            href="https://jurnal.ilmubersama.com/index.php/blendsains/article/view/137"
          >
            <span className="group-hover:block group-hover:visible hidden mr-1 text-nowrap text-sm md:text-medium animate-fade invisible">
              Blend Sains Jurnal Teknik
            </span>
            <GoArrowUpRight />
          </Link>
        </div>
      </button>
    </div>
  );
};

export default Paper;
