'use client'
import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/navbar";

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
  const[activeProduct,setActiveProduct]=useState(0)
  const products=[
    {
      title:'Intelligent IoT Platforms',
      subtitle:'Automating Systems on the Edge, for Enhanced Operational Efficiency',
       img:'/img/impact-monitoring.png',
      services:[
        {
          title:'System on the Edge',
          desc:'We build intelligent, standalone AI solutions for diverse fields. Each system autonomously collects, processes, learns from data, and delivers predictive capabilities to optimize workflows.',
         
        },
        {
          title:'Transparent and Sustainable Integrations ',
          desc:'We drive sustainable transformation for diverse actors. Through close collaboration, we optimize operations and seamlessly integrate platforms,creating transparency that inspires user confidence.',
          
        }

      ]
    },
    {
      title:'Advanced Data Analytics ',
      subtitle:'Machine Learning Models for Real-Time Analysis and Predictive Insights',
       img:'/img/impact-monitoring.png',
      services:[
        {
          title:'Predictive Machine Learning Models',
          desc:'We develop top-notch machine learning models that induce predictability into systems for real-world applications.',
         
        },
        {
          title:'Data As A Service (DAAS)',
          desc:'Leverage our comprehensive data analytics platform to gain insights from IoT data streams across diverse fields. Our DaaS offering provides actionable intelligence to drive informed decision-making and strategic planning.',
          
        }

      ]
    },
    {
      title:'AI Consultancy & Advisory Services ',
      subtitle:'Perfection May be Elusive, but with Our Seasoned Team, Excellence is within Reach.',
      img:'/img/impact-monitoring.png',
      
      services:[
        {
          title:'Research and Development',
          desc:'Let our AIoT experts guide you from product conception to sustainable reality.',
          
        },
        {
          title:'Public and Private Partnerships',
          desc:'Through knowledge sharing, our team has been helping public and private entities unlock efficiency gains by integrating AI into production value chains.',
         
        }

      ]
    },
  ]
  return (<main>
    <div className="min-h-screen  hero bg-cover bg-top">
      <Navbar/>
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
<section className="container mx-auto px-5 lg:px-24 lg:mt-40 space-y-4 py-10 " id="about">
  <h2 className="font-bold text-4xl text-secondary text-center">About Us</h2>
  <p className="text-primary text-lg lg:max-w-[80%] text-center mx-auto">Marlin Specter iSystems stands at the forefront as the premier AIoT and Data Analytics
Partner for numerous global enterprises, SMEs, as well as key stakeholders in the digital
realm. Our goal is to disrupt the norm and usher in the future by guiding businesses
to adopt cutting-edge technologies. Leveraging our proficiency in AIoT product </p>
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
    <section className=" container mx-auto px-5 lg:px-24 py-12 bg-[#f1f7f6] " id="usecase">
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
    <section className=" container mx-auto px-5 lg:px-24 py-12 bg-white " id="products">
    <h2 className="text-black text-2xl font-semibold text-center">
        Products &amp; Services
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-4">
        {
          products.map((i,index)=>(
            <div key={index}>
              <div className={`rounded-lg px-5 py-2 ${activeProduct!==index?'border-secondary bg-white text-secondary':'bg-primary text-white'}`} onClick={()=>{setActiveProduct(index)}}>{i.title}</div>
             
             
            </div>

            
          ))
        }

      </div>

      <div>
        <div className="flex flex-col md:flex-row gap-4">
        <div className="md:babsis-1/3">
                      <img src={products[activeProduct]?.img} className="rounded-lg"/>
                      </div>
          <div>
          <p className="text-black">{products[0]?.subtitle}</p>
          {
                products[activeProduct]?.services.map((service,index)=>(
                  <div  key={index}>
                    <div>
                   
                    <div  className="shadow-lg rounded-lg p-4 bg-[#f1f7f6] my-4">
                    <h2 className="text-secondary text-lg font-semibold">{service.title}</h2>
                    <p>{service.desc}</p>
                    </div>
              
                    </div>
                   
                   
                    </div>

                ))
              }
          </div>
      
               
        </div>
  
      </div>
     

    </section>
    <section className=" container mx-auto px-5 lg:px-24 py-12 bg-[#f1f7f6] " id="whyus">
    <h2 className="text-primary text-2xl font-semibold text-center">
    Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
        <div className="shadow-md rounded-lg p-5 bg-white">
          <h3 className="text-secondary font-semibold text-center text-xl mb-2">Innovative Solutions
          </h3>
          <p className="text-md text-center text-black">We leverage the latest in IoT and AI technology to create solutions that are not only
          innovative but also practical and impactful.</p>

        </div>
        <div className="shadow-md rounded-lg p-5 bg-white">
          <h3 className="text-secondary font-semibold text-center text-xl mb-2">Community Focused
          </h3>
          <p className="text-md text-center text-black">Our projects are tailored to meet the specific needs of developing countries, ensuring
that our solutions are relevant and effective.
</p>

        </div>
        <div className="shadow-md rounded-lg p-5 bg-white">
          <h3 className="text-secondary font-semibold text-center text-xl mb-2">Sustainability Driven
          </h3>
          <p className="text-md text-center text-black">We are committed to promoting sustainability in all our endeavours, from combating
          climate change to improving agricultural practices and energy management.
</p>

        </div>

      </div>
      <h2 className="text-primary text-2xl font-semibold text-center">
      Get Involved
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-4">
        <div className="shadow-md rounded-lg p-5 bg-white">
          <h3 className="text-secondary font-semibold text-center text-xl mb-2">Partner with Us
          </h3>
          <p className="text-md text-center text-black">Join us to deploy innovative solutions and drive sustainable development in your
          community</p>

        </div>
        <div className="shadow-md rounded-lg p-5 bg-white">
          <h3 className="text-secondary font-semibold text-center text-xl mb-2">Invest in Innovation
          </h3>
          <p className="text-md text-center text-black">Support our mission by investing in our groundbreaking projects and helping us create
          a better future through technology.
</p>

        </div>
        <div className="shadow-md rounded-lg p-5 bg-white">
          <h3 className="text-secondary font-semibold text-center text-xl mb-2">Stay Informed
          </h3>
          <p className="text-md text-center text-black">Follow our journey and stay updated on the latest IoT and AI solutions advancements
          for a sustainable world.
</p>

        </div>

      </div>
    </section>
    <div className="hero bg-cover bg-center">
<section className=" h-fit flex flex-col gap-5 items-center justify-center container mx-auto px-5 lg:px-28 py-4">
  <h1 className=" text-navy-blue text-[28px] font-light text-center font-serif lg:max-w-[85%] ">
  Embrace the future, today. Partner with Marlin Specter
iSystems
<br/>


  </h1>
  <div className="flex gap-8 mb-32">
    <button className="gap-2 text-white border-[2px] border-solid bg-primary border-[#1A9988] flex items-center px-4 py-2 rounded-lg">Learn More
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

    </button>

  </div>

</section>
    </div>

  </main>
    
  );
}
