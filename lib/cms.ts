import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getData(filePath: string): unknown {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.error('Error reading content:', error);
    return null;
  }
}

export function getPost(fileName: string) {
  try {
    const fullPath = path.join(postsDirectory, `${fileName}.md`);
    console.log('fullPath', fullPath);

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      content,
      ...data,
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}
