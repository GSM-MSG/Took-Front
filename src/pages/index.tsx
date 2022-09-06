import MainPage from '../components/MainPage'
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function Home() {

  const [a, setA] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    if (window !== undefined) {
      setA(window.localStorage.getItem("accessToken")!);
    }

    if (a === "[object Promise]") {
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