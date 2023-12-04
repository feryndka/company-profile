"use client";

import { getUsers } from "@/api/users";
import { useEffect, useState } from "react";

export default function HomeTeam() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const params = { results: 9 };
    const response = await getUsers(params);
    setUsers(response?.data?.results ?? []);
    console.log(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section class="text-gray-600 body-font" id="HomeTeam">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-5xl text-5xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          {users?.map((user, index) => {
            return (
              <div key={index} class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center bg-gray-100 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={user.picture.thumbnail}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      {`${user.name.first} ${user.name.last}`}
                    </h2>
                    <p class="text-gray-500">Web Development</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
