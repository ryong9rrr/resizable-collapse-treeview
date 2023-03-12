import React, { useState } from "react"
import styled from "styled-components"
import { Collapse } from "antd"
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
      <StyledCollapse>
        {categories.map(({ header, key, nodes }) => (
          <Collapse.Panel header={header} key={key}>
            <TreeView nodes={nodes} />
          </Collapse.Panel>
        ))}
      </StyledCollapse>
    </Container>
  )
}

const Container = styled.nav`
  width: 230px;
`

const StyledCollapse = styled(Collapse)`
  border: none;
  background-color: ${palettes.gray[1]};

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
