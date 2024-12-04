// import { number } from "prop-types";

const aboutItems = [
    {
      label: 'Project done',
      number: 7
    },
    {
      label: 'Years of experience',
      number: 10
    },
    {
      label: 'Sertificate',
      number: 9
    }
  ];

const About = () => {
  return (
    <section
    id="about"
    className="section">
    <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
        <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[65ch]">
        Hello, my name is Jananta Dhafine Kresnadyaksa,and I am a web developer. I specialize in creating functional and user-friendly websites that help businesses and communities thrive. I am passionate about community development and aspire to create sustainable and innovative solutions for local growth. I enjoy collaborating with others to bring ideas to life and make a positive impact through technology.
        </p>

        <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
                aboutItems.map(({ label, number }, key) => (
                    <div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                        </div>

                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                ))
            }

            <img src="/images/logo1.svg" alt="Logo" 
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40px]" 
            />
            </div>
        </div>
    </div>
    </section>
)
}

export default About