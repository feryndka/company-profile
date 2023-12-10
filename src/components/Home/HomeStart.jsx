import Image from "next/image";
import Link from "next/link";

export default function HomeStart() {
  return (
    <section id="HomeStart" class="text-gray-600 body-font h-screen flex items-center">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            class="object-cover object-center rounded"
            alt="Icon"
            src="/img/icon-home-start.png"
            width={500}
            height={500}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-200">
            Transforming Tomorrow with Technology Today
          </h1>
          <p class="mb-8 leading-relaxed text-gray-300">
            Tech companies drive innovation in software, hardware, and AI,
            shaping digital progress and industry efficiency. Focused on R&D,
            they cultivate a culture of collaboration, addressing societal
            challenges for a better future.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-black bg-green-200 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
              <Link href="#HomeMission">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
