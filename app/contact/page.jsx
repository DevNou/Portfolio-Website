"use client";

import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvolope, FaMapMarketAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: "(+30) 6974 58 76 01",
  },
  {
    icon: <FaEnvolope />,
    title: 'Email',
    description: "(+30) 6974 58 76 01",
  },
  {
    icon: <FaMapMarketAlt />,
    title: 'Adresss',
    description: "Panag Stauroupoli 56430",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='py-6'

    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* {form} */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-2xl text-accent">Let's officially cooperate</h3>
              <p className="text-white/60 ">
                I would like to collaborate and work in a team, in order to best serve for  partners in the field of Web development.
                Doing my best for any project.
              </p>
              <div className="grid grid-cols-1
               md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email adress"/>
                <Input type="phone" placeholder="Phone number"/>
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>                
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Graphic Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
              </Select>
              {/* {text area} */}
              <Textarea className="h-[200px]" placeholder="Type your message here."/>

            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;