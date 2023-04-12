import { Container } from "@/components";
import { HeroItem } from "@/types";

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
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-lime-600">
          Royal Crypto Startup
        </h1>
        {content.map((c, i) => (
          <p className="mb-2 dark:text-gray-400 leading-relaxed font-semibold" key={i}>
            {c}
          </p>
        ))}
      </div>
    </Container>
  );
};
