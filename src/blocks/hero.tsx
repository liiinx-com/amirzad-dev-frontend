import { Container } from "@/components";
import { HeroItem } from "@/types";
import { IconWrapper } from "@/components";
import { YoutubeIcon } from "@/components/icons";

interface HeroProps {
  item: HeroItem;
}

export const Hero = ({ item: { content, imageUrl, title } }: HeroProps) => {
  return (
    <Container className="flex items-center justify-center flex-col ">
      <img
        className="lg:w-5/6 md:w-5/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src={imageUrl}
      />
      <div className="lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-lime-600 text-center ">
          Royal Crypto Startup
        </h1>
        <ul className="list-disc">
          {content.map((c, i) => (
            <li key={i}>
              <p className="mb-2 dark:text-gray-400 leading-relaxed font-semibold">
                {c}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-center">
          <a
            key="intro"
            className="flex flex-col items-center bg-[#FF0000] p-3 my-10 px-6 border border-gray-300 hover:border-gray-800 rounded-lg text-white hover:shadow-xl shadow-lg"
            href="https://youtu.be/eGGJyFxlv6w"
            target="_blank"
          >
            <IconWrapper className="text-white" icon={<YoutubeIcon />} />
            Royal Crypto Introduction
          </a>
        </div>
      </div>
    </Container>
  );
};
