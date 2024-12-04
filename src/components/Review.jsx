// Node Modules
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// import { element } from "prop-types";


// Register gsap Plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";
 
const reviews = [
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Kiana',
    imgSrc: '/images/kiana.jpeg',
    company: 'Hyperion'
  },
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Raiden Mei',
    imgSrc: '/images/mei.jpeg',
    company: 'Hyperion'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Sentience',
    imgSrc: '/images/senti1.jpeg',
    company: 'Hyperion'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Artoria Pendragon',
    imgSrc: '/images/saber.jpeg',
    company: 'Knight of the Round Table'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'HanNajib',
    imgSrc: '/images/Han.jpeg',
    company: 'Undefined'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Kirito',
    imgSrc: '/images/Kirito.jpeg',
    company: 'Aincard'
  } 
];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger:'.scrub-slide',
        start:'-200% 80%',
        end:'400% 80%',
        scrub:true
      },
      x: '-1000',
    });
  },[]);

  return (
    <section
    id="reviews"
    className="section overflow-hidden"
    > 
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          What our customers say
        </h2>
      </div>

      <div className="container ">

            <div className="scrub-slide flex items-stretch gap-3 w-fit">
              {
                reviews.map(({ content, name, imgSrc, company}, key)=> (
                  <ReviewCard 
                  key={key}
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
                />
              ))}
            </div>

      </div>  
    </section>
  )
}

export default Review