import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./style";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [PW, setPW] = useState("");
    const router = useRouter();

    const Login = () => {
        try {
            const res = axios.post("/auth/login", {
                email: "email05@gmail.com", // 배포 시 수정
                pw: "pw12345!", // 배포 시 수정
            })
            window.localStorage.setItem("accessToken", "abc"); // 배포 시 수정
            router.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <S.Layer>
                <S.Form>
                    <h2>login</h2>
                    <input type="text" name="id" onChange={({ target: { value } }) => setEmail(value)} />
                    <input type="text" name="pw" onChange={({ target: { value } }) => setPW(value)} />
                    <a href="/signup">비밀번호를 잊으셨나요?</a>
                    <button onClick={Login}>로그인</button>
                </S.Form>
            </S.Layer>
        </>
    )
}