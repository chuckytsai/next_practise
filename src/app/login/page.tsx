"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo/webLogo.png";
import mail from "/public/iconSvg/mail.svg";
import lock from "/public/iconSvg/lock.svg";
import eyes from "/public/iconSvg/eyes.svg";
import style from "./login.module.scss";
import { getLogin } from "@/services/login";

export default function LoginPage() {
    const router = useRouter();
    const [isPSD, setIsPSD] = useState(true); // 改變密碼是否顯示
    const [err, setErr] = useState("");

    const togglePassword = () => setIsPSD((prev) => !prev);

    // 處理登入邏輯，例如呼叫 API 等
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 阻止重新整理或跳頁
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const psd = formData.get("psd") as string;
        getLogin({
            email: email,
            psd: psd
        }).then(res => {
            if (res.data.code == 200) {
                router.push("/dashboard");
            }
        }).catch(err => setErr(err.status));
    };

    return (
        <main className={style.loginForm}>
            <form className={style.form} onSubmit={handleSubmit}>
                <Image src={logo} alt="logo" priority />
                <label className={style.label} htmlFor="email">帳號</label>
                <div className={style.inputGroup}>
                    <span className={style.inputIcon}>
                        <Image src={mail} alt="mail" />
                    </span>
                    <input type="email" id="email" name="email" placeholder="ex-CMS-Admin@hillcorp.com" />
                </div>
                <label className={style.label} htmlFor="psd">密碼</label>
                <div className={style.inputGroup}>
                    <span className={style.inputIcon}>
                        <Image src={lock} alt="psd" />
                    </span>
                    <input type={isPSD ? "password" : "text"} id="psd" name="psd" autoComplete="psd" />
                    <span className={style.inputIcon}>
                        <Image src={eyes} alt="eyes" onClick={togglePassword} />
                    </span>
                </div>
                <div className={style.msg}>
                    <p>{err}</p>
                    <a>忘記密碼
                        <div className={style.forgetPWIcon}></div>
                    </a>
                </div>
                <button className={style.loginBtn} type="submit">登入</button>
                <div className={style.helpYou}>
                    <p>
                        <span className={style.icon}>?</span>
                        登入問題?
                    </p>
                    <p>任何登入相關問題歡迎來信
                        <Link href="/">inquiry@hillcorp.com</Link>
                    </p>
                </div>
            </form>
        </main>
    )
};