import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function Card(newsdata) {
    const navigate = useNavigate();

    const handleDetails = (e, val, i) => {
        console.log("val", val);
        navigate("/details", { state: { val } });
    };

    return (
        <>
            {/* <div className="text-center text-blue-800 text-4xl p-4 my-4">{newsdata.category}</div> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-gray-200 ">
                {newsdata.value.map((val, key) => {
                    return (
                        <>
                            <div
                                className="px-2 md:px-6 my-2 w-full flex-1 text-slate-700 dark:text-white flex flex-wrap flex-col items-center"
                                key={key}
                            >
                                <div className="max-w-xl text-left flex flex-col w-full h-full  items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
                                    <div className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md">
                                        <div className="p-2 text-blue-700 dark:text-blue-300">
                                            {val.author !== null && (
                                                <span className="text-red-500">
                                                    By {val.author},
                                                </span>
                                            )}{" "}
                                            {moment(val.publishedAt).format(
                                                "MMMM Do YYYY"
                                            )}
                                        </div>
                                        <div className="rounded-t-xl w-full h-64 shadow-sm bg-cover">
                                            <img
                                                src={val.urlToImage}
                                                alt="img"
                                                className="w-full object-cover object-center"
                                                style={{ height: "250px" }}
                                            />
                                        </div>
                                        <div
                                            className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto"
                                            onClick={(e) => {
                                                handleDetails(e, val, key);
                                            }}
                                        >
                                            <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
                                                {val.title
                                                    .split("")
                                                    .slice(0, 60)
                                                    .join("") + "..."}
                                            </h1>
                                            <p className="text-sm">
                                                {val.description != null
                                                    ? val.description
                                                          .split("")
                                                          .slice(0, 60)
                                                          .join("") + "..."
                                                    : val.description}
                                            </p>

                                            <div className="flex mt-4">
                                                <button className="transition-all duration-100 text-center p-2 rounded-md text-white w-1/2 bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:from-blue-800 hover:to-blue-600">
                                                    Details..
                                                </button>
                                                {/* <div className="flex flex-col ml-4 w-1/2">
                          <h2 className="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                            Published At
                          </h2>

                          <span className="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                            { moment(val.publishedAt).format('MMMM Do YYYY')}
                          </span>
                        </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
