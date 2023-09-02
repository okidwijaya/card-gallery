import { ImLinkedin } from 'react-icons/im';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';
import Link from 'next/link';

const Banner = () => {
    return ( 
        <div className="w-full h-screen flex justify-center items-start py-2 pl-3 flex-col">
            <p className="w-96 h-auto text-xs font-light text-left text-slate-300 font-oxygen-font pl-2">Hello,</p>
            <p className="w-96 h-auto text-8xl font-bold text-left text-slate-300 rounded font-oxygen-font">
                Oki Dwijaya Afiq Rahmansah
            </p>
            <p className="pl-2 font-oxygen-font font-light">I am a Fullstack Developer</p>
            <div className="flex items-center justify-center flex-row w-60 mx-auto my-6 gap-4">
                <Link href="/">
                    <ImLinkedin className="h-9 w-9" />
                </Link>
                <Link href="/">
                    <FaSquareGithub className="h-10 w-10" />
                </Link>
                <Link href="/">
                    <FaInstagramSquare className="h-10 w-10" />
                </Link>
            </div>
        </div>
    )
}
 
export default Banner;