import { AboutItem as AboutItemType } from "@/types";
import { ImageSection } from "./image-section";
import { ContentSection } from "./content-section";

export interface AboutItemProps {
  aboutItem: AboutItemType;
  dir?: "ltr" | "rtl";
}

export const AboutItem = ({ dir = "ltr", aboutItem }: AboutItemProps) => {
  return (
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      {dir === "ltr" ? (
        <>
          <ImageSection />
          <ContentSection aboutItem={aboutItem} />
        </>
      ) : (
        <>
          <ContentSection aboutItem={aboutItem} />
          <ImageSection />
        </>
      )}
    </div>
  );
  {
    /* <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
  <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
      Education
    </h2>
    <p className="leading-relaxed text-base">
      Blue bottle crucifix vinyl post-ironic four dollar toast vegan
      taxidermy. Gastropub indxgo juice poutine.
    </p>
  </div>
  <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
    <IconWrapper
      className="hover:text-gray-800"
      size={ICON_SIZE}
      icon={<AwardIcon />}
    />
  </div>
</div> */
  }
};
