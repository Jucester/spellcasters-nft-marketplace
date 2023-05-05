import { NextPage } from "next";
import Layout from "../../components/ui/Layout/Layout";

import Image from "next/image";

const images = [
  "https://cdn.pixabay.com/photo/2023/01/28/16/16/nostradamus-7751300_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/10/15/00/07/mage-7522249_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/01/23/22/03/wizard-7739818_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/01/03/22/55/fire-7695518_960_720.jpg",
];

const NFTDetail: NextPage<any> = (props) => {
  return (
    <>
      <Layout title={props.name}>
        {/* <section className="w-11/2 md:4/5 h-screen m-auto flex items-center">
          <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-10 items-center">
            <div className="relative">
              <img
                id="image"
                className="w-full h-full"
                src={images[0]}
                alt=""
              />
              <div className="arrows w-full absolute inset-y-1/2 flex justify-between px-3">
                <button id="prev">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button id="next">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="space-y-5 p-5">
              <h1 className="text-3xl font-bold"> Sorcerer </h1>
              <div>
                <a
                  href="#"
                  className="hover:text-gray-500 inline-flex italic items-center space-x-2 text-gray-400 text-sm"
                >
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop"
                    className="border-4 border-white rounded-full"
                    alt="..."
                    width="36"
                    height="36"
                  />
                  <span>Owned by Milo</span>
                </a>
              </div>
              <h2 className="text-xl font-bold">ETH: 0.244 </h2>
              <p className="text-ml font-bold">Description</p>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore illo, natus rem debitis impedit error blanditiis nobis
                repellendus provident assumenda id. Qui, laudantium.
              </p>
              <div className="space-y-5">
                <input
                  className="w-24 h-8 px-3 border border-gray-600 outline-0"
                  type="number"
                  id="amount"
                />
              </div>
              <div className="flex items-center space-x-5">
                <button className="flex items-center space-x-2 border border-rose-400 px-5 py-2 rounded-md hover:bg-rose-400 hover:text-white">
                  <i className="fa-regular fa-heart text-xl"></i>
                  <span> Buy </span>
                </button>
                <button className="flex items-center space-x-2 border border-rose-400 px-5 py-2 rounded-md text-black  hover:bg-white hover:border hover:border-gray-600">
                  <i className="fa-solid fa-cart-shopping text-xl"></i>
                  <span>Add to Favorites </span>
                </button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="text-gray-700 body-font overflow-hidde">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200"
                src={images[0]}
              />

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div>
                  <a
                    href="#"
                    className="hover:text-gray-500 inline-flex italic items-center space-x-2 text-gray-400 text-sm"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop"
                      className="border-4 border-white rounded-full"
                      alt="..."
                      width="36"
                      height="36"
                    />
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      Owned by Milo
                    </h2>
                  </a>
                </div>

                <h1 className="text-gray-300 text-3xl title-font font-medium mb-1">
                  The Sorcerer
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
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
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed text-gray-50">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-300">
                    0.244 ETH
                  </span>
                  <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">
                    Bid
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                  <p className="text-gray-300"> 10 Favorites </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NFTDetail;
