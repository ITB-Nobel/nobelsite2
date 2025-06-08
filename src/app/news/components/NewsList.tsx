import React, {useState} from "react";
import {NewsItem} from "@/app/news/components/NewsItem";
import {DetailNewsType} from "@/lib/types";

const ITEMS_PER_PAGE = 10;

const NewsList = ({ news }: { news?: DetailNewsType[] }) => {
    const [currentPage, setCurrentPage] = useState(1);

    if (!news) return null;

    const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentNews = news.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    return (
        <section className={"container pb-12 md:pb-24"}>
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4"}>
                {currentNews.map((props, index) => (
                    <NewsItem
                        key={startIdx + index}
                        {...props}
                    />
                ))}
            </div>
            {/* Pagination */}
            <nav className="flex justify-center mt-8">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <button
                            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li key={i + 1}>
                            <button
                                className={`px-3 py-2 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                                    currentPage === i + 1
                                        ? "bg-gray-200 text-gray-700"
                                        : "bg-white text-gray-500"
                                }`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default NewsList;
