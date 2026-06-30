import React from 'react'


const AboutCCSP = () => {
  return (
    <section className='my-24'>
        <div data-aos="fade-up" className="container relative z-10">
            <div className="grid grid-cols-1 md:px-2 lg:px-0 items-center">
                <div className="space-y-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
                    <div className="relative">
                        <h1 className="text-header text-foreground text-center font-black leading-tight mb-2">
                            Committee for Community Service Program (CCSP)
                        </h1>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className="bg-background rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                            <p className='text-lg leading-relaxed text-center max-w-5xl text-foreground'>
                                The Committee for Community Service Program (CCSP) at the American University of Phnom Penh (AUPP) is a student-led initiative committed to fostering social responsibility and community engagement. Our mission is to bridge academic learning with real-world impact, empowering students to make meaningful contributions to Cambodian society through a range of community-driven projects.
                                <br /><br />
                            Our initiatives address pressing social issues, providing students with valuable hands-on experiences. By applying their knowledge in practical ways, students are able to create positive change within their communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCCSP
