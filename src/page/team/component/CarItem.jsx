export default function CardItem( { name, title, image} ) {
    return (
        <div className="wrap">
            <div className="cover">
                <img src="{image}" alt="" />
            </div>
            <div className="info">
                <div className="name">{name}</div>
                <p className="title">{title}</p>
            </div>
        </div>
    )
}