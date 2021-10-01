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
      <section className="py-10 bg-gray-400 flex justify-center w-full ">
        <div className="flex flex-col lg:flex-row text-center px-40 w-full">
          <h2 className="w-1/3 lg:mr-2 font-bold">
            Langganan Newsletter Endeus
            <br />
            <small className="font-normal">
              Terima Resep-resep terbaru. langsung di emailmu.
            </small>
          </h2>
          <div className="w-1/3 lg:mr-4">
            <input
              type="text"
              className="w-full rounded-lg border-none focus:ring-yellow-400"
              placeholder="Masukkan Email"
            />
          </div>
          <div className="w-1/3 lg:ml-3">
            <button className="w-full rounded-lg bg-yellow-400 py-2 font-bold">
              Langganan
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 py-5 flex flex-col justify-center w-full text-center">
        <h2 className="text-xl font-normal">Ikuti Social Media Kami</h2>
        <div className="my-2">
          <p>Sapa Kami</p>
        </div>
        <div className="flex flex-col my-2">
          <p>Punya Masukan ?</p>
          <p>Atau mau ajak kerja sama ?</p>
        </div>
        <div className="flex flex-col">
          <div><a href="mailto:partner@ngeunah.tv">partner@ngeunah.tv</a></div>
          <div>0838 9253 0498</div>
        </div>
      </section>
    </MainLayout>
  );
}
