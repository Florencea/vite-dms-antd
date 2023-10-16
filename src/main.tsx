import { StyleProvider } from "@ant-design/cssinjs";
import { Routes } from "@generouted/react-router/lazy";
import { App, ConfigProvider } from "antd";
import zhTW from "antd/es/locale/zh_TW";
import "dayjs/locale/zh-tw";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { theme } from "./styles/theme.ts";

const container = document.getElementById(
  import.meta.env.VITE_REACT_ROOT_ID,
) as HTMLDivElement;

createRoot(container).render(
  <StrictMode>
    <ConfigProvider
      getPopupContainer={() => container}
      locale={zhTW}
      theme={theme}
    >
      <StyleProvider hashPriority="high">
        <App>
          <Routes />
        </App>
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>,
);
