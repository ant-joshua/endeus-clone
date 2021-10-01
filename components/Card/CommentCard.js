import Image from "next/image";
import classname from "classnames";

export default function CommentCard(props) {
  const { className } = props;

  return (
    <a className={classname("", className)}>
      <div
        className={classname(
          "flex flex-col border bg-gray-100 shadow-lg  rounded-lg"
        )}
      >
        {/*  */}
        <div className="flex flex-col bg-white p-5 rounded-xl z-10 ">
          <div className="flex flex-row">
            <div className="rounded-full mr-2">
              <img
                className="rounded-full h-10 w-10"
                src="https://img.kurio.network/gXnbjqJ440FmfZ9RLFI9zPhCQhs=/80x80/filters:quality(80)/https://kurio-img.kurioapps.com/21/08/10/0d078725-4255-412e-9142-3207da94e4a2.png"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm">Antonius Joshua</span>
              <span className="text-xs">6 Jam yang lalu</span>
            </div>
          </div>
          <p className="mt-2 text-sm">Ini makanan apa, niiih???</p>
        </div>
        {/* div 2 */}
        <div className="w-full flex flex-row px-5 py-2  ">
          <div className="h-8 w-8 relative rounded-lg overflow-hidden">
            <Image
              layout={"fill"}
              alt="Background"
              src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
          <div className="pl-3 py-2 text-gray-500 text-sm">
            Daun Ubi Tumbuk ala Tapanuli
          </div>
        </div>
      </div>
    </a>
  );
}
