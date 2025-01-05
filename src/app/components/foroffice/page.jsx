import Image from "next/image";
import highImage from "./assets/high.jpg";
import growwattImage from "./assets/growwatt.png";

const ForOfficePage = () => {
  return (
    <div className="flex flex-col px-4 py-8 w-full">
      {/* Top Centered Heading */}
      <h1 className="text-center mt-24 mb-24 text-green-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Revolutionizing Office Spaces with Almas Solar
      </h1>

      {/* Container Fluid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 px-4">
        {/* 5 Columns for Cover Image */}
        <div className="lg:col-span-7 relative h-72 lg:h-[600px]">
          {/* Cover Image */}
          <Image
            src={highImage}
            alt="Cover Image"
            layout="fill" // Fill the parent div
            objectFit="cover" // Maintain aspect ratio
            className="rounded-md"
          />
          
          {/* Overlay Image - Positioned at the right corner */}
          <div className="absolute bottom-0 right-0 mb-4 mr-4">
            <Image
              src={growwattImage}
              alt="Growwatt Solar Solutions"
              width={100} // Adjust width for mobile
              height={100} // Adjust height for mobile
              className="object-contain lg:w-[150px] lg:h-[150px]" // Maintain aspect ratio
            />
          </div>
        </div>

        {/* 7 Columns for Other Content */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="text-xl lg:text-2xl font-semibold mb-2 mt-4 lg:mt-8">
            Transforming Workplaces for a Sustainable Future
          </h2>
          <p className="text-base lg:text-lg text-gray-700 mt-4 lg:mt-8">
            In today’s rapidly evolving business landscape, integrating solar energy solutions into office spaces is no longer just a trend—it’s a necessity. Our state-of-the-art solar systems are designed specifically for commercial environments, enabling businesses to reduce their operational costs while enhancing their environmental stewardship. By harnessing the power of the sun, companies can significantly decrease their electricity bills and mitigate their reliance on non-renewable energy sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForOfficePage;
