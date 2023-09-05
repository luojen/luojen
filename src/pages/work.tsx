import Tags from '@/app/components/Tags'
import Rows from '@/app/components/Rows'
import { useEffect, useState, Suspense, lazy } from 'react'
import { Data, Project } from '@/app/types/Data'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion"
import Layout from '@/app/components/Layout'
import Preview from '@/app/components/Preview'

export default function Work() {
  const [data, setData] = useState<Data>([]);
  const [display, setDisplay] = useState<Data>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null | undefined>(null);

  const getTags = () => {
    const tag_list: string[] = [];
    data.map(project => {
      const project_tags: string[] = project["tags"];
      project_tags.map(tag => {
        if (!tag_list.includes(tag)) tag_list.push(tag);
      });
    });
    setTags(tag_list);
  }

  useEffect(() => {
    if (data.length > 0) {
      const display_data: Data = [];
      let found_selected_project: boolean = false;
      data.map(project => {
        const project_tags: string[] = project["tags"];
        if (project_tags.includes(selectedTag)) {
          if (project.id === selectedProject?.id) found_selected_project = true;
          display_data.push(project);
        }
      });
      if (!found_selected_project && selectedProject !== null) {
        setSelectedProject(display_data[0]);
      }
      setDisplay(display_data);
    }
  }, [selectedTag]);

  useEffect(() => {
    if (data.length > 0) getTags();
    getTags();
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/csv');
        const csv = await response.json();
        setData(csv["body"]);
        setDisplay(csv["body"]);
      } catch (error) {
        console.error('Error fetching CSV data: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout className={'w-full h-full relative text-[#575757]'}>
      <div className={`lg:block ${selectedProject ? 'hidden' : 'block'} fixed left-0 ${selectedProject ? 'w-[30%]' : 'w-[100%]'} px-8 select-none`} id={'projects'}>
        <div style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}} className={"text-5xl lg:text-6xl pb-4"}>Work</div>
          <div className={`flex flex-row`}>
            <div className={'flex flex-col w-full h-full'}>
                {tags.length > 0 ? <Tags tags={tags} className={`w-full flex-1`} selectedTag={selectedTag} setSelectedTag={setSelectedTag} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/> : <TagsLoading/>}
                {tags.length <= 0 ?? <div className={`w-full h-px bg-black`}/>}
                {data.length > 0 ? <Rows data={display} className={'w-full flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar'} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/> : <RowsLoading/>}
            </div>
        </div>
      </div>
      {selectedProject ? <Preview projectData={selectedProject} className={'w-[100%] h-[100%] lg:w-[74%] absolute top-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar'} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/> : null}
    </Layout>
  )
}

function TagsLoading() {
  return (
    <div className={`w-full h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mb-3`}/>
  );
}

function RowsLoading() {
  return (
    <div className={`w-full h-16 md:h-64 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mt-3`}/>
  );
}