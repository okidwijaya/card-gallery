import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "../../assets/image/placeholder-square.jpg"
import angular from"../../assets/image/angular.svg";
import react from"../../assets/image/react.svg";

const Gallery = () => {
  return (
    <div className="max-w-screen-md h-screen mx-auto my-auto p-5 flex flex-col items-center justify-center">
      <div className="max-w-screen-md h-auto mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 rounded-md">
        <div className="grid gap-4 h-fit">
          <div className="h-max">
          <Link
              href="/dawn"
              className="h-max block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-600">
                NextJs 13 version
              </h5>
              <p className="mb-3 text-gray-700 dark:text-slate-400 font-thin font-oxygen-font">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
              </p>
            </Link>
          </div>
          <div className="h-max">
            <Link
              href="/"
              className="h-max block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-600">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 text-gray-700 dark:text-slate-400 font-thin font-oxygen-font">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
              </p>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 h-fit">
          <div className="h-max">
            <Link
              href="/"
              className="h-max block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
              <Image alt="angular" src={react} width={214} height={214} />
              <p className="mt-3 mb-3 font-light font-oxygen-font text-gray-700 dark:text-slate-400">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
              </p>
            </Link>
          </div>
          <div className="h-max">
            <Link
              href="/"
              className="h-max block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
              <Image alt="angular" src={angular} width={214} height={214} />
              <p className="mb-3 text-gray-700 dark:text-slate-400 font-thin font-oxygen-font">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
              </p>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 h-fit">
          <div className="h-max">
            <Link
              href="/"
              className="h-max block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-600">
                Noteworthy technology acquisitions 2021
              </h5>
            </Link>
          </div>
          <Link
              href="/"
              className="h-max block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-600">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 text-gray-700 dark:text-slate-400 font-thin font-oxygen-font">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
              </p>
          </Link>
        </div>
      </div>
      {/* <Link
        href="#"
        className="w-full flex flex-col mt-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  -gray-800 dark:hover:bg-gray-700"
      >
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={PlaceholderImage}
          width={500}
          height={700}
          alt="image alt"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-600">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 text-gray-700 dark:text-slate-400 font-thin font-oxygen-font">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </Link> */}
    </div>
  );
};

export default Gallery;
