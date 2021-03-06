import Head from 'next/head';
import MainLayout from '@/components/MainLayout';
import RecipeCategoryCard from '@/components/Card/RecipeCategoryCard';
import RecipeCard from '@/components/Card/RecipeCard';
import CampaignSlider from '@/components/Slider/CampaignSlider';
import format from 'date-fns/format';
import { id } from 'date-fns/locale';
import CommentCard from '@/components/Card/CommentCard';
import BrandSlider from '@/components/Slider/BrandSlider';
import ArticleSlider from '@/components/Slider/ArticleSlider';
import Footer from "@/components/Nav/Footer";

export default function Home() {
  const recipeCategoryList = [
    {
      title: 'Resep Ayam',
      img: 'https://img.kurio.network/qQ1Q4CkWVe1xzU29-FGrgv2kHQE=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/c27cd268-b22e-4a3e-93f7-009e7f100696.png',
    },
    {
      title: 'Resep Ikan',
      img: 'https://img.kurio.network/TPDXnlyFmiN7iTNajfGYvNAxAW4=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/92e7b636-77d8-4de1-8fb7-f4dfe94d4486.png',
    },
    {
      title: 'Resep Tahu',
      img: 'https://img.kurio.network/3iJaDNr068FpwiMI2LL2sowak7M=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/26/3d002a88-def5-40c9-bdfe-db8607484a52.png',
    },
    {
      title: 'Resep Tempe',
      img: 'https://img.kurio.network/KQbqO5SFYgvmIwGXbhFI1nWgUdg=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/26/d2ba265b-b5db-4c1e-9b91-b17a41979a2a.png',
    },
    {
      title: 'Aneka Nasi',
      img: 'https://img.kurio.network/WT91T8Po0bWPRcFftjsXK6p7_RU=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/3c68ffd4-0426-4e9f-9655-a29fcb275dfd.png',
    },
    {
      title: 'Resep Roti',
      img: 'https://img.kurio.network/AZ2dEUf7c4sWHe1p3uIiQ4DPPAg=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/c1bfa9d2-d59e-44ef-885d-c317e5260b08.png',
    },
    {
      title: 'Resep Minuman',
      img: 'https://img.kurio.network/dNJeYqsrfVTj5tNo6993MG8N3zk=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/a61649fc-c7e3-4892-a9be-f0bcf4046526.png',
    },
    {
      title: 'Cukup 5 Bahan',
      img: 'https://img.kurio.network/RC95GbxD3ofaIYCVzJcl4MlWoRM=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/63dd71f2-c578-44c8-b805-5a148cf508ba.png',
    },
    {
      title: 'Resep Sehat',
      img: 'https://img.kurio.network/E4sOeNZ59-gx2Dzj8q1iUrar-N0=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/1da9e588-ad8b-4e9f-85da-4de54fbfd470.png',
    },
    {
      title: 'MPASI',
      img: 'https://img.kurio.network/ZGHwXa67lA8H4CNZSpzrfOde4mc=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/34af3374-54c3-440b-884a-bec57e09df6f.png',
    },
  ];

  return (
    <MainLayout>
      <Head>
        <title>Ngeunah</title>
        <meta
          name="title"
          content="Ngeunah.TV ??? Kumpulan Artikel & Video Masakan Setiap Hari"
        />
        <meta
          name="description"
          content="Perlu ide masak seru yang nggak pake ribet? Di sini tempatnya! Ada segudang resep yang bisa jadi inspirasimu tiap hari. Lihat video-video masaknya, pasti langsung pengen coba!"
        />
        <meta name="author" content="antoniusjoshua47@gmail.com" />
        <meta
          property="og:title"
          content="Ngeunah.TV ??? Kumpulan Artikel & Video Masakan Setiap Hari"
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
          {recipeCategoryList?.map((recipe) => (
            <RecipeCategoryCard
              className="w-1/5 lg:w-1/10 px-2"
              title={recipe.title}
              img={recipe.img}
            />
          ))}
        </div>
      </section>
      <section className="py-5 container mx-auto px-10">
        <h2 className="text-left pl-3 lg:text-center text-2xl lg:uppercase font-bold tracking-widest text-gray-700 mb-5">
          Menu Hari Ini
          <br />
          <small className="font-normal text-base">
            {format(new Date(), 'dd MMMM yyyy', { locale: id })}
          </small>
        </h2>
        <div
          className="container flex flex-row w-full lg:overflow-x-auto overflow-x-auto pb-5 "
          style={{ cursor: 'grab' }}
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
          <ArticleSlider/>
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
      <Footer/>
    </MainLayout>
  );
}
