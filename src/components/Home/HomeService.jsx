import Image from "next/image";

export default function HomeService() {
  return (
    <section class="text-gray-600 body-font" id="HomeService">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="text-[50px] font-medium title-font mb-2 text-gray-300">
              Our Service
            </h1>
            <div class="h-1 w-[50%] bg-green-200 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-400">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably have
            not heard of them man bun deep jianbing selfies heirloom prism food
            truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-green-200 p-6 rounded-lg">
              <Image
                class="h-40 rounded w-full object-cover object-center mb-6"
                // src="https://dummyimage.com/720x400"
                alt="content"
                width={500}
                height={500}
              />
              <h3 class="tracking-widest text-gray-500 text-xs font-medium title-font">
                TECHNOLOGY
              </h3>
              <h2 class="text-lg text-[#000] font-medium title-font mb-4">
                Web Development
              </h2>
              <p class="leading-relaxed text-gray-800 pb-5">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a class="text-gray-500 inline-flex items-center" href="/service">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-green-200 p-6 rounded-lg">
              <Image
                class="h-40 rounded w-full object-cover object-center mb-6"
                // src="https://dummyimage.com/720x400"
                alt="content"
                width={500}
                height={500}
              />
              <h3 class="tracking-widest text-gray-500 text-xs font-medium title-font">
                TECHNOLOGY
              </h3>
              <h2 class="text-lg text-[#000] font-medium title-font mb-4">
                Data Science
              </h2>
              <p class="leading-relaxed text-gray-800 pb-5">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a class="text-gray-500 inline-flex items-center" href="/service">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-green-200 p-6 rounded-lg">
              <Image
                class="h-40 rounded w-full object-cover object-center mb-6"
                // src="https://dummyimage.com/720x400"
                alt="content"
                width={500}
                height={500}
              />
              <h3 class="tracking-widest text-gray-500 text-xs font-medium title-font">
                TECHNOLOGY
              </h3>
              <h2 class="text-lg text-[#000] font-medium title-font mb-4">
                UI/UX Design
              </h2>
              <p class="leading-relaxed text-gray-800 pb-5">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a class="text-gray-500 inline-flex items-center" href="/service">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-green-200 p-6 rounded-lg">
              <Image
                class="h-40 rounded w-full object-cover object-center mb-6"
                // src="https://dummyimage.com/720x400"
                alt="content"
                width={500}
                height={500}
              />
              <h3 class="tracking-widest text-gray-500 text-xs font-medium title-font">
                TECHNOLOGY
              </h3>
              <h2 class="text-lg text-[#000] font-medium title-font mb-4">
                Digital Marketing
              </h2>
              <p class="leading-relaxed text-gray-800 pb-5">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a class="text-gray-500 inline-flex items-center" href="/service">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
