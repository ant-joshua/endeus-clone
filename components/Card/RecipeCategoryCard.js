import classnames from "classnames";
export default function RecipeCategoryCard(props) {
  return (
    <>
      <a className={classnames(props.className)}>
        <div className="rounded-lg bg-white shadow-lg">
          <figure className="relative flex flex-col">
            <picture className="w-full h-full flex justify-center items-center">
              <img
                src="https://img.kurio.network/qQ1Q4CkWVe1xzU29-FGrgv2kHQE=/200x200/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/15/c27cd268-b22e-4a3e-93f7-009e7f100696.png"
                className="object-contain"
              />
            </picture>
            <figcaption className="hidden">Resep Ayam</figcaption>
          </figure>
        </div>
        <p className="text-center mt-1 text-gray-500 text-sm">Resep Ayam</p>
      </a>
    </>
  );
}
