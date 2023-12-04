import Link from "next/link";

export default function Footer() {
    return (
        <footer class="text-gray-600 body-font bg-[#abd1c6]">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-[#004643] tracking-widest text-sm mb-3">HOME</h2>
                        <div class="list-none mb-10">
                            <li class="pb-1">
                                <a href="/" class="text-gray-500 hover:text-gray-800">
                                    Company
                                </a>
                            </li>
                            <li class="pb-1">
                                <a href="#HomeTeam" class="text-gray-500 hover:text-gray-800">
                                    Team
                                </a>
                            </li>
                            <li class="pb-1">
                                <a href="#HomeService" class="text-gray-500 hover:text-gray-800">
                                    Service
                                </a>
                            </li>
                            <li class="pb-1">
                                <a href="#HomeTestimonials" class="text-gray-500 hover:text-gray-800">
                                    Testimonials
                                </a>
                            </li>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-[#004643] tracking-widest text-sm mb-3">ABOUT</h2>
                        <div class="list-none mb-10">
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">First Link</a>
                            </li>
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">Second Link</a>
                            </li>
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-500 hover:text-gray-800" href="#">Fourth Link</a>
                            </li>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-[#004643] tracking-widest text-sm mb-3">SERVICE</h2>
                        <div class="list-none mb-10">
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">First Link</a>
                            </li>
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">Second Link</a>
                            </li>
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-500 hover:text-gray-800" href="#">Fourth Link</a>
                            </li>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-[#004643] tracking-widest text-sm mb-3">TEAM</h2>
                        <div class="list-none mb-10">
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">First Link</a>
                            </li>
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">Second Link</a>
                            </li>
                            <li class="pb-1">
                                <a class="text-gray-500 hover:text-gray-800" href="#">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-500 hover:text-gray-800" href="#">Fourth Link</a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Technology Company</p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}