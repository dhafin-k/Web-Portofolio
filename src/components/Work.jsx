import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/FIFIVAN.png',
      title: 'Facation Website',
      tags: ['Web-Design', 'Development'],
      projectLink: 'https://wisata-papuma-fifivan.vercel.app/'
    },
    {
      imgSrc: '/images/portofolio.png',
      title: 'Portofolio',
      tags: ['Web-Design'],
      projectLink: 'https://dhafine-1.vercel.app/'
    },
    {
      imgSrc: '/images/Sejati.jpg',
      title: 'Film Sejati',
      tags: ['Short-Film','Script-Writer'],
      projectLink: 'https://youtu.be/VRcdXxBjiSg?si=8F_lm2sxXitlPpXq'
    },
    {
      imgSrc: '/images/Instapost.png',
      title: 'Design Grafis',
      tags: ['Thypography','Grapic-Design',],
      projectLink: 'https://www.instagram.com/p/DAWjCdOzL5M/?igsh=MTY0Z3Z4cW1tOWM3cA=='
    },
    // {
    //   imgSrc: '/images/project-5.jpg',
    //   title: 'eCommerce website',
    //   tags: ['eCommerce', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    // },
    // {
    //   imgSrc: '/images/project-6.jpg',
    //   title: 'vCard Personal portfolio',
    //   tags: ['Web-design', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    // },
  ];

const Work = () => {
  return (
    <section 
    id="work"
    className=""
    >
        <div className="container">

            <h2 className="headline-2 mb-2 pt-6 reveal-up">
                My Portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] reveal-up">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                        />
                    ))}
            </div>

        </div>
    </section>
)
}

export default Work