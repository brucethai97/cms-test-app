import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
