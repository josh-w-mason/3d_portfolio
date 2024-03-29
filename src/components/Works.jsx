import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployedLink,
}) => {
  ProjectCard.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    image: PropTypes.string.isRequired,
    source_code_link: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
  }

  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary mb-4 p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        ></img>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            ></img>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {' '}
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        {deployedLink && (
          <p className="text-orange-300">
            {' '}
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              View deployed site
            </a>
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {' '}
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  )
}

const Works = () => {
  // const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 500px)')

  //   setIsMobile(mediaQuery.matches)

  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches)
  //   }

  //   mediaQuery.addEventListener('change', handleMediaQueryChange)

  //   return () => {
  //     mediaQuery.removeEventListener('change', handleMediaQueryChange)
  //   }
  // }, [])

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {' '}
          Throughout my studies at Dev Academy, we were tasked with many
          different group and solo project challenges. Since then I&apos;ve been
          working on my own personal projects.
        </p>
      </div>
      <div
        className="mt-10 
        flex flex-col sm:flex-row lg:grid lg:grid-cols-3"
      >
        {' '}
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            className="py-4 w-screen sm:w-auto"
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')

// removed motion from work / projects section div as causes issues on mobile. Hopefully stable

// need to fix CSS to add spacing between cards
