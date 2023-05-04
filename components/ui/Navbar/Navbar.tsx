import { useEffect, useState } from "react";

const Navbar = () => {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);

  async function connectToMetaMask() {
    if (window.ethereum) {
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    } else {
      console.log("Install Metamask!");
    }
  }

  useEffect(() => {
    async function getAccount() {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);
      }
    }

    getAccount();
  }, [web3]);

  function handleConnect() {
    if (window.ethereum) {
      window.ethereum.enable();
    } else {
      console.log("Install Metamask!");
    }
  }

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            SpellCasters
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-100 mr-4"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-100 mr-4"
            >
              Explore
            </a>
          </div>
          <div>
            {address ? (
              <p>Connected to wallet at {address.slice(0, 10)}...</p>
            ) : (
              <button
                onClick={handleConnect}
                className="bg-gray-700 text-gray-300 border-gray-50 hover:text-white hover:border-white font-bold py-2 px-4 rounded-lg"
              >
                Connect to Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
