'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation"
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

    useEffect(() => {
        // 判斷是否要展開子清單(重新整理,至少是當前頁面的)
        const idx = menu.findIndex((item) => item.url === pathname.split("/")[1]);
        if (idx !== -1 && !showList.includes(idx)) setShowList(prev => [...prev, idx]);

        // 自動滾動到該菜單位置
        const selectedEl = document.querySelector(`.${styled.selected}`);
        if (selectedEl) selectedEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }, [pathname, menu, showList, setShowList]);

    return (
        <div>
            <div className={styled.logo}>
                <Image src={logo} alt="logo" priority />
            </div>
            <ul className={styled.sidebar} style={{ "--item-count": menu.length } as React.CSSProperties}>
                {menu.map((item, i) => (
                    <li key={i} className={styled.menuItem}>
                        <p>
                            <Image className={styled.icon} src={item.icon} alt={item.title} />
                            {item.list.length ? item.title : <Link href={`/${item.url}`}>{item.title}</Link>}
                            {item.list.length ?
                                <Image className={showList.includes(i) ? styled.trunArrow : styled.arrow} src={Arrow} alt="arrow" onClick={() => addShowList(i)} />
                                : null}
                        </p>
                        <ul className={showList.includes(i) ? styled.active : undefined}>
                            {item.list.map((list, l) => (
                                <li key={l + i} className={pathname == `/${item.url}/${list.url}` ? styled.selected : undefined}>
                                    <Link href={`/${item.url}/${list.url}`}>{list.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};