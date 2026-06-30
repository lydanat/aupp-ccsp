import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'

const ClubProject = () => {
  return (
      <div className="container my-28 md:my-40">
        {/* Header Section */}
        <div data-aos="fade-up" className="flex justify-center items-center flex-col space-y-6 mb-12">
          <div className="text-center space-y-4">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
            <h1 className="relative text-header font-bold leading-snug text-foreground">
              Our Projects
            </h1>
          </div>
          </div>
          
          <p className="text-foreground subtext text-center">
            Discover a showcase of our student-led initiatives dedicated to creating positive impact and bridging academic learning with real-world experience.
          </p>
        </div>

        {/* Projects Grid */}
          <ProjectCard />
 
        <div className='my-14 items-center justify-center flex'>
        <Link href="/projects">
          <Button className="w-56 h-full rounded-full bg-[#B22234] px-8 py-4 text-base text-white hover:bg-[#B22234]/90">
            Views All Projects <ChevronRightIcon />
          </Button>
        </Link>
        </div>
      </div>

  )
}

export default ClubProject