import type { NextPage } from "next";
import Image from "next/image";
import Carousel from "../components/Carousel";
import Layout from "../components/ui/Layout/Layout";
import NFTCard from "../components/ui/Card/NFTCard";
import Search from "../components/ui/Search/Search";
import CollectionCard from "../components/ui/Card/CollectionCard";

const images = [
  "https://cdn.pixabay.com/photo/2023/01/28/16/16/nostradamus-7751300_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/10/15/00/07/mage-7522249_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/01/23/22/03/wizard-7739818_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/01/03/22/55/fire-7695518_960_720.jpg",
];

const Home: NextPage = () => {
  return (
    <Layout title="SpellCasters Home">
      <div>
        {/* <section
        className="dark:text-gray-100"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Image
          src="/bg-01.jpg"
          alt="Hero Image"
          fill
          quality={100}
          object-fit="cover"
          className="opacity-40"
          style={{ zIndex: -1 }}
        />

        <div className="container flex flex-col justify-between p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              SpellCasters
              <span className="dark:text-blue-400">NFTs </span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Discover Great NFTs from Top Wizards and Sorcerers
              <br className="hidden md:inline lg:hidden" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-400 dark:text-gray-900"
              >
                Create
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="flex flex-col p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <div className="object-contain">
              <Carousel loop>
                {images.map((src, i) => {
                  return (
                    <div className="relative h-64 flex-[0_0_100%]" key={i}>
                      <Image
                        src={src}
                        width={400}
                        height={800}
                        className="object-cover"
                        alt="alt"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section> */}

        {/* Hero */}

        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/bg-01.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img src={images[0]} className="max-w-sm rounded-lg shadow-2xl" /> */}
            <div className="flex flex-col p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <div className="object-contain">
                <Carousel loop>
                  {images.map((src, i) => {
                    return (
                      <div
                        className="relative h-64 flex-[0_0_100%] max-w-sm"
                        key={i}
                      >
                        <Image
                          src={src}
                          width={400}
                          height={800}
                          className="object-cover p-2 rounded-lg shadow-2xl"
                          alt="alt"
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">
                SpellCasters
                <span className="dark:text-blue-400"> NFTs </span>
              </h1>

              <p className="py-6 text-lg">
                Discover Great NFTs from Top Wizards and Sorcerers
                <br className="hidden md:inline lg:hidden" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="btn px-8 py-3 text-lg font-semibold rounded dark:bg-blue-400 dark:text-gray-900"
                >
                  Create
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="btn px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Listing */}

        <section className="bg-secondary-500 py-24 text-gray-400 sm:px-4">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap gap-2 items-center mb-6">
              <div className="px-4 w-full md:flex-1">
                <h2 className="capitalize font-bold text-3xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="1.25em"
                    height="1.25em"
                    className="inline-block mb-2 mr-2 text-primary-500"
                  >
                    <path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23z"></path>
                  </svg>
                  <span>Featured Bids!</span>
                </h2>
              </div>

              <div className="px-4 w-full md:w-auto">
                <Search />
              </div>
            </div>

            {/* <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"> */}
            <div className="-mx-4 flex flex-wrap gap-y-6 justify-center mb-12">
              {images.map((image) => {
                return <NFTCard nft={{ _id: 1, name: "Sorcerer", image }} />;
              })}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="bg-gray-800 py-24 sm:px-4">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap gap-2 items-center mb-6">
              <div className="px-4 w-full md:flex-1">
                <h2 className="font-bold text-3xl text-white">
                  <span>Top Collections</span>
                </h2>
              </div>
              <div className="px-4 w-full md:w-auto">
                <a
                  href="#"
                  className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400"
                >
                  View More Collections
                </a>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap gap-y-6 justify-center mb-12">
              {images.slice(0, 2).map((image) => {
                return (
                  <CollectionCard
                    collection={{ name: "Sorcerer Collection", image }}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
