import Link from 'next/link';
import FacebookIcon from '@/components/Icons/FacebookIcon';
import InstagramIcon from '@/components/Icons/InstagramIcon';
import YoutubeIcon from '@/components/Icons/YoutubeIcon';
import AccountIcon from '@/components/Icons/AccountIcon';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

import { FcPhoneAndroid } from 'react-icons/fc';
export default function Navbar() {
  return (
    <>
      <div className="hidden lg:flex w-full h-auto border-b border-gray-100 ">
        <div className="container mx-auto px-4 flex flex-row justify-between py-2">
          <div className="flex flex-row justify-around">
            <div className="text-gray-400 text-sm flex flex-row">
              <FcPhoneAndroid size="20" /> Download Ngeunah Apps
            </div>
            <div className="ml-5 text-gray-400 text-sm flex flex-row">
              <AiOutlineMail size="20" className="mr-1" /> partner@ngeunah.tv
            </div>
            <div className="ml-5 text-gray-400 text-sm flex flex-row">
              <AiOutlineWhatsApp size="20" className="mr-1" /> 0813 2230 7975
            </div>
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
        style={{ zIndex: '200 !important' }}
      >
        <div className="container flex w-full justify-between py-3 h-20">
          <img
            className="object-contain hidden lg:block"
            src="https://endeus.tv/static/img/brand/endeus_logo.svg"
          />
          <img
            className="object-contain block lg:hidden"
            src="https://endeus.tv/static/img/brand/endeus_logo-m.svg"
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
              <AccountIcon />
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
