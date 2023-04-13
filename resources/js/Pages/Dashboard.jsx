import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard({ auth, news }) {
    
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
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-x-auto">
                                <div className="header">
                                    <Link
                                        href={route("news.create")}
                                        className="btn btn-primary mb-1"
                                    >
                                        Create
                                    </Link>
                                </div>
                                {news.length ? (
                                    <table className="table w-full">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Author</th>
                                                <th>Category</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {news.map((data, i) => {
                                                return (
                                                    <tr key={data.id}>
                                                        <th>{i + 1}</th>
                                                        <td>{data.title}</td>
                                                        <td>{data.author}</td>
                                                        <td>{data.category}</td>
                                                        <td>
                                                            {data.description
                                                                .length >= 40
                                                                ? data.description.slice(
                                                                      0,
                                                                      40
                                                                  ) + "..."
                                                                : data.description}
                                                        </td>

                                                        <td>
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
                                                            |
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
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No news found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
