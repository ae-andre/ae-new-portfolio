const blogPosts = [
  {
    id: 1,
    title: "Hungry Mikey // An interactive game for children ages 2-6 that helps them to learn about nutritional values.",
    href: "https://hungry-hungry-mikey-f614bbce79a1.herokuapp.com/",
    description:
      "An interactive game for children ages 2-6 that helps them to learn about nutritional values.",
    imageUrl:
      "https://hungry-hungry-mikey-f614bbce79a1.herokuapp.com/images/Mikey%20Gifs/homepage.gif",
    date: "Nov 16, 2024",
    datetime: "2020-11-16",
    author: {
      name: "Andre Endique",
      imageUrl:
        "https://avatars.githubusercontent.com/u/85869787?v=4",
    },
  },
  {
    id: 2,
    title: "Kumamo // An easy-to-use application that will choose your meal for you",
    href: "https://ae-andre.github.io/kumamo_food_inspiration/",
    description:
      "An easy-to-use application that will choose your meal for you",
    imageUrl:
      "https://private-user-images.githubusercontent.com/130778807/284217939-8eac9ac2-1876-4d98-8fa7-d6d98ecd377e.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA5NjQ3MzgsIm5iZiI6MTcxMDk2NDQzOCwicGF0aCI6Ii8xMzA3Nzg4MDcvMjg0MjE3OTM5LThlYWM5YWMyLTE4NzYtNGQ5OC04ZmE3LWQ2ZDk4ZWNkMzc3ZS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMyMFQxOTUzNThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMTJiZDNiZTdkNjI2MzljNmZiNGY2YWYyNTIxYjFmZWIxMTJiNGJlNGFlYTUwNDZlM2Y5NTBjOGU5MDBmOWIwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.fhqanX6rQ1urGsAbRnWpA7eBijPxlZSflzldy6L9zwY",
    date: "Aug 16, 2023",
    datetime: "2023-07-16",
    author: {
        name: "Andre Endique",
        imageUrl:
          "https://avatars.githubusercontent.com/u/85869787?v=4",
    },
  },
  {
    id: 3,
    title: "Zoocial Network API // An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    href: "https://github.com/ae-andre/zoocial-network-api?tab=readme-ov-file",
    description:
      "Zoocial Network API // An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    imageUrl:
      "https://github.com/ae-andre/zoocial-network-api/raw/main/assets/mockup%20zoocial.jpg",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    author: {
        name: "Andre Endique",
        imageUrl:
          "https://avatars.githubusercontent.com/u/85869787?v=4",
    },
  },
  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Blog section */}
        <div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              My Projects
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
