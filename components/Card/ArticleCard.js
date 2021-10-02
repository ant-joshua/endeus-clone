import classnames from "classnames";
export default function ArticleCard(props) {
  return (
    <>
      <a className={classnames("px-2", props.className)}>
        <div className="rounded-lg">
          <figure className="relative flex flex-col flex-shrink-0">
            <picture className="w-full flex justify-center items-center">
              <img
                src="https://img.kurio.network/521Y6GapTrNn4jfvEfqEbSNGRoU=/320x180/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/06/f0e5a7d2-f9a3-4810-b7b4-8bc43427c51f.jpe"
                className="object-cover rounded-lg"
                alt="card-img"
              />
            </picture>
            <figcaption className="hidden">Bakwan Sayur</figcaption>
          </figure>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h2 className="mt-1 text-base font-bold">
              #RekomEndeus 7 Mesin Waffle Untuk Bisnis Croffle
            </h2>
            <div className="flex flex-row text-gray-500">
              <span className="text-xs ml-1">15 Menit</span>
            </div>
          </div>
          <div className="pt-1" />
        </div>
      </a>
    </>
  );
}
