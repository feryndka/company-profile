import Image from "next/image"

export default function HomeStart() {
  return (
    <section class="text-gray-500 body-font h-screen flex items-center bg-[#abd1c6]">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-[100px]">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-[#001e1d]">Before they sold out
            <br class="hidden lg:inline-block" /> readymade gluten
          </h1>
          <p class="mb-8 leading-relaxed text-[#0f3433]">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
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