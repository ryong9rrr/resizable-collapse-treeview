import React, { useRef } from "react"
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
  const resizableRef = useRef(null)

  const behindScroll = (ref) => {
    ref.style.overflow = "hidden"
  }

  const showScroll = (ref) => {
    ref.style.overflow = "hidden auto"
    ref.style.width = "100%"
  }

  const handleResizableStyle = (ref) => {
    const currentHeight = parseInt(ref.style.height, 10)
    const childrenHeight = Array.from(ref.children)
      .filter((node) => node.nodeName === "LI")
      .reduce((acc, $li) => acc + $li.offsetHeight, 0)

    const isEnough = childrenHeight - 5 <= currentHeight

    if (isEnough) {
      behindScroll(ref)
    } else {
      showScroll(ref)
    }
  }

  const renderTree = (node) => {
    return (
      <TreeItem
        key={node.id}
        nodeId={node.id}
        label={renderLabelForType(node.type, node.name)}
        onClick={() => {
          if (!resizableRef.current) {
            return
          }
          showScroll(resizableRef.current.resizable)
        }}
      >
        {hasChildren(node) && node.children.map((node) => renderTree(node))}
      </TreeItem>
    )
  }

  return (
    <StyledTreeView
      aria-label="file system navigator"
      defaultExpanded={nodes.map((node) => node.id)}
    >
      <Resizable
        ref={resizableRef}
        style={{ position: "", userSelect: "none" }}
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
  position: relative;

  li.MuiTreeItem-root > div {
    height: 23px;

    .MuiTreeItem-iconContainer {
      margin: 0;
      width: 0;
      padding-left: 15px;
    }

    .MuiTreeItem-label {
      font-size: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`
