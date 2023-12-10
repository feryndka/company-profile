import Image from "next/image";

export default function HomeMission() {
  return (
    <section class="text-gray-600 body-font pt-8" id="HomeMission">
      <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
          <h1 class="title-font sm:text-5xl text-5xl mb-4 font-medium text-gray-900">
            Our Mission
          </h1>
          <div className="flex relative sm:items-center md:w-3/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-900 pointer-events-none"></div>
            </div>
            <div className="flex-grow md:pl-8 pl-6 pr-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 sm:mt-0">
                <p className="leading-relaxed pb-5 text-justify">
                  Revolves around cultivating a dynamic learning environment in
                  the realm of education, specifically focused on technology
                  training. We are committed to providing a profound and
                  inclusive educational experience, transcending traditional
                  boundaries to make technological knowledge accessible to
                  individuals from diverse backgrounds.
                </p>
                <p className="leading-relaxed text-justify">
                  Beyond technical expertise, our mission extends to nurturing
                  adaptability and resilience in our learners, recognizing the
                  ever-evolving nature of technology. We aspire to empower our
                  students not only with skills but also with the ability to
                  navigate and lead in the dynamic landscape of the tech
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
          <Image
            class="object-cover object-center rounded ml-6"
            alt="hero"
            src="/img/mission.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
