import { Outlet } from "react-router-dom"
import MainNav from "../../UI/Nav/MainNav"
import RequireAuth from "../../Routing/RequireAuth"
const HomeRoot = () => {
  return (
    <>
    <MainNav/>
    <Outlet/>
    </>
  )
}

export default RequireAuth(HomeRoot)