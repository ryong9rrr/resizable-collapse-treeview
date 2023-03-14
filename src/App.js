import React from "react"
import styled from "styled-components"
import TitleBar from "./components/TitleBar"
import SideBar from "./components/SideBar"
import { palettes } from "./styles/palettes"

export default function App() {
  return (
    <Layout>
      <TitleBar />
      <Main>
        <SideBar />
        <MainView />
      </Main>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex: 1;
  max-height: calc(100vh - 30px);
`

const MainView = styled.section`
  background-color: ${palettes.white[0]};
  flex: 1;
`
