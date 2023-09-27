
const Banner = ({ searchandle, data }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchV = e.target.search.value;
        if (searchV == "") {
            searchandle(data);
        } else {
            const isfindCard = data?.filter(
                (card) => card.category_name.toLowerCase() === searchV.toLowerCase()
            );
            console.log(isfindCard);
            if (isfindCard.length !== 0) {
                console.log('if')
                searchandle(isfindCard);
            } else {
                searchandle(data);
            }
        }
    };
    return (
        <div className="bg-center bg-cover bg-white/80 h-[70vh] bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0BRJuDid0vVSIb06U6_-CniXLrOSP87mjIk2T1nNZ-ne6zCLrrXqi0DYw')] bg-blend-screen rounded-lg">
            <div className="flex flex-col gap-5 h-full items-center justify-center ">
                <h1 className="font-bold text-xl md:text-5xl">I Grow By Helping People In Need</h1>
                <div>
                    <form onSubmit={handleSubmit} className="form-control">
                        <div className="input-group">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search…"
                                className="input input-bordered py-3 px-3 rounded-l"
                            />
                            <button className="rounded-r btn py-3 px-3 bg-[#FF444A] hover:bg-[#FF444A99]">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;