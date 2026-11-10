import type { ReactNode } from "react";

type MenuSectionProps = {
    title: string;
    children: ReactNode;
};

function MenuSection({ title, children }: MenuSectionProps) {
    return (
        <section className="menu-section">
            <h2>{title}</h2>
            <div className="items">{children}</div>
        </section>
    );
}

export default MenuSection;
