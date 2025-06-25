import styled from "./pageTable.module.scss";

export interface Title<T> {
    label: string;
    value: string;
    render?: (row: T) => React.ReactNode;
};

export interface PageTableProps<T> {
    titles: Title<T>[];
    list: T[];                 // 資料清單
    total?: number;            // 總筆數
    loading?: boolean;         // 載入中狀態
    page?: number;             // 當前頁數
    pageSize?: number;         // 每頁幾筆
    onPageChange?: (page: number) => void; // 分頁事件
};

export default function PageTable<T>({
    titles,
    list
}: PageTableProps<T>) {
    return (
        <table className={styled.table}>
            <thead>
                <tr>
                    {titles.map((item, i) => (<th key={i}>{item.label}</th>))}
                </tr>
            </thead>
            <tbody>
                {list.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {titles.map((col, colIndex) => (
                            <td key={colIndex}>
                                {col.render ? col.render(row) : String(row[col.value as keyof T] ?? "-")}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
};