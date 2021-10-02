import classnames from 'classnames';
export default function RecipeCategoryCard(props) {
  const { title, img } = props;

  return (
    <>
      <a className={classnames(props.className)}>
        <div className="rounded-lg bg-white shadow-lg">
          <figure className="relative flex flex-col">
            <picture className="w-full h-full flex justify-center items-center">
              <img src={img} className="object-contain" />
            </picture>
            <figcaption className="hidden">{title}</figcaption>
          </figure>
        </div>
        <p className="text-center mt-1 text-gray-500 text-sm">{title}</p>
      </a>
    </>
  );
}
