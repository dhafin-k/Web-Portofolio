import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/dhafin-k'
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/dhafine-kresna-48b73a322'
    },
    {
      label: 'Whatsapp',
      href: 'https://wa.me/qr/TPHNDOGSHXV2G1'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/dhafine23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/dhafin-k'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">

             <div className="mb-10 ">
                   <h2 className="Headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                   Let&apos;s work together today! 
                   </h2>

                   <ButtonPrimary 
                   href="mailtp:dhafinekresna@gmail.com"
                   label="Start Project"
                   icon="chevron_right"
                   classes="reveal-up"
                   />
             </div>

             <div className="grid grid-cols-2 gap-4 lg:pl-20">

                <div>
                    <p className="mb-2 reveal-up">Sitemap</p>

                    <ul>{sitemap.map(({ label, href}, key) =>(
                        <li key={key}>
                            <a href={href} 
                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                            >
                                {label}
                            </a>
                        </li>
                    ))}</ul>
                </div>

                <div>
                    <p className="mb-2 reveal-up">Socials</p>

                    <ul>{socials.map(({ label, href}, key) =>(
                        <li key={key}>
                            <a 
                            href={href}
                            target="_blank" 
                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>

             </div>
             
            </div>

            <div className="flex items-center justify-center pt-10 mb-8">
                <a 
                href="/" 
                className="logo reveal-up mr-5"
                >
                    <img src="/images/logo1.svg"
                    width={30}
                    height={30}
                    alt="Logo" 
                    />
                </a>

                <p className="text-zinc-200 text-sm reveal-up">
                    &copy;2024 - <span className="text-zinc-100 reveal-up">dhafine23 all right reserved</span>
                </p>
            </div>

        </div>
    </footer>
  )
}


export default Footer