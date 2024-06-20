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
      company : "S.G.A G.Avramidis Software Developer Company",
      position: "internship Trainee",
      duration : "11/2023-05/2024"
      },
      {
        company : "Battlenet Gaming Station",
        position: "Technical Support",
        duration : "01/2019-09/2019"
        }
    ]
}

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem a repellat nihil in sapiente dolore maxime explicabo, ducimus omnis asperiores sed voluptas. Ducimus eos perspiciatis molestiae facilis dolor nostrum!",
  items:
    [
      {
      company : "S.G.A G.Avramidis Software Developer Company",
      position: "internship Trainee",
      duration : "11/2023-05/2024"
      },
      {
        company : "Battlenet Gaming Station",
        position: "Technical Support",
        duration : "01/2019-09/2019"
        }
    ]
}


const Resume = () => {
  return (
    <div>resume page</div>
  )
}

export default Resume; 