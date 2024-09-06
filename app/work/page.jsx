"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    gategory: 'frontend',
    title: 'PS VR Headset',
    description: 'This project is a website designed to showcase and promote the PlayStation VR product. It includes various sections such as a homepage, product catalog, specifications, and more. The website aims to provide users with information about the PlayStation VR headset and its features, as well as facilitate purchasing through external links.',
    stack: [
      {
        name: 'Html 5'
      },
      {
        name: 'Css3'
      },
      {
        name: 'Javascript'
      }
    ],
    image: '/assets/work/ps-vr-headset.png',
    live: 'https://vr-headset-gamma.vercel.app/',
    github: "https://github.com/DevNou/Vr-Headset",
  },
  {
    num: '02',
    gategory: 'fullstack',
    title: 'Gym Registration ',
    description: 'This project is a website designed to registration new members of a Gym. It includes various sections such as a login page,customer detaitls, and more.',
    stack: [
      {
        name: 'Html 5'
      },
      {
        name: 'Scss'
      },
      {
        name: 'TypeScript'
      }
    ],
    image: '/assets/work/regApp.png',
    live: '',
    github: "",
  },
  {
    num: '03',
    gategory: 'frontend',
    title: 'Dictionary App ',
    description: 'This project is a website designed to find words and listen them. It includes various sections such as a login page,customer detaitls, and more.',
    stack: [
      {
        name: 'Html 5'
      },
      {
        name: 'Scss'
      },
      {
        name: 'JavaScript'
      }
    ],
    image: '',
    live: 'https://dictionary-app-omega-ruddy.vercel.app/',
    github: "https://github.com/DevNou/Dictionary-App.git",
  },


]

const Work = () => {
  
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setProject(projects[newIndex]);
  };


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1,transition:{delay:2.4, duration:0.4, ease:'easeIn'} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:orded-none'>

            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* {outline} */}
              <div className="text-8xl leading-none font-extrabold text-transparent
              text-outline">{project.num}
              </div>
              {/* {category} */}
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize">
                {project.gategory} project
              </h2>
              {/* {project descr} */}
              <p className="text-white/60">{project.description}</p>
              {/* {stack} */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* {border} */}
              <div className="border border-white/20"></div>
              {/* {button} */}
              <div className="flex items-center gap-4">
                {/* {live button} */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className='text-white text-3xl
                       group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* {github} */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group">
                        <BsGithub className='text-white text-3xl
                       group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
            spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full"> 
                <div className="h-[460px] relative group flex justify-center 
                items-center bg-pink-50/20">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  {/* {image} */}
                  <div className="relative w-full h-full">
                    <Image 
                    src={project.image} 
                    fill
                     className="object-cover"
                    alt="{project.title}"
                    quality={100}
                  />
                  </div>
                </div>
                </SwiperSlide>
              })}
              {/* {slide buttons} */}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute left-0 bottom-[calc
              (22px_-_50%)] xl:bottom-0 z-20 w-full justify-between xl:w-max
              xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
              w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;