import React from "react"
import styled from "styled-components"
import { Collapse } from "antd"
import { palettes } from "../styles/palettes"

export default function SideBar() {
  return (
    <Container>
      <CustomCollapse defaultActiveKey={[]}>
        <Collapse.Panel header="Category 1" key="Category 1">
          <Content>1</Content>
        </Collapse.Panel>
        <Collapse.Panel header="Category 2" key="Category 2">
          <Content>2</Content>
        </Collapse.Panel>
      </CustomCollapse>
    </Container>
  )
}

const Container = styled.nav`
  width: 230px;
`

const CustomCollapse = styled(Collapse)`
  border: none;
  border-radius: 0px;

  :where(.css-dev-only-do-not-override-1me4733).ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header {
    padding: 0px 4px;
    height: 23px;
    border-radius: 0;
    background-color: ${palettes.gray[1]};
    border: none;
  }

  :where(.css-dev-only-do-not-override-1me4733).ant-collapse
    > .ant-collapse-item:last-child,
  :where(.css-dev-only-do-not-override-1me4733).ant-collapse
    > .ant-collapse-item:last-child
    > .ant-collapse-header {
    border-radius: 0;
    border: none;
  }

  .ant-collapse-item.ant-collapse-item-active {
    border-radius: 0;
    border: none;
  }

  :where(.css-dev-only-do-not-override-1me4733).ant-collapse
    .ant-collapse-content
    > .ant-collapse-content-box {
    padding: 0;
  }
`

const Content = styled.section`
  box-sizing: border-box;
  background-color: red;
  padding: 10px;
`
