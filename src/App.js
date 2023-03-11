import React from "react"
import styled from "styled-components"
import TitleBar from "./components/TitleBar"
import SideBar from "./components/SideBar"
import { palettes } from "./styles/palettes"

export default function App() {
  return (
    <>
      <TitleBar />
      <Layout>
        <SideBar />
        <Main />
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  height: calc(100vh - 30px);
`

const Main = styled.main`
  background-color: ${palettes.white[0]};
  flex: 1;
`
