import Image from "next/image"

export default function HomeStart() {
  return (
    <section id="HomeStart" class="text-gray-500 body-font h-screen flex items-center ">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-[100px]">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-200">Transforming Tomorrow with Technology Today
            {/* <br class="hidden lg:inline-block" /> readymade gluten */}
          </h1>
          <p class="mb-8 leading-relaxed text-gray-500">Tech companies drive innovation in software, hardware, and AI, shaping digital progress and industry efficiency. Focused on R&D, they cultivate a culture of collaboration, addressing societal challenges for a better future.</p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image 
            class="object-cover object-center rounded" 
            alt="Icon" 
            src="/img/icon-home-start.png" 
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}