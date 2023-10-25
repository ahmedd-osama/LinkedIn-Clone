import { Outlet } from "react-router-dom"
import MainNav from "../../UI/Nav/MainNav"
const HomeRoot = () => {
  return (
    <>
    <MainNav/>
    <Outlet/>
    </>
  )
}

export default HomeRoot