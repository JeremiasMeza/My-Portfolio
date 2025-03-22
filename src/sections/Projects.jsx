import React from 'react'
import { motion } from 'framer-motion'
import { projectData } from '../projectData'

const Projects = () => {
    return (
        <div className='mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col  gap-10 sm:gap-16 items-center justify-center'
        id='projects'>
            
            <motion.h1
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8}}
            className='text-4xl sm:text-6xl'
            >My projects</motion.h1>

            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6 w-full'>
                
            </motion.div>
        </div>
    )
}

export default Projects