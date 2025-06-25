"use client"

import { useState } from "react";
import style from "./usserList.module.scss";
import PageTable from "@/components/PageTable";
import { getUsers } from "@/services/userService";
import { Title } from "@/components/PageTable";

interface UserItem {
    user_account: string;
    user_group: number;
    user_name: string;
};

const titles: Title<UserItem>[] = [
    {
        label: "帳號", value: "user_account"
    },
    {
        label: "職位權限", value: "user_group", render: (row: UserItem) => (
            <>
                {row.user_group == 1 ? "管理者" : "一般"}
            </>
        )
    },
    {
        label: "使用者", value: "user_name"
    },
    {
        label: "操作", value: "operate", render: () => (
            <div className={style.btns}>
                <button className="btn indigoBtn">編輯</button>
                <button className="btn scarletBtn">刪除</button>
            </div>
        )
    }
];

export default function UserList() {
    const [list, setList] = useState([]);

    const getList = async () => {
        setList([]);
        getUsers()
            .then(res => {
                setList(res.data.data);
            })
            .catch(err => console.error("Failed to fetch users", err));
    };

    return (
        <div className={`listContent ${style.userList}`}>
            <div className={style.storeList}>
                <p>公司/店家
                    <span>結構</span>
                </p>
                <ul>
                    <li>
                        <input type="button" value="+" />公司1
                    </li>
                    <li>
                        <input type="button" value="+" />公司2
                    </li>
                </ul>
                <button type="button" className="btn greenBtn">新增公司/店家</button>
                <button type="button" className="btn blackBtn">管理餐廳屬性</button>
            </div>
            <div className="pageContent">
                <div className="filterCriteria">
                    <div className="filters">
                        <div className="filter">
                            <label htmlFor="title">職位權限</label>
                            <select id="title" defaultValue="default">
                                <option disabled value="default">請選擇</option>
                            </select>
                        </div>
                        <div className="filter">
                            <label htmlFor="keyWord">關鍵字查詢</label>
                            <input placeholder="請輸入關鍵字" id="keyWord" type="type" />
                        </div>
                    </div>
                    <div className="functions">
                        <button type="button" className="btn forestBtn">新增使用者資料</button>
                        <button type="button" className="btn scarletBtn" onClick={getList}>搜尋</button>
                    </div>
                </div>
                <PageTable titles={titles} list={list} />
            </div>
        </div>
    );
};