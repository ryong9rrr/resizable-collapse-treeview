import styled from "styled-components"
import MuiTreeView from "@mui/lab/TreeView"
import TreeItem from "@mui/lab/TreeItem"

const FOLDER = "FOLDER"
const FILE = "FILE"

const LABEL_ICON = {
  [FOLDER]: "🗂️",
  [FILE]: "📄",
}

const isFolder = (type) => {
  return type === FOLDER
}

const hasChildren = (node) => {
  return (
    node.children && Array.isArray(node.children) && node.children.length > 0
  )
}

const renderForLabel = (type, name) => {
  return `${LABEL_ICON[type]} ${name}`
}

const EmptyFolder = () => {
  return (
    <div
      style={{
        padding: "5px 20px",
      }}
    >
      폴더가 비었어요.
    </div>
  )
}

export default function TreeView({ nodes }) {
  const renderTree = (node) => {
    return (
      <TreeItem
        key={node.id}
        nodeId={node.id}
        label={renderForLabel(node.type, node.name)}
      >
        {hasChildren(node) ? (
          node.children.map((node) => renderTree(node))
        ) : isFolder(node.type) ? (
          <EmptyFolder />
        ) : null}
      </TreeItem>
    )
  }

  return (
    <StyledTreeView
      aria-label="file system navigator"
      sx={{ height: 277, overflowY: "auto" }}
    >
      {nodes.map((root) => renderTree(root))}
    </StyledTreeView>
  )
}

const StyledTreeView = styled(MuiTreeView)`
  li.MuiTreeItem-root > div {
    margin: 0;
    padding: 0;

    .MuiTreeItem-iconContainer {
      margin: 0;
      width: 0;
      padding-left: 15px;
    }
  }
`
