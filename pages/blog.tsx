import { getData } from '@/lib/cms';
import React from 'react';
import { GetStaticProps } from 'next';

interface BlogData {
  title?: string;
  sections: { title: string; content: string }[];
}

interface BlogPageProps {
  data: BlogData | null;
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold">{data?.title || 'Blog Post'}</h1>
      {data?.sections?.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-lg font-bold mb-2">{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = getData('content/blog/blog1.md');

  return {
    props: {
      data,
    },
  };
};

export default BlogPage;
