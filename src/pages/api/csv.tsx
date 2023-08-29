import fs from 'fs'
import path, { parse } from 'path'
import Papa from "papaparse"
import { Data, Project } from '@/app/types/Data';

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'work_data.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const parsedContent = Papa.parse(fileContent, {
    header: true
  });
  const body: Data = parsedContent.data as Data;
  // parse tags
  for (const project of body) {
    const tags_unparsed = project.tags.toString();
    const tags_split = tags_unparsed.split(',');
    const tags_parsed = tags_split.map(tag => tag.trim()); 
    project.tags = tags_parsed;
  }
  const response = {
    body: body,
    message: "Succesfully accessed database", 
  };
  res.status(200).json(response);
}
