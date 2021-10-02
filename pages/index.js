import Head from "next/head";
import MainLayout from "@/components/MainLayout";
import RecipeCategoryCard from "@/components/Card/RecipeCategoryCard";
import RecipeCard from "@/components/Card/RecipeCard";
import CampaignSlider from "@/components/Slider/CampaignSlider";
import format from "date-fns/format";
import { id } from "date-fns/locale";
import CommentCard from "@/components/Card/CommentCard";
import ArticleCard from "@/components/Card/ArticleCard";
import BrandSlider from "@/components/Slider/BrandSlider";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Ngeunah</title>
        <meta
          name="title"
          content="Ngeunah.TV — Kumpulan Artikel & Video Masakan Setiap Hari"
        />
        <meta
          name="description"
          content="Perlu ide masak seru yang nggak pake ribet? Di sini tempatnya! Ada segudang resep yang bisa jadi inspirasimu tiap hari. Lihat video-video masaknya, pasti langsung pengen coba!"
        />
        <meta name="author" content="antoniusjoshua47@gmail.com" />
        <meta
          property="og:title"
          content="Ngeunah.TV — Kumpulan Artikel & Video Masakan Setiap Hari"
          key="title"
        />
        <meta
          property="og:description"
          content="Perlu ide masak seru yang nggak pake ribet? Di sini tempatnya! Ada segudang resep yang bisa jadi inspirasimu tiap hari. Lihat video-video masaknya, pasti langsung pengen coba!"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="py-10 container mx-auto px-10">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-extrabold tracking-widest text-gray-700 mb-5">
          Kategori Resep
        </h2>
        <div className="container flex flex-row flex-wrap justify-around lg:justify-evenly">
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
          <RecipeCategoryCard className="w-1/5 lg:w-1/10 px-2" />
        </div>
      </section>
      <section className="py-5 container mx-auto px-10">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-bold tracking-widest text-gray-700 mb-5">
          Menu Hari Ini
          <br />
          <small className="font-normal text-base">
            {format(new Date(), "dd MMMM yyyy", { locale: id })}
          </small>
        </h2>
        <div
          className="container flex flex-row w-full lg:overflow-x-auto overflow-x-auto pb-5 "
          style={{ cursor: "grab" }}
        >
          <RecipeCard
            className="w-3/5 min-w-3/5 lg:w-1/3 lg:min-w-1/3"
            favorite={true}
          />
          <RecipeCard className="w-3/5 min-w-3/5 lg:w-1/3 lg:min-w-1/3" />
          <RecipeCard className="w-3/5 min-w-3/5 lg:w-1/3 lg:min-w-1/3" />
          <RecipeCard className="w-3/5 min-w-3/5 lg:w-1/3 lg:min-w-1/3" />
          <RecipeCard className="w-3/5 min-w-3/5 lg:w-1/3 lg:min-w-1/3" />
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-yellow-400 font-bold px-3 py-2 rounded-md">
            Lihat Menu Lainnya
          </button>
        </div>
      </section>
      <section className="py-5 w-full">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-bold tracking-widest text-gray-700 mb-5">
          Campaign & Activity
        </h2>
        <CampaignSlider />
      </section>
      <section className="py-5 container mx-auto px-10">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-bold tracking-widest text-gray-700 mb-5">
          Resep Terpopuler
        </h2>
        <div className="flex flex-row w-full flex-wrap pb-5">
          <RecipeCard className="w-1/2  lg:w-1/4" />
          <RecipeCard className="w-1/2  lg:w-1/4" />
          <RecipeCard className="w-1/2  lg:w-1/4" />
          <RecipeCard className="w-1/2  lg:w-1/4" />
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-yellow-400 font-bold px-3 py-2 rounded-md">
            Lihat Menu Lainnya
          </button>
        </div>
      </section>
      <section className="py-5 container mx-auto px-10">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-bold tracking-widest text-gray-700 mb-5">
          Semua Resep
        </h2>
        <div className="flex flex-row w-full pb-5 flex-wrap ">
          <RecipeCard className="w-1/2  lg:w-1/4" />
          <RecipeCard className="w-1/2  lg:w-1/4" />
          <RecipeCard className="w-1/2  lg:w-1/4" />
          <RecipeCard className="w-1/2  lg:w-1/4" />
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-yellow-400 font-bold px-3 py-2 rounded-md">
            Lihat Menu Lainnya
          </button>
        </div>
      </section>
      <section className="py-5 w-full container mx-auto px-10">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-bold tracking-wider text-gray-700 mb-5">
          Testi/Diskusi Terbaru
        </h2>
        <div className="flex flex-row  overflow-x-scroll lg:overflow-x-hidden">
          <CommentCard className="w-full flex-shrink-0 px-1  lg:w-1/3 lg:px-2" />
          <CommentCard className="w-full flex-shrink-0 px-1 lg:w-1/3 lg:px-2" />
          <CommentCard className="w-full flex-shrink-0 px-1 lg:w-1/3 lg:px-2" />
        </div>
      </section>
      <section className="py-5 container mx-auto px-10">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-bold tracking-wider text-gray-700 mb-5">
          Artikel Terbaru
        </h2>
        <div className="flex flex-row flex-wrap">
          <ArticleCard className="w-1/2 lg:w-1/4" />
          <ArticleCard className="w-1/2 lg:w-1/4" />
          <ArticleCard className="w-1/2 lg:w-1/4" />
          <ArticleCard className="w-1/2 lg:w-1/4" />
        </div>
      </section>
      <section className="py-5 container mx-auto px-10">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-bold tracking-wider text-gray-700 mb-5">
          Official Partner
        </h2>

        <div className="w-full flex">
          <BrandSlider />
        </div>
      </section>
      <footer className="text-gray-600 body-font bg-gray-400">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <img className="object-contain hidden lg:block" src="https://endeus.tv/static/img/brand/endeus_logo.svg" alt="logo" />
            <img className="object-contain block lg:hidden" src="https://endeus.tv/static/img/brand/endeus_logo-m.svg" alt="logo" />
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">RESEP</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-red-300" href="#">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="#">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="#">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="#">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">HOW-TO</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-red-300" href="#">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="#">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="#">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-red-300" href="#">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Langganan Newsletter Endeus</h2>
              <small className="font-normal text-white">Terima Resep-resep terbaru. langsung di emailmu.</small>
              <div className="relative text-gray-700">
                <input className="w-full rounded-lg border-none focus:ring-yellow-400" type="text" placeholder="Email" />
                <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-yellow-400 rounded-r-lg font-bold">Langganan </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-600">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">© {new Date().getFullYear()} Ngeunah — <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@Ngeunah</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-200">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-200">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-200">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-200">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}
