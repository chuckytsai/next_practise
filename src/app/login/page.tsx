import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo/webLogo.png";
import mail from "/public/iconSvg/mail.svg";
import lock from "/public/iconSvg/lock.svg";
import "./login.scss";

export default async function LoginPage() {
    return (
        <main className="loginForm">
            <form>
                <div className="logo">
                    <Image src={logo} alt="logo" />
                </div>
                <label htmlFor="email">帳號</label>
                <div className="inputGroup">
                    <span className="inputIcon">
                        <Image src={mail} alt="mail" />
                    </span>
                    <input type="email" id="email" name="email" placeholder="ex-CMS-Admin@hillcorp.com" />
                </div>
                <label htmlFor="psd">密碼</label>
                <div className="inputGroup">
                    <span className="inputIcon">
                        <Image src={lock} alt="mail" />
                    </span>
                    <input type="email" id="psd" name="psd" />
                </div>
                <div className="msg">
                    <p>密碼需輸入</p>
                    <a>忘記密碼
                        <div className="forgetPWIcon"></div>
                    </a>
                </div>
                <button className="loginBtn" type="submit">登入</button>
                <div className="helpYou">
                    <p>
                        <span className="icon">?</span>
                        登入問題?
                    </p>
                    <p>任何登入相關問題歡迎來信
                        <Link href="/">inquiry@hillcorp.com</Link>
                    </p>
                </div>
            </form>
            {/* <Footer /> */}
        </main>
    )
};