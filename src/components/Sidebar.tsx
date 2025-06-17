'use client';

import { useState } from "react";
import Image from "next/image";
import styled from "./sidebar.module.scss";
import CilSpeedometer from "/public/iconSvg/cil-speedometer.svg";
import CilContact from "/public/iconSvg/cil-contact.svg";
import CilRestaurant from "/public/iconSvg/cil-restaurant.svg";
import CilNotes from "/public/iconSvg/cil-notes.svg";
import CilTruck from "/public/iconSvg/cil-truck.svg";
import CilTimer from "/public/iconSvg/cil-av-timer.svg";
import CilAperture from "/public/iconSvg/cil-aperture.svg";
import CilMoney from "/public/iconSvg/cil-money.svg";
import CilChart from "/public/iconSvg/cil-chart-line.svg";
import CilClipboard from "/public/iconSvg/cil-clipboard.svg";
import CilUser from "/public/iconSvg/cil-user.svg";
import Cilcalendar from "/public/iconSvg/cil-calendar.svg";
import Arrow from "/public/iconSvg/arrow.svg"

export default function Sidebar() {
    // 全部菜單
    const menu = [
        {
            icon: CilSpeedometer,
            title: "Dashboard",
            list: []
        },
        {
            icon: CilContact,
            title: "使用者管理",
            list: [{
                title: "店家管理"
            },
            {
                title: "運補員管理"
            },
            {
                title: "群組與權限設定"
            },
            {
                title: "操作設定"
            }]
        },
        {
            icon: CilRestaurant,
            title: "菜單管理",
            list: [{
                title: "菜單總覽"
            },
            {
                title: "餐點時段設定"
            }]
        },
        {
            icon: CilTimer,
            title: "預定/結單 管理",
            list: []
        },
        {
            icon: Cilcalendar,
            title: "店家排程",
            list: []
        },
        {
            icon: CilClipboard,
            title: "訂單管理",
            list: [{
                title: "櫃取訂單"
            },
            {
                title: "外帶訂單"
            }]
        },
        {
            icon: CilMoney,
            title: "財務管理",
            list: [{
                title: "匯款設定"
            },
            {
                title: "發票設定"
            }]
        },
        {
            icon: CilNotes,
            title: "報表管理",
            list: [{
                title: "對帳單"
            },
            {
                title: "銷售報表"
            }]
        },
        {
            icon: CilTruck,
            title: "運補管理",
            list: [{
                title: "補貨單管理"
            },
            {
                title: "機台商品"
            }]
        },
        {
            icon: CilChart,
            title: "行銷管理",
            list: [{
                title: "行銷活動"
            },
            {
                title: "手機推撥"
            },
            {
                title: "APP推撥"
            }]
        },
        {
            icon: CilAperture,
            title: "機器管理",
            list: [{
                title: "機台設定"
            },
            {
                title: "機器通知"
            },
            {
                title: "機器輪撥"
            },
            {
                title: "機台預定實況表"
            }]
        },
        {
            icon: CilUser,
            title: "會員管理",
            list: []
        },
    ];

    const [showList, setShowList] = useState<number[]>([]);

    const addShowList = (idx: number) => {
        setShowList(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );
    };

    return (
        <ul className={styled.sidebar} style={{ "--item-count": menu.length } as React.CSSProperties}>
            {menu.map((item, i) => (
                <li key={i} className={styled.menuItem}>
                    <p>
                        <Image className={styled.icon} src={item.icon} alt={item.title} />
                        {item.title}
                        {item.list.length ?
                            <Image className={showList.includes(i) ? styled.trunArrow : styled.arrow} src={Arrow} alt="arrow" onClick={() => addShowList(i)} />
                            : null}
                    </p>
                    <ul className={showList.includes(i) ? styled.active : undefined}>
                        {item.list.map((list, l) => (
                            <li key={l + i}>{list.title}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};