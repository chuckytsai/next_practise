import styled from "./pageTable.module.scss";

interface PageTableProps<T = []> {
    list: T[];                 // 資料清單
    total?: number;            // 總筆數
    loading?: boolean;         // 載入中狀態
    page?: number;             // 當前頁數
    pageSize?: number;         // 每頁幾筆
    onPageChange?: (page: number) => void; // 分頁事件
};

export default function PageTable({ list }: PageTableProps) {

    return (
        <table className={styled.table}>
            <thead>
                <tr>
                    <th>帳號</th>
                    <th>職位權限</th>
                    <th>使用者</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {list.map((_, i) => {
                    return (<tr key={i}>
                        <td>system1</td>
                        <td>管理者</td>
                        <td>系統1</td>
                        <td>
                            <div className={styled.btns}>
                                <button type="button" className="btn indigoBtn">編輯</button>
                                <button type="button" className="btn scarletBtn">刪除</button>
                            </div>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
};