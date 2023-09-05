import Image from "next/image";
import Link from "next/link";
import canbg from "../../assets/image/qad-blog-aluminum-cans.png";

const BigBanner = () => {
    return ( 
        <section className="w-full bg-white gap-3 p-4 grid md:grid-cols-2 grid-cols-1">
            <div className="w-full rounded-3xl p-2 h-full grid grid-cols-1">
                <h1 className="font-mone w-3/4 text-slate-950 md:text-6xl 2xl:text-7xl text-5xl font-extrabold">Captivating Can Collection: Elevate Your Beverage Experience</h1>
                <Link className="bg-white h-14 w-48 text-center hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border border-gray-400 rounded shadow mt-4" href="/">Watch Now</Link>
            </div>
            <div className="w-full rounded-3xl h-[500px]">
                <div className="w-full md:h-full h-96">
                <Image 
                className="w-full h-full rounded-3xl object-cover object-top"
                src={canbg}
                width={600}
                height={400}
                alt="image banner" />
                </div>
            </div>
        </section>
     );
}
 
export default BigBanner;