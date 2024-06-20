"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss, SiNextdotjs
} from "react-icons/si";

const about = {
  title: 'About me',
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vero omnis sed mollitia cupiditate ipsam veritatis deleniti iure autem, maiores velit dolores quidem necessitatibus voluptates eaque culpa perferendis, debitis quis?",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Arsenios Chatziantoniou"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+30) 697 458 7601"
    },
    {
      fieldName: "Email",
      fieldValue: "arsenixatzi@hotmail.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "Junior"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Greek"
    },
    {
      fieldName: "Languages",
      fieldValue: "Greek, English"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaliable"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem a repellat nihil in sapiente dolore maxime explicabo, ducimus omnis asperiores sed voluptas. Ducimus eos perspiciatis molestiae facilis dolor nostrum!",
  items:
    [
      {
        company: "S.G.A G.Avramidis Software Developer",
        position: "internship Trainee",
        duration: "11/2023-05/2024"
      },
      {
        company: "Battlenet Gaming Station",
        position: "Technical Support",
        duration: "01/2019-09/2019"
      }
    ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem a repellat nihil in sapiente dolore maxime explicabo, ducimus omnis asperiores sed voluptas. Ducimus eos perspiciatis molestiae facilis dolor nostrum!",
  items:
    [
      {
        institution: "Online Course Platform/Udemy",
        degree: "Web developer Bootcamp",
        duration: "2024"
      },
      {
        institution: "KEME",
        degree: "Professional Seminars in Graphic Design",
        duration: "2024"
      },
      {
        institution: "Photoglobe",
        degree: "Professional Seminars in Adobe-Photoshop",
        duration: "2023-2024"
      },
      {
        institution: "Microsoft Code Academy",
        degree: "Developer Certification of Founcational C#",
        duration: "2023"
      },
      {
        institution: "Training Qualifications UK",
        degree: "Advanced Professional Diploma (Level 6)",
        duration: "2023"
      },
      {
        company: "IEK DELTA 360",
        degree: "Degree in Software Engineering",
        duration: "09/2021-06/2023"
      },

    ]
}
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem a repellat nihil in sapiente dolore maxime explicabo, ducimus omnis asperiores sed voluptas. Ducimus eos perspiciatis molestiae facilis dolor nostrum!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}

      className="min-h[80] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xd:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {experience.description
              }</p>
            <scrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item,index)=>{
                  return ( 
                  <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify center items-center
                  lg:items-start gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                      {item.position}
                      </h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </scrollArea>
            </div>


            </TabsContent>



            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>

          </div>

        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume; 