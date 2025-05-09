import React from 'react'
import Navbar from '../component.jsx/Navbar';
import { FiUser } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Testimonial from '../component.jsx/Testimonial';


const PopularSearch = [
  "Social Media Management",
  "Project Management",
  "Video Editing",
  "Development and IT services",
  "Technical writing",
  "Ghostwriting",
  "Digital Marketing",
  "Data Analysis",
  "Networking",
  "Design"
]

const Home = () => {
  return (
    <div>
        <Navbar />

        {/* Header */}
        <div className='bg-[#00235C] w-[90%] flex justify-between gap-90 p-10 m-auto mt-5 rounded-3xl' >
            <div className='w-[50%] text-left'>
                <h2 className='text-white text-4xl font-medium'>Powering projects with Africa's creative minds</h2>
                <p className='text-white mt-5 mb-5'>Facilitating secure, global connections between businesses and top creatives.</p>
                <button className='bg-white text-[#00235C] py-1.5 px-3 rounded-4xl'>Get started</button>
            </div>
            <div className='w-[50%]'>
                <img src="./coding.png" alt="Test img" className='rounded-full w-[90%]'/>
            </div>
        </div>

        {/* Section 1 */}
        <div className='bg-[#CE0724] w-[90%] flex justify-between p-10 m-auto mt-5 text-amber-50' >
            <div className="text-left w-[40%]">
              <h2 className='text-4xl font-medium'>Search for jobs</h2>
              <input type="text" className='bg-amber-50 rounded-md my-5 text-black'/>
              <br />
              <a href="#">Browse talent by categories</a>
            </div>
            <div className='w-[60%]'>
              <h2 className='text-left text-3xl font-medium mb-3'>Popular search</h2>
              <div className='flex gap-4'>
                <ul className='grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                  {PopularSearch.map((search, index) => (
                    <li className='bg-transparent rounded-3xl border-1 flex justify-center items-center p-1.5 h-fit w-auto'>
                      <p>{search}</p>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex w-[90%] m-auto gap-2.5">
          <div className='text-left w-[50%] mt-10'>
            <h2 className='text-3xl font-medium'>Sign Up to Get Job Alerts or Hire Top Talent!</h2>
              <p className='mt-5 mb-5'>
                Joining Creator Realm is completely free! Whether you're a freelancer
                looking for opportunities or a client searching for skilled professionals,
                sign up today and start connecting with the right people for your projects. 
              </p>
              <button className='bg-[#00235C] text-amber-50 p-2 rounded-3xl'>Get started for free</button>
          </div>
          <div>
            <img src="./Galaxy Tab S8 Ultra.png" alt="Galaxy Tab S8 Ultra" className='w-.5xl'/>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex w-[90%] m-auto text-white bg-[#000000] rounded-2xl h-100">
          <img src="./img1.png" alt="Image 1" className='rounded-l-2xl w-[50%]'/>
          <div className='text-left p-5 w-[50%]'>
            <h4 className='text-2xl font-medium'>Guide</h4>
            <h3 className='text-3xl font-semibold my-5'>How to Build a strong freelance proposal as an African</h3>
            <p>As remote work continues to grow in popularity across the globe, building a strong freelance profile is crucial for Africans... </p>
            <button className='bg-white py-2 px-6 text-[#10102C] mt-15 rounded-2xl'>Learn more</button>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex w-[90%] m-auto text-white my-7 h-100">
          <div className='text-left p-10 w-[60%] bg-[#000F27] rounded-tl-4xl'>
            <h2 className='text-4xl font-medium'>Explore our groundbreaking innovation.</h2>
            <p className='my-4'>We offer a suite of features designed the freelancer experience.</p>
            <ul className='my-4'>
              <li className='flex gap-4'><FiUser className='icon'/> <p>Access top-tier talent for your project effortlessly.</p></li>
              <li className='flex gap-4'><TiMessages className='icon'/> <p>Stay connected with our in-platform messaging for smooth collaboration.</p></li>
              <li className='flex gap-4'><IoBagOutline className='icon'/> <p>Our escrow system releases funds only when both parties are satisfied.</p></li>
              <li className='flex gap-4'><HiOutlinePresentationChartLine className='icon'/> <p>Our smart technology matches you with the best freelancer for your project.</p></li>
            </ul>
            <div className='flex items-center gap-4'>
              <button className='bg-transparent border-amber-50 border-1 py-2 px-3 rounded-2xl'>Learn more how to hire</button>
              <div className='flex items-center gap-2'><p>Sign up</p><FaAngleRight /></div>
            </div>
          </div>
          <img src="./img2.png" alt="" className='rounded-br-4xl w-[40%]'/>
        </div>

        {/* Testimonials starts*/}
        < Testimonial />
        {/* Testimonials ends */}

        {/* Section 5 */}
        <div className='flex w-[90%] m-auto my-7 h-100'>
          <img src="./img3.png" alt="" className='rounded-l-2xl ' />
          <div className='text-left p-10 w-[60%] bg-[#F2F7F2] rounded-r-2xl'>
          <h4 className='text-2xl font-medium'>Connect</h4>
          <h3 className='text-3xl font-semibold my-5'>Discover how our platform equips you for success.</h3>
          <ul>
            <li className='flex gap-3'>
              <IoCheckmark className='icon text-[#FC5F09]'/> 
              <p><span className='font-medium'>Client:</span> Hiring made easy. post your job, review proposals and hire effortlessly.</p>
            </li>
            <li className='flex gap-3'>
              <IoCheckmark className='icon text-[#FC5F09]'/> 
              <p><span className='font-medium'>Creator:</span> Showcase your talent. Browse jobs, summit proposals and get paid securely.</p>
            </li>
          </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className='bg-[#00235C] w-[90%] m-auto text-white p-7 rounded-2xl'>
          <div className='flex gap-30 my-5 text-left'>
              <ul>
                <h5 className="font-medium pb-3">Quick Link</h5>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
                <li>Help & Support</li>
                <li>Blog</li>
              </ul>

              <ul>
                <h5 className="font-medium pb-3">Client</h5>
                <li>How to hire</li>
                <li>Hire Talent</li>
              </ul>

              <ul>
                <h5 className="font-medium pb-3">Creator</h5>
                <li>How to find jobs</li>
                <li>Find jobs</li>
                <li>Community</li>
              </ul>
          </div>

            <div className='h-[1px] w-[100%] m-auto my-5 bg-amber-50'></div>
            <div className="flex">
              <small>Copyright &copy; 2025  Creator Realm Limited.</small>
              <ul className='flex gap-4 ml-auto'>
                <li><FaInstagram className='icon'/></li>
                <li><TiSocialFacebookCircular className='icon'/></li>
                <li><FaXTwitter className='icon'/></li>
                <li><FaWhatsapp className='icon'/></li>
              </ul>
            </div>
        </footer>
    </div>
  )
}

export default Home