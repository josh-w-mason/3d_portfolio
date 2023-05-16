import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a full stack developer who likes exploring new ideas and creatively
        solving problems. Through FreeCodeCamp and Dev Academy Aotearoa, I’ve
        worked with many pieces of tech including HTML, CSS, Javascript,
        Typescript, Knex.js, Node.js, Express.js, React & Redux.⚛️🌐
        <br /> <br />
        Outside of web tech, I’m passionate about music tech and have composed
        my own songs on Cubase for many years. You can listen to my electronic
        music project ‘Umbria’ on&nbsp;
        <a
          className="underline "
          href="https://open.spotify.com/artist/2ADouHvtFd7r7Gl32W5Puq?si=173c799dd80e465a"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify ✩♬ ₊˚.🎧⋆☾⋆⁺₊✧.
        </a>
        <br /> <br />I love philosophy and psychology, too - what makes people
        tick and working out how best to spend our brief time together on this
        planet feels pretty important to me.🌏🌌
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
