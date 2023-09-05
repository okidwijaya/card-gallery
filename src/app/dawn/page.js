"use client";
import { useEffect, useState } from "react";
import ImageBanner from "../components/ImageBanner";
import Image from "next/image";
import BigBanner from "../components/BigBanner";
import FooterV1 from "../components/FooterV1";
import HeaderV1 from "../components/HeaderV1";

const Dawn = () => {
  const [data, setData] = useState();
  const [dataCaller, setDataCaller] = useState(true);
  const [isLoading, setLoading] = useState(true);

  let urlZero;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=9"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        setData(res.results);
        console.log(res);
        urlZero = res.results[0].url;
        console.log('ada'+urlZero);
        fetch(res.results[0].url)
        .then((res) => 
            console.log(res.json())
        )
        setLoading(false);
        setDataCaller(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

    // console.log(urlZero)
    // fetch(data[0].url).then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <section className="bg-white h-full w-full">
      <HeaderV1 />
      <BigBanner />
      {data.map((data, name) => (
        <div key={name}>
          <p className="text-slate-900">{data.name}</p>
          {/* <Image
                    src={data.strMealThumb}
                    width={214}
                    height={214}
                    alt="product Image" /> */}
        </div>
      ))}
      <ImageBanner />
      <FooterV1 />
    </section>
  );
};

export default Dawn;
