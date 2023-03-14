import React from "react"
import styled from "styled-components"
import { palettes } from "../styles/palettes"
import MESSAGES from "../electron/constants.js"

export default function TitleBar() {
  const { ipcRenderer } = window.require("electron")

  const handleMinimize = () => {
    ipcRenderer.send(MESSAGES.TITLE_BAR_MINIMIZE)
  }

  const handleMaximize = () => {
    ipcRenderer.send(MESSAGES.TITLE_BAR_MAXIMIZE)
  }

  const handleClose = () => {
    if (window.confirm("앱을 종료할까요?")) {
      ipcRenderer.send(MESSAGES.TITLE_BAR_CLOSE)
    }
  }

  return (
    <Container>
      <Title>
        <div>Milliman</div>
      </Title>
      <Buttons>
        <Button onClick={handleMinimize}>&#8722;</Button>
        <Button onClick={handleMaximize}>&#9723;</Button>
        <Button onClick={handleClose}>&#x2715;</Button>
      </Buttons>
    </Container>
  )
}

const Container = styled.header`
  min-height: 30px;
  box-sizing: border-box;
  position: relative;
  display: flex;
`

const Title = styled.div`
  -webkit-app-region: drag;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${palettes.gray[0]};
`

const Buttons = styled.div`
  -webkit-app-region: no-drag;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`

const Button = styled.button`
  all: unset;
  text-align: center;
  width: 30px;
  height: 100%;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`
