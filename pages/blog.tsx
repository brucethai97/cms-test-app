import { getPost } from '@/lib/cms';
import React from 'react';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

interface BlogData {
  [key: string]: any;
}

interface BlogPageProps {
  data: BlogData | null;
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  console.log('data blog:', data);
  return (
    <div className="p-20">
      <h1>BLOG</h1>
      <ReactMarkdown>{data?.content || 'No content available.'}</ReactMarkdown>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = getPost('blog1');

  return {
    props: {
      data,
    },
  };
};

export default BlogPage;
