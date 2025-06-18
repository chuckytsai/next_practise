import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styled from "./sidebar.module.scss";
import logo from "/public/logo/webLogo.png";
import Arrow from "/public/iconSvg/arrow.svg";

// 子項目
interface SubItem {
    title: string;
    url: string;
};

// 每頁項目
interface MenuItem {
    icon: string;
    title: string;
    url: string;
    list: SubItem[];
};

export default function Sidebar({ showList, setShowList, menu }:
    {
        menu: MenuItem[];
        showList: number[];
        setShowList: React.Dispatch<React.SetStateAction<number[]>>;
    }) {
    const pathname = usePathname();

    // 展開子清單
    const addShowList = (idx: number) => {
        setShowList(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
    };

    return (
        <div>
            <div className={styled.logo}>
                <Image src={logo} alt="logo" loading="lazy" />
            </div>
            <ul className={styled.sidebar} style={{ "--item-count": menu.length } as React.CSSProperties}>
                {menu.map((item, i) => (
                    <li key={i} className={styled.menuItem}>
                        <p>
                            <Image className={styled.icon} src={item.icon} alt={item.title} loading="lazy" />
                            {item.list.length ? item.title : <Link href={`/${item.url}`}>{item.title}</Link>}
                            {item.list.length ?
                                <Image className={showList.includes(i) ? styled.trunArrow : styled.arrow} src={Arrow} alt="arrow" onClick={() => addShowList(i)} loading="lazy" />
                                : null}
                        </p>
                        <ul className={showList.includes(i) ? styled.active : undefined}>
                            {item.list.map((list, l) => (
                                <li key={l + i} className={pathname == `/${item.url}/${list.url}` ? styled.selected : undefined}>
                                    <Link href={`/${item.url}/${list.url}`} prefetch>{list.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};