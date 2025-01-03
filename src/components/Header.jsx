// Node Modules
import { useState } from "react"

// Components
import Navbar from "./Navbar"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed flex top-0 left-0 w-full h-20 items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">

            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/"
                        className="Logo"
                    >
                        {/* <img src="/public/images/logo1.svg" 
                    width={40}
                    height={40}
                    alt="dhafine23" /> */}
                        <svg width="40" height="40" viewBox="0 0 301 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="logo1" d="M0 165H64.5V176.5L65.5 187L66.5 193L68 200L70 207.25C70 207.25 71.5934 212.075 73 215C74.7853 218.712 78.5 224 78.5 224C78.5 224 82.8675 230.297 86 234C89.3102 237.913 95 243.5 95 243.5L104.5 252.5L115 260.5L127.5 267C127.5 267 135.549 271.374 141 273.5C146.698 275.722 156 278 156 278L166.5 280L176.5 281.5C176.5 281.5 183.817 281.67 188.5 281.5C195.16 281.258 198.881 280.781 205.5 280C210.985 279.353 219.5 278 219.5 278L230 275.75L237.5 273.5L249 269L261 262.5C261 262.5 269.562 257.144 274.5 253C276.512 251.311 279.5 248.5 279.5 248.5L282.5 246L286.5 242.5L289.875 239.125L293.25 235.75L300.5 228V303L291 308.5L282.5 313.5L272.5 318L261 323L245.5 328.5L230 332.5L214 336C214 336 204.894 337.569 199 338C191.795 338.526 180.5 338 180.5 338L162 337L145 335L129.5 331.5L117 327L106 322.25L95 317.5L78.5 308.5L64.5 298.5L48 284C48 284 40.5713 277.695 36.5 273C32.5594 268.455 27.5 260.5 27.5 260.5L21 250L15 239L9 226.5L4.5 213.5C4.5 213.5 3.58579 209.691 3 207.25C2.41421 204.809 1.94506 203.47 1.5 201C1.08131 198.676 0.75 195 0.75 195L0.375 191.75L0 187V165Z" fill="url(#paint0_linear_89_2)" />
                            <path className="logo2" d="M239 0.5L300 21V182C300 182 299.684 186.927 299 190C298.423 192.593 297 196.5 297 196.5L295 203C295 203 293.5 207 292 210C291.261 211.479 289.653 214.223 288 217C286.781 219.048 284.5 222 284.5 222L280.5 227L274 234.5L263 245L255 250.5L243.5 256L233.5 260L221.5 262.5L208.5 264.5L203.5 265L196.5 265.127L190.5 265L187 264.75L183.5 264.5L178 263.5L174.5 262.75L170 261.5L166.25 260.25L161.5 258.5L156.75 256.75C156.75 256.75 153.804 255.809 152 255C150.287 254.231 147.75 253 147.75 253C147.75 253 145.089 251.501 143.5 250.5C141.906 249.495 139.625 247.625 139.625 247.625L135.75 244.75L131.875 241.875L128 239L134.5 241L139 242.5C139 242.5 141.424 243.453 143 244C144.838 244.638 147.75 245.5 147.75 245.5L150 246L152.5 246.5L157 247L161 247.5C161 247.5 163.743 247.625 165.5 247.625C167.257 247.625 170 247.5 170 247.5L174 247L182 245L189 243L196.5 240L202.5 237L207.5 234L214.5 229L219.5 224.5L225.5 217.5L230 210.5L233 204L235.5 197.5L237 192.5C237 192.5 238.147 190.031 238.5 186.5C239 181.5 239 178.5 239 178.5V128V0.5Z" fill="white" />
                            <path className="logo3" d="M151.034 165C151.034 165 145.211 139.581 134.895 127.109C124.579 114.637 108 105.96 108 105.96C132.414 93.6238 134.897 91.8614 151.034 76C167.172 90.9802 175.034 96.7079 192 105.52C192 105.52 176.276 114.772 166.345 127.109C156.414 139.446 151.034 165 151.034 165Z" fill="url(#paint1_linear_89_2)" />
                            <defs>
                                <linearGradient id="paint0_linear_89_2" x1="150" y1="197" x2="150" y2="338" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#63BBFF" />
                                    <stop offset="1" stopColor="#1C649B" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_89_2" x1="150" y1="76" x2="150" y2="165" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#63BBFF" />
                                    <stop offset="1" stopColor="#1C649B" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen} />
                </div>
                <a href="#contact"
                    className="btn btn-secondary max-md:hidden md:justify-self-end"
                >Contact me</a>

            </div>
        </header>
    )
}

export default Header