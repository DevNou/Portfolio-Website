"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss, 
} from "react-icons/si";

const about = {
  title: 'About me',
  description: "I am a Web Developer graduated from IEK Delta 360 in Thessaloniki. I have knowledge of web applications, programming languages, and web services — including API,CSS3, HTML5, JavaScript, TypeScript, Angular, jQuery, Git, Docker, REST, and Graphic Design skills. I am understanding of full-stack web, including protocols and web server optimization standards with intermediate level experience. Excited to connect and learn from experienced professionals in the field.",

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
  description: "",
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
  description: "",
  items:
    [
      {
        institution: "Online Course Platform-Udemy",
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
        degree: "Certification of Founcational C#",
        duration: "2023"
      },
      {
        institution: "Training Qualifications UK",
        degree: "Advanced Professional Diploma (Level 6)",
        duration: "2023"
      },
      {
        institution: "IEK DELTA 360",
        degree: "Degree in Software Engineering",
        duration: "09/2021-06/2023"
      },
    ]
}
const courses = {
  icon: "/assets/resume/cap.svg",
  title: "My courses",
  description: "",
  items:
    [
      {
        institution: "Online Platform",
        degree: "Bussines in the digital age",
        duration: "2024"
      },
      {
        institution: "Online Platform",
        degree: "Branding mockup in graphic design",
        duration: "2023"
      },
      {
        institution: "Online Platform",
        degree: "Personality Marketing",
        duration: "2023"
      },
      {
        institution: "Thessaloniki Chamber of Commerce",
        degree: "Cyber Secutiry-Social Media",
        duration: "2022"
      },
      {
        institution: "Online Platform",
        degree: "GDPR ib bussiness",
        duration: "2022"
      },
      {
        institution: "Online Platform",
        degree: "Marketing",
        duration: "2022"
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
      icon: <SiNextdotjs/>,
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
            <TabsTrigger value="courses">Courses</TabsTrigger>
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
                    {experience.items.map((item, index) => {
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
              <div className="flex flex-col gap-[30px] text-center xd:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description
                  }</p>
                <scrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify center items-center
                  lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </scrollArea>
              </div>
            </TabsContent>


            <TabsContent value="courses" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xd:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {courses.description}
                  </p>
                <scrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {courses.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify center items-center
                  lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </scrollArea>
              </div>
            </TabsContent>


            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-autp xl:mx-0">
                    {skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100} >
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>


            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >{
                about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0 ">
                  {about.info.map((item,index)=>{
                    return (<li key={index} className="flex items-center justify-center md:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-md">{item.fieldValue}</span>
                    </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume; 