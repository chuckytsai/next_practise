import style from "./lion.module.scss"

export default async function Lion() {
    const QA = [
        {
            question: "Next.js 和 React 有什麼不同?",
            answer: "Next.js是建立在React之上的框架，提供 SSR、SSG、自動路由、API Routes等功能，適合開發完整網站。"
        },
        {
            question: "Next.js 有哪些渲染方式? 差異是什麼?",
            answer: [
                "SSR getServerSideProps	每次請求都重新生成",
                "SSG getStaticProps	編譯時生成一次，快速但內容固定",
                "ISR getStaticProps + revalidate 靜態頁支援定時更新",
                "CSR React 原生在瀏覽器中執行，適合登入頁等個人化頁面"
            ]
        },
        {
            question: "getStaticProps vs getServerSideProps?",
            answer: [
                "getStaticProps: 編譯時取得資料，生成靜態頁(適合固定內容) 13版本過後fetch用cache: 'force-cache'",
                "getServerSideProps: 每次請求都會呼叫伺服器(適合即時資料) 13版本過後fetch用cache: 'no-store'"
            ]
        },
        {
            question: "Next.js 如何做SEO?",
            answer: "支援 SSR/SSG 讓搜尋引擎能讀HTML，用 next/head 設定<title>、meta 等SEO資訊"
        },
        {
            question: "如何建立動態路由?",
            answer: "用 [].js 命名方式，搭配 getStaticPaths 或 getServerSideProps傳入動態參數。"
        },
        {
            question: "什麼是ISR? 你什麼時候會用?",
            answer: "ISR 是「漸進式靜態再生」，使用 getStaticProps加上 revalidate。可以靜態輸出，也可以定時更新內容"
        },
        {
            question: "Next.js 如何處理圖片最佳化?",
            answer: "使用next/image元件，自動做lazy loading、壓縮與響應式尺寸。"
        },
        {
            question: "API Routes 是什麼?",
            answer: "可以在 pages/api/ 中撰寫後端API函式，當作後端endpoint使用"
        },
        {
            question: "Middleware 是什麼? 用途是什麼?",
            answer: "Middleware 是一層攔截器，在請求進入頁面前先處理，例如登入驗證、地區導向。"
        },
        {
            question: "TypeScript 開發 React 時，通常如何定義 Props 與 State?",
            answer: "使用 interface 或 type 來定義 Props 與 State。"
        },
        {
            question: "如何處理API串接與畫面切版的流程經驗?",
            answer: "通常我會先與設計師確認 Figma 樣式，接著用 styled-components或CSS modules實作切版，再依 API 文件串接資料，並使用axios或fetch 搭配 useEffect 管理請求。若資料需複雜處理，我會額外使用狀態管理工具如Redux。"
        },
        {
            question: "Docker的使用經驗?",
            answer: "主要用Docker建立本地開發環境，例如設定Node.js + Nginx容器，確保與部署環境一致。"
        },
        {
            question: "Release 測試與版本管理的經驗?",
            answer: "有使用Git進行版本控制的經驗，配合 Git Flow進行開發。在release前會與QA配合測試流程。也會參與PR review，確保程式碼品質與功能完整性。"
        },
        {
            question: "你如何看待從Vue.js過渡到React的挑戰?",
            answer: "Vue 與 React 雖然理念不同，但我認為從Vue過渡到 React，最大的挑戰在於JSX與狀態管理的邏輯不同。不過只要理解React的資料流與生命週期，再加上 TypeScript 的輔助，其實轉換過程是可控的。我也樂於協助團隊成員一起學習 React。"
        },
        {
            question: "React的生命週期(Lifecycle)?",
            answer: [
                "React 函式元件中，通常用 useEffect 來處理生命週期相關的邏輯。",
                "元件第一次渲染時：可以用 useEffect(() => { ... }, []) 來模擬 componentDidMount。",
                "當某個狀態或 props 改變時：useEffect(() => { ... }, [依賴項]) 可以追蹤變化。",
                "元件卸載時：useEffect 裡 return 的清理函式就像 componentWillUnmount。",
            ]
        }
    ]

    return (
        <div className={style.list}>
            {QA.map((item, i) =>
                <div className={style.card} key={i}>
                    <p className={style.question}>問題{i + 1}
                        <span>:</span>
                        {item.question}
                    </p>
                    {typeof (item.answer) === "string" ?
                        <p className={style.answer}>{item.answer}</p> : null
                    }
                    {Array.isArray(item.answer) ?
                        item.answer.map((arr, a) => <p className={style.answers} key={a}>{arr}</p>) : null
                    }
                </div>
            )}
        </div>
    )
};