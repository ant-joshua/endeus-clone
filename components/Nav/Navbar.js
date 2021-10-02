import Link from "next/link";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";
import { FcPhoneAndroid } from "react-icons/fc";
export default function Navbar() {
  return (
    <>
      <div className="hidden lg:flex w-full h-auto border-b border-gray-100 ">
        <div className="container mx-auto px-4 flex flex-row justify-between py-2">
          <div className="flex flex-row justify-around">
            <div className="text-gray-400 text-sm flex flex-row">
              <FcPhoneAndroid size="20" /> Download Ngeunah Apps
            </div>
            <div className="ml-5 text-gray-400 text-sm">partner@ngeunah.tv</div>
            <div className="ml-5 text-gray-400 text-sm">0813 2230 7975</div>
          </div>

          <div className="flex flex-row justify-around">
            <div className="pr-3">Ikuti Kami</div>
            <div className="pr-3">
              <FacebookIcon />
            </div>
            <div className="pr-3">
              <InstagramIcon />
            </div>
            <div className="pr-3">
              <YoutubeIcon />
            </div>
          </div>
        </div>
      </div>
      <nav
        className=" mx-auto px-4 flex flex-col items-center bg-white shadow-lg"
        style={{ zIndex: "200 !important" }}
      >
        <div className="container flex w-full justify-between py-3 h-20">
          <img
            className="object-contain hidden lg:block"
            src="https://endeus.tv/static/img/brand/endeus_logo.svg"
            alt="logo"
          />
          <img
            className="object-contain block lg:hidden"
            src="https://endeus.tv/static/img/brand/endeus_logo-m.svg"
            alt="logo"
          />
          <div className="w-3/4 mt-2 lg:mt-1 lg:w-full pl-3  lg:mr-5">
            <input
              type="text"
              className="bg-gray-100 rounded-lg border-none focus:ring-yellow-400 py-1 lg:py-3 px-2 sm:w-full wd:w-full lg:w-full"
              placeholder="Cari Resep Ngeunah"
            />
          </div>

          <div className="flex justify-center ml-2 mr-2 mt-1">
            <button className="rounded-full h-10 w-10 flex items-center justify-center lg:w-full lg:rounded lg:py-1 bg-yellow-300 relative ">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                className="lg:mr-1 lg:ml-2"
              >
                <path
                  d="M12.04 5.434a2.99 2.99 0 0 1 2.986 2.986 2.99 2.99 0 0 1-2.986 2.987A2.99 2.99 0 0 1 9.054 8.42a2.99 2.99 0 0 1 2.986-2.986m0 7.24a4.257 4.257 0 0 0 4.253-4.254 4.257 4.257 0 0 0-4.253-4.253A4.257 4.257 0 0 0 7.787 8.42a4.257 4.257 0 0 0 4.253 4.253m5.945 7.105a9.458 9.458 0 0 1-.538.396c-.17.113-.346.215-.522.318-.086.05-.171.106-.26.153-.237.13-.483.246-.733.355-.035.015-.069.033-.103.048-.27.114-.547.214-.828.304-.022.007-.043.016-.066.022a9.844 9.844 0 0 1-.836.217c-.035.007-.067.018-.103.024a9.901 9.901 0 0 1-.809.125c-.054.005-.106.018-.16.022a9.61 9.61 0 0 1-1.973 0c-.056-.005-.112-.018-.168-.023-.27-.033-.54-.07-.802-.123-.04-.008-.076-.021-.115-.03a9.844 9.844 0 0 1-.822-.21c-.029-.01-.059-.023-.088-.032a9.802 9.802 0 0 1-.804-.295c-.045-.02-.089-.043-.134-.063a9.64 9.64 0 0 1-.702-.338c-.103-.056-.199-.119-.299-.178-.162-.095-.326-.189-.482-.293a9.978 9.978 0 0 1-.579-.425c-.05-.04-.103-.074-.152-.114a9.555 9.555 0 0 1-.703-.628c1.21-2.183 3.895-3.622 6.836-3.622 2.941 0 5.627 1.439 6.836 3.622-.225.221-.459.43-.7.625-.061.05-.126.094-.19.143M12.04 2.267c5.389 0 9.773 4.384 9.773 9.773 0 2.256-.776 4.33-2.064 5.986-1.517-2.394-4.429-3.905-7.709-3.905-3.28 0-6.192 1.51-7.709 3.905a9.723 9.723 0 0 1-2.064-5.986c0-5.389 4.384-9.773 9.773-9.773m8.09 17.26a10.982 10.982 0 0 0 2.95-7.487C23.08 5.953 18.128 1 12.04 1 5.952 1 1 5.953 1 12.04c0 2.89 1.125 5.516 2.95 7.486.007.011.013.024.023.034.02.022.043.04.063.061.203.215.414.418.633.614.067.06.132.123.199.18.19.165.39.319.592.469.106.08.21.163.319.239.154.106.315.202.473.301.162.1.322.205.489.297.1.055.205.101.307.154.229.115.455.232.69.332.035.015.074.026.11.041a10.916 10.916 0 0 0 5.32.775c1.08-.109 2.12-.38 3.102-.79.022-.008.047-.015.068-.024.246-.105.485-.227.723-.349.09-.047.185-.088.275-.137.174-.096.343-.207.514-.313.15-.094.302-.183.447-.284.115-.08.225-.168.338-.253.196-.147.388-.295.574-.453.07-.062.14-.128.209-.191a11 11 0 0 0 .626-.607c.02-.021.043-.04.063-.062.01-.01.016-.023.023-.034"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              <span className="hidden lg:block mr-2 font-bold">
                Masuk/Daftar
              </span>
            </button>
          </div>
        </div>
        <ul className="container pb-5 pt-3 flex flex-row w-full justify-evenly ">
          <li>
            <Link href="/">
              <a className="cursor-pointer px-3 py-2 leading-5 text-sm lg:text-sm uppercase font-semibold text-gray-500">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="curson-pointer px-3 py-2 leading-5 text-sm lg:text-sm uppercase font-semibold text-gray-500 relative">
                Resep
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="cursor-pointer px-3 py-2 leading-5 text-sm lg:text-sm uppercase font-semibold text-gray-500">
                HOW-TO
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="cursor-pointer px-3 py-2 leading-5 text-sm lg:text-sm uppercase font-semibold text-gray-500">
                Updates
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
