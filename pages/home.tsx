import { getData } from '@/lib/cms';
import React from 'react';
import { GetStaticProps } from 'next';

interface HomeData {
  title?: string;
  sections: { title: string; content: string }[];
}

interface HomePageProps {
  data: HomeData | null;
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div className="p-20">
      <h1>HOME</h1>
      <h5 className="text-2xl font-bold">{data?.title}</h5>
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
  const data = getData('content/home/home.md');

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
