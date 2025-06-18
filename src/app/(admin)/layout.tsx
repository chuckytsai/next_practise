'use client'

import { useState, useEffect } from "react";
import { FormProvider } from '@/context/FormContext';
import { usePathname } from "next/navigation";
import styled from "./layout.module.scss";
import Sidebar from "@/components/Sidebar";
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

// 全部菜單
const menu = [
    {
        icon: CilSpeedometer,
        title: "Dashboard",
        url: "dashboard",
        list: []
    },
    {
        icon: CilContact,
        title: "使用者管理",
        url: "users",
        list: [
            { title: "店家管理", url: "store" },
            { title: "運補員管理", url: "replenishment" },
            { title: "群組與權限設定", url: "usergroups" },
            { title: "操作設定", url: "operationLog" }
        ]
    },
    {
        icon: CilRestaurant,
        title: "菜單管理",
        url: "menu",
        list: [
            { title: "菜單總覽", url: "overview" },
            { title: "餐點時段設定", url: "machineServe" }
        ]
    },
    {
        icon: CilTimer,
        title: "預定/結單 管理",
        url: "put",
        list: []
    },
    {
        icon: Cilcalendar,
        title: "店家排程",
        url: "storesSchedule",
        list: []
    },
    {
        icon: CilClipboard,
        title: "訂單管理",
        url: "order",
        list: [
            { title: "櫃取訂單", url: "counterPickup" },
            { title: "外帶訂單", url: "takeaway" }
        ]
    },
    {
        icon: CilMoney,
        title: "財務管理",
        url: "money",
        list: [
            { title: "匯款設定", url: "moneyTransfer" },
            { title: "發票設定", url: "bill" }
        ]
    },
    {
        icon: CilNotes,
        title: "報表管理",
        url: "report",
        list: [
            { title: "對帳單", url: "reconciliation" },
            { title: "銷售報表", url: "salesReport" }
        ]
    },
    {
        icon: CilTruck,
        title: "運補管理",
        url: "restocking",
        list: [
            { title: "補貨單管理", url: "replenishmentOrder" },
            { title: "機台商品", url: "machineProducts" }
        ]
    },
    {
        icon: CilChart,
        title: "行銷管理",
        url: "marketing",
        list: [
            { title: "行銷活動", url: "activities" },
            { title: "手機推撥", url: "cellphone" },
            { title: "APP推撥", url: "app" }
        ]
    },
    {
        icon: CilAperture,
        title: "機器管理",
        url: "machine",
        list: [
            { title: "機台設定", url: "setting" },
            { title: "機器通知", url: "notification" },
            { title: "機器輪撥", url: "carousel" },
            { title: "機台預定實況表", url: "live" }
        ]
    },
    {
        icon: CilUser,
        title: "會員管理",
        url: "vip",
        list: []
    },
];

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [showList, setShowList] = useState<number[]>([]); // 菜單是否顯示子清單
    const [title, setTitle] = useState("");

    useEffect(() => {
        // 判斷是否要展開子清單(重新整理,至少是當前頁面的)
        const urlIdx = menu.findIndex((item) => item.url === pathname.split("/")[1]);
        if (urlIdx !== -1 && !showList.includes(urlIdx)) setShowList(prev => [...prev, urlIdx]);

        // header上的標題根據URL判斷顯示中文字
        const segments = pathname.split("/").filter(Boolean);
        const secondSegment = segments[2];
        const fallbackTitle = menu[urlIdx].title;

        if (secondSegment) {
            const titleItem = menu[urlIdx].list.find(item => item.url === secondSegment);
            setTitle(titleItem?.title ?? fallbackTitle);
        } else {
            setTitle(fallbackTitle);
        }

        // 自動滾動到該菜單位置
        const selectedEl = document.querySelector(`.${styled.selected}`);
        if (selectedEl) selectedEl.scrollIntoView({ behavior: "smooth", block: "center" });

    }, [pathname, showList, setShowList, setTitle]);

    return (
        <main className={styled.main}>
            <Sidebar showList={showList} setShowList={setShowList} menu={menu} />
            <div className={styled.content}>
                <header>{title}</header>
                <div className={styled.router}><FormProvider>{children}</FormProvider></div>
            </div>
        </main>
    );
}