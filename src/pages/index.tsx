import type { NextPage } from 'next'
import MainPage from '../components/MainPage'
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const Main: NextPage = () => {

  const [a, setA] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    if (window !== undefined) {
      setA(window.localStorage.getItem("accessToken")!);
      console.log(a);
    }

    if (a === "[object Promise]" || a === null) {
      router.push("/login");
      return;
    }
  })

  return (
    <>
      <MainPage />
    </>
  )
}

export default Main;