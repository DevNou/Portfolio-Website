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
import { Description } from '@radix-ui/react-dialog';

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
    live: '',
    github: "",
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


]





const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div>
      <div className='container mx-auto'>projects</div>
      </motion.div>
  );
};

export default Work;