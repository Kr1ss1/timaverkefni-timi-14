type MenuItemProps = {
    name: string;
    description: string;
    price: number;
    isVegan?: boolean;
};

function MenuItem({ name, description, price , isVegan}: MenuItemProps) {
    return (
        <article className="menu-item">
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="price">{price}kr.</p>
            <p>{isVegan && <span className="badge">Vegan</span>}</p>
        </article>
    );
}

export default MenuItem;