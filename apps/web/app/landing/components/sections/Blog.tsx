import React from 'react';

const BlogCard = ({ image, title, date }) => (
  <div className="flex flex-col w-full">
    <img
      src={image}
      alt={title}
      className="w-full object-cover aspect-[1.56] rounded-lg"
    />
    <div className="mt-4">
      <h3 className="text-base font-medium text-black">
        {title}
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        {date}
      </p>
    </div>
  </div>
);

const Blog = () => {
  const blogs = [
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/b1f79870d148f65a13da67bdf86ecc8dd2738205?placeholderIfAbsent=true',
      title: 'Our Partnership with Ledyer',
      date: 'Jan 23, 2024'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/b380bf30abe4ce82c416c32896bf3d0d5ae6f264?placeholderIfAbsent=true',
      title: 'Our Partnership with booksalon',
      date: 'Jan 12, 2024'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/cb022851359ed5635ea976f3a345525a552f31a6?placeholderIfAbsent=true',
      title: 'Our Partnership with Vaulter',
      date: 'Nov 24, 2023'
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/ca7ec7c7d94147318bebe8b1c8ccdcac/32d26558b2f16448edcf6f36efa3c93ffe69720d?placeholderIfAbsent=true',
      title: 'Our Partnership with Vaulter',
      date: 'Nov 24, 2023'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-normal text-center mb-12">
        From our blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;