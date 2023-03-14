import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.css"
import { ConfigProvider as AntdConfigProvider } from "antd"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AntdConfigProvider
    theme={{
      token: {
        fontSize: "10px",
        borderRadius: 0,
        margin: 0,
        padding: 0,
      },
    }}
  >
    <App />
  </AntdConfigProvider>,
)
