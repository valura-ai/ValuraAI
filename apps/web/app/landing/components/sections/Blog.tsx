import React from "react";

const BlogCard = ({
  image,
  title,
  date,
}: {
  image: string;
  title: string;
  date: string;
}) => (
  <div className="min-w-60 w-[443px] max-md:max-w-full">
    <img
      src={image}
      alt={title}
      className="aspect-[1.56] object-contain w-[443px] max-w-full rounded-[7px]"
    />
    <div className="min-h-[68px] max-w-full w-[443px] mt-[21px]">
      <h3 className="z-10 w-full text-[21px] text-black py-0.5 max-md:pr-5">
        {title}
      </h3>
      <p className="z-10 w-full text-sm text-[rgba(150,150,150,1)] leading-[29px] mt-3 max-md:pr-5">
        {date}
      </p>
    </div>
  </div>
);

const Blog = () => {
  const blogs = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/b1f79870d148f65a13da67bdf86ecc8dd2738205?placeholderIfAbsent=true",
      title: "Our Partnership with Ledyer",
      date: "Jan 23, 2024",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/b380bf30abe4ce82c416c32896bf3d0d5ae6f264?placeholderIfAbsent=true",
      title: "Our Partnership with booksalon",
      date: "Jan 12, 2024",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/cb022851359ed5635ea976f3a345525a552f31a6?placeholderIfAbsent=true",
      title: "Our Partnership with Vaulter",
      date: "Nov 24, 2023",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/32d26558b2f16448edcf6f36efa3c93ffe69720d?placeholderIfAbsent=true",
      title: "Our Partnership with Vaulter",
      date: "Nov 24, 2023",
    },
  ];

  return (
    <section className="mt-[102px] max-md:mt-10">
      <h2 className="text-[67px] text-black font-[350] tracking-[-1.38px] max-md:text-[40px]">
        From our blog
      </h2>
      <div className="flex gap-[40px_48px] overflow-hidden font-normal mt-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
