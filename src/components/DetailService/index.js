'use client'
import useSWR from "swr";

export default function DetailService() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { error, data, isLoading } = useSWR(
    "https://cdn.contentful.com/spaces/pbr2tlh9a5kz/environments/master/entries?access_token=PyfogagG4edVcbicQCVWNtXRWgDwK-YyTAeowL2an0A&content_type=modul",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <section class="h-full" id="DetailService">
      {data?.items.map((item, index) => {
        return (
          <div class="container px-5 py-24 mx-auto" key={index}>
            <center>
              <h1 class="text-[50px] font-medium title-font mb-2 text-gray-900">
                {item.fields.title}
              </h1>
              <div class="h-1  bg-gray-600 rounded mb-20"></div>
            </center>
          </div>
        )
      })}
    </section>
  )
}