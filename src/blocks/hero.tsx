import { Section, Container } from "@/components";

export const Hero = () => {
  return (
    <Container className="flex items-center justify-center flex-col ">
      <img
        className="lg:w-5/6 md:w-5/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="/assets/rw-banner.jpg"
      />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-lime-600">
          Royal Crypto Startup
        </h1>
        <p className="mb-8 leading-relaxed">
          Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
          tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
          ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
          meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth
          af fingerstache pitchfork.
        </p>
      </div>
    </Container>
  );
};
