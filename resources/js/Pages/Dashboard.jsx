import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard({ auth, news }) {
    console.log(news);
    function destroy(id) {
        if (confirm("Are you sure you want to delete this news?")) {
            Inertia.delete(route("news.destroy", id));
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-slate-200 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-x-auto">
                                <div className="header">
                                    <Link
                                        href={route("news.create")}
                                        className="btn btn-primary mb-3 w-full"
                                    >
                                        Create New News
                                    </Link>
                                </div>
                                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-center p-4 gap-4">
                                    {news.length ? (
                                        <>
                                            {news.map((data, i) => {
                                                const today = new Date();
                                                const newsDate = new Date(
                                                    data.created_at
                                                );
                                                // Bandingkan apakah tanggal pembuatan berita sama dengan tanggal hari ini
                                                const isNew =
                                                    today.toDateString() ===
                                                    newsDate.toDateString();

                                                return (
                                                    <div
                                                        key={i}
                                                        className="card w-full lg:w-96 bg-base-100 shadow-xl"
                                                        style={{
                                                            height: "300px",
                                                        }}
                                                    >
                                                        {/* <figure>
                    <img src="https://placeimg.com/640/480/tech" alt="Shoes" />
                </figure> */}
                                                        <div className="card-body">
                                                            <h2 className="card-title">
                                                                {data
                                                                    .title
                                                                    .length >=
                                                                20
                                                                    ? data.title.slice(
                                                                          0,
                                                                          20
                                                                      ) + "..."
                                                                    : data.title}

                                                                {isNew && (
                                                                    <div className="badge badge-success">
                                                                        NEW
                                                                    </div>
                                                                )}
                                                            </h2>
                                                            <div className="badge badge-inline">
                                                                {data.category}
                                                            </div>
                                                            <p>
                                                                {data
                                                                    .description
                                                                    .length >=
                                                                110
                                                                    ? data.description.slice(
                                                                          0,
                                                                          110
                                                                      ) + "..."
                                                                    : data.description}
                                                            </p>
                                                            <div className="card-actions justify-center">
                                                                <button
                                                                    onClick={() =>
                                                                        destroy(
                                                                            data.id
                                                                        )
                                                                    }
                                                                    className="btn btn-error"
                                                                >
                                                                    Delete
                                                                </button>

                                                                <Link
                                                                    href={route(
                                                                        "news.edit",
                                                                        data.id
                                                                    )}
                                                                    method="get"
                                                                    className="btn btn-success"
                                                                >
                                                                    Edit
                                                                </Link>
                                                                <Link
                                                                    href={route(
                                                                        "news.show",
                                                                        data.id
                                                                    )}
                                                                    method="get"
                                                                    className="btn btn-warning"
                                                                >
                                                                    Show
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        <p>No news found.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
