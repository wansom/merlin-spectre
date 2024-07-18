'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const useCases=[
    {
      title:'Smart Agriculture',
      subtitle:"By leveraging AI and IoT, we create precision farming tools that optimise resource use,enhance crop yields, and promote sustainable farming practices. Our solutions include soil moisture sensors, drone-based monitoring, and AI-driven crop health analysis"
    },
    {
      title:'ForeBot',
      subtitle:'Our flagship IoT device monitors forest fires, logging activities, and atmospheric conditions to provide real-time data for preventive measures. We develop IoT sensors and AI algorithms to monitor environmental conditions, predict weather patterns, and provide real-time data to help communities prepare for and mitigate the impacts of climate change'
    },
    {
      title:'Education Technology',
      subtitle:'We believe in the power of education to transform lives. Our EdTech solutions use AI to personalise learning experiences, improve access to quality education, and provide tools for remote and underserved communities'
    },
    {
      title:'Security',
      subtitle:'We streamline security operations using predictive analytics allowing for proactive security measures and quicker identification of potential security breaches.'
    },
    {
      title:'Renewable Energy Management',
      subtitle:'Our energy solutions focus on harnessing renewable resources and improving energy efficiency. We offer smart grids, solar energy management systems, and AI-driven analytics to optimise energy consumption and distribution. Ensure targeted outreach and sanitation promotion that enhance sustainable water and sanitation practices for all.'
    },
    {
      title:'WASH',
      subtitle:'Ensure targeted outreach and sanitation promotion that enhance sustainable water and sanitation practices for all.'
    }
  ]
  const [hoveredIndex, setHoveredIndex] = useState(0);
  return (<main>
    <div className="min-h-screen  hero bg-cover bg-top">
      <div className="h-[120px] bg-primary">

      </div>
<section className=" h-screen flex flex-col gap-5 items-center justify-center container mx-auto px-5 lg:px-28 py-24">
  <h1 className=" text-navy-blue text-[28px] font-light text-center font-serif lg:max-w-[85%]">
  Cutting-edge AI and IoT products/services for real-world applications
Reliable Services Incorporating Data As A Service (DAAS)<br/>
<span className="text-primary">
Unlock Growth with AIoT, Data, and Expert Consulting
Research to Ideation to Product Development
</span>

  </h1>
  <div className="flex gap-8">
    <button className="text-primary border-[2px] border-solid bg-white border-[#1A9988] flex items-center px-4 py-2 rounded-lg">Learn More

    </button>
    <button className="text-white bg-primary border-[2px] border-solid border-[#1A9988] flex items-center px-4 py-2 rounded-lg">Contact Us

</button>

  </div>

</section>
<section className="container mx-auto px-5 lg:px-24 lg:mt-48 space-y-4 py-10 ">
  <h2 className=" text-xl font-semibold text-black text-center">Research, Development and Consultancy (RDC) for Agriculture,
Forestry, Education, Security, Energy, Water, Sanitation and
Hygiene (WASH)</h2>
  <div className="flex justify-between items-center flex-col md:flex-row gap-4">
    <div className="flex gap-4 items-center">
      <div className="border-primary rounded-lg p-2 text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
</div>
<div>
  <h3 className="font-semibold text-lg">
    Research
  </h3>
  <p className="text-md">Empowering Businesses with Next-Gen Technology</p>
</div>

    </div>
    <div className="flex gap-4 items-center">
      <div className="border-primary rounded-lg p-2 text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
</div>
<div>
  <h3 className="font-semibold text-lg">
    Development
  </h3>
  <p className="text-md">Your AIoT and Data Partner for the Future</p>
</div>

    </div>
    <div className="flex gap-4 items-center">
      <div className="border-primary rounded-lg p-2 text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
</div>
<div>
  <h3 className="font-semibold text-lg">
  Consultancy 
  </h3>
  <p className="text-md">Unlock Growth with AIoT, Data, and Expert Consulting.</p>
</div>

    </div>


  </div>

</section>
    </div>
    <section className=" container mx-auto px-5 lg:px-24 py-12 bg-[#f1f7f6] ">
      <h2 className="text-primary text-2xl font-semibold text-center">
        Use Cases
      </h2>
      <div className="flex flex-col md:flex-row  gap-6">
      <div className="md:basis-2/3">
      {
        useCases.map((i,index)=>(
          <div className="bg-white shadow-lg rounded-lg p-4 space-y-3 my-4" key={index} onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <h3 className="text-primary font-bold text-lg">{i.title}</h3>
          <p className={`text-black text-md ${ hoveredIndex !== index ? 'hidden' : 'block'}`}>{i.subtitle}</p>
    
        </div>
        ))
      }



    </div>
    <div className="md:basis-1/3">
    <img src="/about.png" className="rounded-lg"/>
    </div>
      </div>


    </section>
  </main>
    
  );
}
