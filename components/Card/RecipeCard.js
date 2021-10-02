import classnames from "classnames";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import ClockIcon from "@/components/Icons/ClockIcon";

export default function RecipeCard(props) {
  const isFavorite = props.favorite;
  return (
    <>
      <a className={classnames("px-2 lg:px-6", props.className)}>
        <div className="rounded-lg shadow-lg">
          <figure className="relative flex flex-col">
            {isFavorite ? (
              <div className="absolute -top-1 left-3">
                <span className="absolute left-4 top-1 z-20 text-white">1</span>
                <span className="absolute ">
                  <MdBookmark size="38" className="z-50" color="black" />
                </span>
              </div>
            ) : (
              <span />
            )}
            <picture className="w-full h-full flex justify-center items-center">
              <img
                src="https://img.kurio.network/jlhOvDAVCeITmfRW26Tt3-o0vJM=/380x380/filters:quality(80)/https://kurio-img.kurioapps.com/21/06/09/b80a7991-a1ae-4246-9060-00687e64a036.jpe"
                className="object-contain rounded-lg"
               alt="recipe-img"/>
            </picture>
            <figcaption className="hidden">Bakwan Sayur</figcaption>
          </figure>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="text-center mt-1 text-base font-bold">
              Bakwan Sayur
            </h2>
            <div className="flex flex-row text-gray-500">
              <ClockIcon />
              <span className="text-xs ml-1">15 Menit</span>
            </div>
          </div>
          <div className="pt-1">
            <MdBookmarkBorder size="20" className="z-50" />
          </div>
        </div>
      </a>
    </>
  );
}

RecipeCard.defaultProps = {
  favorite: false,
};
