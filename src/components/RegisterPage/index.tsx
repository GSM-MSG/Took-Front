import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./style";

export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [pw, setPW] = useState("");
    const router = useRouter();

    const Register = () => {
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
                    password: "pw12345!", // 배포 시 수정
                })
                router.push("/login");
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <>
            <S.Layer>
                <S.Form>
                    <h2>Register</h2>
                    <input type="text" name="id" onChange={({ target: { value } }) => setEmail(value)} />
                    <input type="text" name="pw" onChange={({ target: { value } }) => setPW(value)} />
                    <button onClick={Register}>회원가입</button>
                </S.Form>
            </S.Layer>
        </>
    )
}