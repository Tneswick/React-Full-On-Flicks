function Header() {
    return (
        <div className="header-wrapper">
            <a className="header-link" href="#">
                <h1 className="header-text">
                🎞️🍿Full On Flicks🎬🎥
                </h1>
            </a>
            <form>
                <input type="text" className="search">
                    Search for Movies or TV Shows
                </input>
                <input type="submit" className="search-btn">
                    SEARCH
                </input>
            </form>
        </div>
    )
}