import React from "react"
import { styled } from "@mui/material/styles"
import MuiTreeView from "@mui/lab/TreeView"
import TreeItem from "@mui/lab/TreeItem"
import { Resizable } from "re-resizable"

const hasChildren = (node) => {
  return (
    node.children && Array.isArray(node.children) && node.children.length > 0
  )
}

const renderLabelForType = (type, name) => {
  const icons = {
    FOLDER: "🗂️",
    FILE: "📄",
  }
  return `${icons[type]} ${name}`
}

const DEFAULT_HEIGHT = 277

export default function TreeView({ nodes }) {
  const handleResizableStyle = (ref) => {
    const currentHeight = parseInt(ref.style.height, 10)
    const childrenHeight = Array.from(ref.children)
      .filter((node) => node.nodeName === "LI")
      .reduce((acc, $li) => acc + $li.offsetHeight, 0)

    if (childrenHeight <= currentHeight) {
      ref.style.overflow = "hidden"
    } else {
      ref.style.overflow = "hidden auto"
    }
  }

  const renderTree = (node) => {
    return (
      <TreeItem
        key={node.id}
        nodeId={node.id}
        label={renderLabelForType(node.type, node.name)}
      >
        {hasChildren(node) && node.children.map((node) => renderTree(node))}
      </TreeItem>
    )
  }

  return (
    <StyledTreeView
      aria-label="file system navigator"
      style={{ overflow: "hidden" }}
      defaultExpanded={nodes.map((node) => node.id)}
    >
      <Resizable
        defaultSize={{ width: "100%", height: DEFAULT_HEIGHT }}
        enable={{
          top: false,
          left: false,
          right: false,
          bottom: true,
        }}
        onResize={(e, direction, ref, d) => {
          handleResizableStyle(ref)
        }}
      >
        {nodes.map((root) => renderTree(root))}
      </Resizable>
    </StyledTreeView>
  )
}

const StyledTreeView = styled(MuiTreeView)`
  li.MuiTreeItem-root > div {
    margin: 0;
    padding: 0;
    height: 23px;

    .MuiTreeItem-iconContainer {
      margin: 0;
      width: 0;
      padding-left: 15px;
    }

    .MuiTreeItem-label {
      font-size: 10px;
    }
  }
`
