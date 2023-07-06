

export function Card(props) {
    const { name, txt, position, imgUrl } = props
    return (
        <article className="hero-card">
            <p>{txt}</p>
            {/* display flex */}
            <div className="user-info">
                <div>
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>

                <img src={imgUrl} alt={name} />
            </div>
        </article>
    )
}