import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: "Design Tool"
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/alight-motion.png',
      label: 'Alight Motion',
      desc: 'Design Tool'
    },
    { 
      imgSrc: '/public/images/Mysql.svg',
      label: 'MySQL',
      desc: 'Databases'
    },
    {
      imgSrc: '/images/laravel.svg',
      label: 'laravel',
      desc: 'Php Framework'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'JS Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/public/images/Vitejs.svg',
      label: 'Vite',
      desc: 'Service'
    },
    {
      imgSrc: '/public/images/Php.svg',
      label: 'Php',
      desc:'Backend'
    },
  ];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
            Essential Tools I use
            </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
                skillItem.map(({ imgSrc, label, desc }, key) =>
                    (
                        <SkillCard 
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        classes="reveal-up"
                        />
                    ))
            }
        </div>

        </div>
    </section>
)
}

export default Skill