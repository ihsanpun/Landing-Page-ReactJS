import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/Home.css"
import Tutors from "../components/Tutors"
import Partners from "../components/Partners"
import { homeSection } from "../data/HomeSection"
import { courseSection } from "../data/CourseSection"
import { tutorsSection, tutorsList } from "../data/TutorsSection"
import { contactSection } from "../data/ContactSection"

import AOS from 'aos';
import 'aos/dist/aos.css';
import parse from 'html-react-parser'
import { partnersSection, partnerList } from "../data/PartnersSection"
import Contact from "../components/Contact"
import { useEffect } from "react"
function Home() {
  useEffect(()=>{
    AOS.init({})
  },[])
  return (
    <>
    <Navbar />
    <div className="wrapper">
    <section id="home">
            <img src={homeSection.image} data-aos="fade-right" data-aos-duration="2000" className="home-image"/>
            <div className="kolom" data-aos="fade-left" data-aos-duration="2000">
                {parse(homeSection.content)}
            </div>
        </section>

        <section id="courses">
            <div className="kolom" data-aos="fade-right" data-aos-duration="2000">
              {parse(courseSection.content)}
            </div>
            <img src={courseSection.image} data-aos="fade-left" data-aos-duration="2000" className="home-image"/>
        </section>
        <section id="tutors" data-aos="zoom-out-up" data-aos-duration="2000">
            <div className="tengah">
                <div className="kolom" >
                 {parse(tutorsSection.content)}
                </div>
                <Tutors listTutor={tutorsList}/>
            </div>
         </section>

           <section id="partners" data-aos="zoom-out-up" data-aos-duration="2000">
            <div className="tengah">
                <div className="kolom">
                  {parse(partnersSection.content)}
                </div>
                <Partners listPartner={partnerList} />
            </div>
        </section>

    </div>
    <Contact listContact={contactSection}/>
    <Footer />
    </>
  )
}

export default Home
