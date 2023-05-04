import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Web3 from "web3";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import Footer from "../components/ui/Footer/Footer";
import Layout from "../components/ui/Layout/Layout";

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
                <form>
                  <div className="bg-gray-600 border-gray-600 flex overflow-hidden">
                    <input
                      className="appearance-none flex-1 outline-none px-4 py-1 text-gray-600 w-full"
                      placeholder="Find your next NFT"
                      type="text"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-2 rounded-full text-white to-primary-400"
                      aria-label="search"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="1.25em"
                        height="1.25em"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"> */}
            <div className="-mx-4 flex flex-wrap gap-y-6 justify-center mb-12">
              <div class="px-3 w-full md:w-6/12 lg:w-4/12 max-w-sm">
                <div class="bg-opacity-10 bg-white overflow-hidden rounded-xl text-gray-500">
                  <a href="#" class="block group relative">
                    <img
                      src={images[2]}
                      className="group-hover:opacity-90 w-full h-48 object-cover rounded-md"
                      alt="..."
                      width="600"
                      height="600"
                    />
                    <div class="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white">
                      <span>2908</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="1.35em"
                        height="1.25em"
                      >
                        <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </div>
                  </a>

                  <div class="px-4 py-6 sm:px-6">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-xl">
                        <a href="#" class="hover:text-primary-100 text-white">
                          Sorcerer
                        </a>
                      </h3>

                      <div className="flex items-center mt-2.5 mb-5">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>

                      {/* <a
                      class="hover:text-primary-100 inline-block rounded-full text-white"
                      href="#"
                      aria-label="add to favorite"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="2em"
                        height="2em"
                      >
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                      </svg>
                    </a> */}
                    </div>
                    <hr class="my-4 opacity-20" />

                    <div class="flex items-center justify-between">
                      <div>
                        <a
                          href="#"
                          class="hover:text-gray-500 inline-flex italic items-center space-x-2 text-gray-400 text-sm"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop"
                            class="border-4 border-white rounded-full"
                            alt="..."
                            width="36"
                            height="36"
                          />
                          <span>Owned by Milo</span>
                        </a>
                      </div>
                      <div>
                        <a href="#" class="group inline-block text-white">
                          <p class="group-hover:text-primary-100 mb-1 text-gray-400 text-sm">
                            Bid Now
                          </p>
                          <span class="font-bold font-serif text-xl">
                            0.244 ETH
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-3 w-full md:w-6/12 lg:w-4/12 max-w-sm">
                <div class="bg-opacity-10 bg-white overflow-hidden rounded-xl text-gray-500">
                  <a href="#" class="block group relative">
                    <img
                      src={images[3]}
                      className="group-hover:opacity-90 w-full h-48 object-cover rounded-md"
                      alt="..."
                      width="600"
                      height="600"
                    />
                    <div class="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white">
                      <span>2908</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="1.35em"
                        height="1.25em"
                      >
                        <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </div>
                  </a>

                  <div class="px-4 py-6 sm:px-6">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-xl">
                        <a href="#" class="hover:text-primary-100 text-white">
                          Sorcerer
                        </a>
                      </h3>

                      <div className="flex items-center mt-2.5 mb-5">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>

                      {/* <a
                      class="hover:text-primary-100 inline-block rounded-full text-white"
                      href="#"
                      aria-label="add to favorite"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="2em"
                        height="2em"
                      >
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                      </svg>
                    </a> */}
                    </div>
                    <hr class="my-4 opacity-20" />

                    <div class="flex items-center justify-between">
                      <div>
                        <a
                          href="#"
                          class="hover:text-gray-500 inline-flex italic items-center space-x-2 text-gray-400 text-sm"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop"
                            class="border-4 border-white rounded-full"
                            alt="..."
                            width="36"
                            height="36"
                          />
                          <span>Owned by Milo</span>
                        </a>
                      </div>
                      <div>
                        <a href="#" class="group inline-block text-white">
                          <p class="group-hover:text-primary-100 mb-1 text-gray-400 text-sm">
                            Bid Now
                          </p>
                          <span class="font-bold font-serif text-xl">
                            0.244 ETH
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-3 w-full md:w-6/12 lg:w-4/12 max-w-sm">
                <div class="bg-opacity-10 bg-white overflow-hidden rounded-xl text-gray-500">
                  <a href="#" class="block group relative">
                    <img
                      src={images[0]}
                      className="group-hover:opacity-90 w-full h-48 object-cover rounded-md"
                      alt="..."
                      width="600"
                      height="600"
                    />
                    <div class="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white">
                      <span>2908</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="1.35em"
                        height="1.25em"
                      >
                        <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </div>
                  </a>

                  <div class="px-4 py-6 sm:px-6">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-xl">
                        <a href="#" class="hover:text-primary-100 text-white">
                          Sorcerer
                        </a>
                      </h3>

                      <div className="flex items-center mt-2.5 mb-5">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>

                      {/* <a
                      class="hover:text-primary-100 inline-block rounded-full text-white"
                      href="#"
                      aria-label="add to favorite"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="2em"
                        height="2em"
                      >
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                      </svg>
                    </a> */}
                    </div>
                    <hr class="my-4 opacity-20" />

                    <div class="flex items-center justify-between">
                      <div>
                        <a
                          href="#"
                          class="hover:text-gray-500 inline-flex italic items-center space-x-2 text-gray-400 text-sm"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop"
                            class="border-4 border-white rounded-full"
                            alt="..."
                            width="36"
                            height="36"
                          />
                          <span>Owned by Milo</span>
                        </a>
                      </div>
                      <div>
                        <a href="#" class="group inline-block text-white">
                          <p class="group-hover:text-primary-100 mb-1 text-gray-400 text-sm">
                            Bid Now
                          </p>
                          <span class="font-bold font-serif text-xl">
                            0.244 ETH
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-3 w-full md:w-6/12 lg:w-4/12 max-w-sm">
                <div class="bg-opacity-10 bg-white overflow-hidden rounded-xl text-gray-500">
                  <a href="#" class="block group relative">
                    <img
                      src={images[1]}
                      className="group-hover:opacity-90 w-full h-48 object-cover rounded-md"
                      alt="..."
                      width="600"
                      height="600"
                    />
                    <div class="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white">
                      <span>2908</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="1.35em"
                        height="1.25em"
                      >
                        <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </div>
                  </a>

                  <div class="px-4 py-6 sm:px-6">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-xl">
                        <a href="#" class="hover:text-primary-100 text-white">
                          Sorcerer
                        </a>
                      </h3>

                      <div className="flex items-center mt-2.5 mb-5">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>

                      {/* <a
                      class="hover:text-primary-100 inline-block rounded-full text-white"
                      href="#"
                      aria-label="add to favorite"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="2em"
                        height="2em"
                      >
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                      </svg>
                    </a> */}
                    </div>
                    <hr class="my-4 opacity-20" />

                    <div class="flex items-center justify-between">
                      <div>
                        <a
                          href="#"
                          class="hover:text-gray-500 inline-flex italic items-center space-x-2 text-gray-400 text-sm"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop"
                            class="border-4 border-white rounded-full"
                            alt="..."
                            width="36"
                            height="36"
                          />
                          <span>Owned by Milo</span>
                        </a>
                      </div>
                      <div>
                        <a href="#" class="group inline-block text-white">
                          <p class="group-hover:text-primary-100 mb-1 text-gray-400 text-sm">
                            Bid Now
                          </p>
                          <span class="font-bold font-serif text-xl">
                            0.244 ETH
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full h-48 object-cover rounded-md"
                  src={images[3]}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl mt-4 font-semibold tracking-tight text-gray-900 dark:text-white">
                    Sorcerer
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-1xl text-blue-200 font-bold">
                    0.244 ETH
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Bid
                  </a>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </section>

        <section class="bg-gray-800 py-24 sm:px-4">
          <div class="container mx-auto px-4">
            <div class="-mx-4 flex flex-wrap gap-2 items-center mb-6">
              <div class="px-4 w-full md:flex-1">
                <h2 class="font-bold text-3xl text-white">
                  <span>Top Collections</span>
                </h2>
              </div>
              <div class="px-4 w-full md:w-auto">
                {" "}
                <a
                  href="#"
                  class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400"
                >
                  View More Collections
                </a>
              </div>
            </div>
            <div class="-mx-3 flex flex-wrap gap-y-6 justify-center mb-12">
              <div class="px-3 w-full md:w-6/12">
                {" "}
                <a
                  href="#"
                  class="block group overflow-hidden relative rounded-xl"
                >
                  <img
                    src={images[0]}
                    class="group-hover:opacity-90 w-full"
                    alt="..."
                    width="750"
                    height="450"
                  />
                  <div class="absolute bg-gray-900 bg-opacity-75 bottom-0 flex group-hover:bg-opacity-60 inset-x-0 items-center justify-between p-4 text-white sm:px-6">
                    <h3 class="font-bold">Sorcerer</h3>
                    <span class="italic opacity-75">ETH 100000+</span>
                  </div>
                </a>
              </div>
              <div class="px-3 w-full md:w-6/12">
                {" "}
                <a
                  href="#"
                  class="block group overflow-hidden relative rounded-xl"
                >
                  <img
                    src={images[0]}
                    class="group-hover:opacity-90 w-full"
                    alt="..."
                    width="750"
                    height="450"
                  />
                  <div class="absolute bg-gray-900 bg-opacity-75 bottom-0 flex inset-x-0 items-center justify-between p-4 text-white sm:px-6">
                    <h3 class="font-bold">Sorcerer</h3>
                    <span class="italic opacity-75">ETH 100000</span>
                  </div>
                </a>
              </div>
            </div>
            {/* 
          <div class="-mx-3 flex flex-wrap gap-y-6 justify-center mb-12">
            <div class="px-3 w-full sm:w-6/12">
              <h2 class="font-bold mb-6 text-2xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1.25em"
                  height="1.25em"
                  class="inline-block mb-2 mr-2 text-primary-500"
                >
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
                </svg>
                <span>Top Sorcerers</span>
              </h2>

              <div class="-mx-3 flex flex-wrap gap-y-2">
                <div class="px-3 w-full xl:w-6/12">
                  {" "}
                  <a
                    class="gap-4 group inline-flex items-center text-white"
                    href="#"
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1594136976553-38699ae9047c?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=100&h=100&fit=crop"
                      class="border border-4 border-primary-500 group-hover:border-primary-700 rounded-lg"
                      height="64"
                      alt="Author image"
                      width="64"
                    />{" "}
                    <div>
                      <h3 class="font-bold text-xl">Kaawesome</h3>
                      <p class="mb-0 opacity-50 text-black-50">$ 100,000+</p>
                    </div>
                  </a>
                </div>
                <div class="px-3 w-full xl:w-6/12">
                  {" "}
                  <a
                    class="gap-4 group inline-flex items-center text-white"
                    href="#"
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1637717256696-a0204d03a8fe?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=100&h=100&fit=crop"
                      class="border border-4 border-primary-500 group-hover:border-primary-700 rounded-lg"
                      height="64"
                      alt="Author image"
                      width="64"
                    />{" "}
                    <div>
                      <h3 class="font-bold text-xl">Maxina</h3>
                      <p class="mb-0 opacity-50 text-black-50">$ 100,000+</p>
                    </div>
                  </a>
                </div>
                <div class="px-3 w-full xl:w-6/12">
                  {" "}
                  <a
                    class="gap-4 group inline-flex items-center text-white"
                    href="#"
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1632570695117-633536e178ff?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=100&h=100&fit=crop"
                      class="border border-4 border-primary-500 group-hover:border-primary-700 rounded-lg"
                      height="64"
                      alt="Author image"
                      width="64"
                    />{" "}
                    <div>
                      <h3 class="font-bold text-xl">StoneWs</h3>
                      <p class="mb-0 opacity-50 text-black-50">$ 100,000+</p>
                    </div>
                  </a>
                </div>
                <div class="px-3 w-full xl:w-6/12">
                  {" "}
                  <a
                    class="gap-4 group inline-flex items-center text-white"
                    href="#"
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1501023956373-055b874f2929?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMyMnx8ZGlnaXRhbCUyMGFydGlzdHxlbnwwfHx8fDE2Mzg5NDQyMTM&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=100&h=100&fit=crop"
                      class="border border-4 border-primary-500 group-hover:border-primary-700 rounded-lg"
                      height="64"
                      alt="Author image"
                      width="64"
                    />{" "}
                    <div>
                      <h3 class="font-bold text-xl">Noonving</h3>
                      <p class="mb-0 opacity-50 text-black-50">$ 100,000+</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="px-3 w-full sm:w-6/12">
              <h2 class="font-bold mb-6 text-2xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1.25em"
                  height="1.25em"
                  class="inline-block mb-2 mr-2 text-primary-500"
                >
                  <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                </svg>
                <span>Top Buyers</span>
              </h2>
              <div class="-mx-3 flex flex-wrap gap-y-2">
                <div class="px-3 w-full xl:w-6/12">
                  {" "}
                  <a
                    class="gap-4 group inline-flex items-center text-white"
                    href="#"
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1635244621620-ccadff2eb29d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE2ODZ8fGRpZ2l0YWwlMjBhcnRpc3R8ZW58MHx8fHwxNjM4OTQ0NjY1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=100&h=100&fit=crop"
                      class="border border-4 border-primary-500 group-hover:border-primary-700 rounded-lg"
                      height="64"
                      alt="Author image"
                      width="64"
                    />{" "}
                    <div>
                      <h3 class="font-bold text-xl">TinkerRed</h3>
                      <p class="mb-0 opacity-50 text-black-50">$ 100,000+</p>
                    </div>
                  </a>
                </div>
                <div class="px-3 w-full xl:w-6/12">
                  {" "}
                  <a
                    class="gap-4 group inline-flex items-center text-white"
                    href="#"
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1637234852730-677079a9d718?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDV8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8fHwxNjM4ODI2MzM4&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=100&h=100&fit=crop"
                      class="border border-4 border-primary-500 group-hover:border-primary-700 rounded-lg"
                      height="64"
                      alt="Author image"
                      width="64"
                    />{" "}
                    <div>
                      <h3 class="font-bold text-xl">Sixtemsat</h3>
                      <p class="mb-0 opacity-50 text-black-50">$ 100,000+</p>
                    </div>
                  </a>
                </div>
                <div class="px-3 w-full xl:w-6/12">
                  {" "}
                  <a
                    class="gap-4 group inline-flex items-center text-white"
                    href="#"
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1613483811459-1c4bb7a234f6?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDU5fHxhcnRpc3R8ZW58MHx8fHwxNjM4OTQzNDkz&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=100&h=100&fit=crop"
                      class="border border-4 border-primary-500 group-hover:border-primary-700 rounded-lg"
                      height="64"
                      alt="Author image"
                      width="64"
                    />{" "}
                    <div>
                      <h3 class="font-bold text-xl">Automex</h3>
                      <p class="mb-0 opacity-50 text-black-50">$ 100,000+</p>
                    </div>
                  </a>
                </div>
                <div class="px-3 w-full xl:w-6/12">
                  {" "}
                  <a
                    class="gap-4 group inline-flex items-center text-white"
                    href="#"
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1634114382698-00e5e4693b37?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwNzB8fGRpZ2l0YWwlMjBhcnRpc3R8ZW58MHx8fHwxNjM4OTQ0NDk1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=100&h=100&fit=crop"
                      class="border border-4 border-primary-500 group-hover:border-primary-700 rounded-lg"
                      height="64"
                      alt="Author image"
                      width="64"
                    />{" "}
                    <div>
                      <h3 class="font-bold text-xl">Ballogen</h3>
                      <p class="mb-0 opacity-50 text-black-50">$ 100,000+</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              href="#"
              class="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400"
            >
              View Leaderboard
            </a>
          </div> */}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
