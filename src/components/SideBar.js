import React, { useState } from "react"
import styled from "styled-components"
import { Collapse } from "antd"
import { Resizable } from "re-resizable"
import { palettes } from "../styles/palettes"
import TreeView from "./TreeView"

const nodes = [
  {
    type: "FOLDER",
    id: "Folder 1",
    name: "Folder 1",
    children: [],
  },
  {
    type: "FOLDER",
    id: "Folder 2",
    name: "Folder 2",
    children: [
      {
        type: "FILE",
        id: "File 1",
        name: "File 1",
      },
      {
        type: "FILE",
        id: "File 2",
        name: "File 2",
      },
      {
        type: "FILE",
        id: "File 3",
        name: "File 3",
      },
      {
        type: "FILE",
        id: "File 4",
        name: "File 4",
      },
      {
        type: "FILE",
        id: "File 5",
        name: "File 5",
      },
      {
        type: "FILE",
        id: "File 6",
        name: "File 6",
      },
      {
        type: "FILE",
        id: "File 7",
        name: "File 7",
      },
      {
        type: "FILE",
        id: "File 8",
        name: "File 8",
      },
      {
        type: "FILE",
        id: "File 9",
        name: "File 9",
      },
      {
        type: "FILE",
        id: "File 10",
        name: "File 10",
      },
    ],
  },
]

const defaultCategories = [
  {
    header: "Category 1",
    key: "Category 1",
    nodes,
  },
  {
    header: "Category 2",
    key: "Category 2",
    nodes,
  },
]

export default function SideBar() {
  const [categories, setCategories] = useState(defaultCategories)

  return (
    <Container>
      <Resizable
        minWidth="120px"
        maxWidth="80vw"
        defaultSize={{ width: "230px" }}
        enable={{
          top: false,
          left: false,
          right: true,
          bottom: false,
        }}
      >
        <StyledCollapse>
          {categories.map(({ header, key, nodes }, index) => {
            if (index === categories.length - 1) {
              return (
                <Collapse.Panel header={header} key={key}>
                  <TreeView nodes={nodes} />
                </Collapse.Panel>
              )
            }

            return (
              <Collapse.Panel header={header} key={key}>
                <Resizable
                  minWidth="100%"
                  style={{ overflow: "hidden" }}
                  defaultSize={{
                    width: "100%",
                  }}
                  enable={{
                    top: false,
                    left: false,
                    right: true,
                    bottom: true,
                  }}
                >
                  <TreeView nodes={nodes} />
                </Resizable>
              </Collapse.Panel>
            )
          })}
        </StyledCollapse>
      </Resizable>
      <ResizeHandleBar />
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
`

const ResizeHandleBar = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${palettes.gray[0]};
`

const StyledCollapse = styled(Collapse)`
  border: none;
  background-color: ${palettes.gray[1]};

  .ant-collapse-item {
    border: none;
  }

  .ant-collapse-item > .ant-collapse-header {
    height: 23px;
    padding: 0 0 0 10px;
    align-items: center;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
    border: none;
  }
`
