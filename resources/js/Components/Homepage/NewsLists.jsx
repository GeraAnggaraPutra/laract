import { Inertia } from "@inertiajs/inertia";

const listNews = (news) => {
    return news.map((data, i) => {
        const today = new Date();
        const newsDate = new Date(data.created_at);
        // Bandingkan apakah tanggal pembuatan berita sama dengan tanggal hari ini
        const isNew = today.toDateString() === newsDate.toDateString();

        const handleClick = (id) => {
            Inertia.get(route('detail.news', id))
        };

        return (
            <div
                key={i}
                className="card w-full lg:w-96 bg-base-100 shadow-xl"
                onClick={() => handleClick(data.id)}
                style={{
                    height: '300px'
                }}
            >
                {/* <figure>
                    <img src="https://placeimg.com/640/480/tech" alt="Shoes" />
                </figure> */}
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        {isNew && (
                            <div className="badge badge-success">NEW</div>
                        )}
                    </h2>
                    <p>
                        {data.description.length >= 130
                            ? data.description.slice(0, 130) + "..."
                            : data.description}
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>Saat ini belum ada berita tersedia</div>;
};

const NewsLists = ({ news }) => {
    return !news ? noNews() : listNews(news);
};

export default NewsLists;
