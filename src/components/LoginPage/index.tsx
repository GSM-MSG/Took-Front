import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./style";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [pw, setPW] = useState("");
    const router = useRouter();

    const Login = () => {
        const reg_email = '^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
        const reg_pw = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$";

        if (reg_email.match(email)) {
            alert("이메일을 형식에 맞게 입력해주세요");
        } else if (reg_pw.match(pw)) {
            alert("비밀번호를 최소 8자 이상 및 영문, 숫자, 특수문자를 넣어서 입력해주세요");
        } else {
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
    }

    return (
        <>
            <S.Layer>
                <S.Form>
                    <h2>login</h2>
                    <input type="text" name="id" onChange={({ target: { value } }) => setEmail(value)} />
                    <input type="text" name="pw" onChange={({ target: { value } }) => setPW(value)} />
                    <a href="/register">회원가입을 안 하셨나요?</a>
                    <button onClick={Login}>로그인</button>
                </S.Form>
            </S.Layer>
        </>
    )
}