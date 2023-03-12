import { styled } from "@mui/material/styles"
import MuiTreeView from "@mui/lab/TreeView"
import TreeItem from "@mui/lab/TreeItem"

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

export default function TreeView({ nodes }) {
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
      sx={{ height: 277, overflowY: "auto" }}
      defaultExpanded={nodes.map((node) => node.id)}
    >
      {nodes.map((root) => renderTree(root))}
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
