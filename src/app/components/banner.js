import { ImLinkedin } from 'react-icons/im';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';
import Link from 'next/link';

const Banner = () => {
    return ( 
        <div className="w-full lg:h-[750px] md:h-auto sm:h-auto md:mb-10 sm:mb-10 flex justify-center items-start py-2 px-5 flex-col lg:sticky lg:top-8 ml-4 rounded-lg">
            <p className="w-96 h-auto text-xs font-light text-left text-slate-300 font-oxygen-font pl-2">Hello,</p>
            <h1 className="w-96 h-auto lg:text-8xl md:text-base font-bold text-left text-yellow-custom rounded font-oxygen-font">
                Oki Dwijaya Afiq Rahmansah
            </h1>
            <p className="pl-2 font-oxygen-font font-light">I am a Fullstack Developer</p>
            <div className="flex items-start justify-start flex-row w-96 mx-0 my-6 gap-4">
                <Link href="/">
                    <ImLinkedin className="h-9 w-9 text-slate-300" />
                </Link>
                <Link href="/">
                    <FaSquareGithub className="h-10 w-10 text-slate-300" />
                </Link>
                <Link href="/">
                    <FaInstagramSquare className="h-10 w-10 text-slate-300" />
                </Link>
            </div>
        </div>
    )
}
 
export default Banner;