import Home from "./homePage";
import { ConfigProvider } from "antd";

export default function index() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#002AC0",
        },
      }}
    >
      <Home />
    </ConfigProvider>
  );
}
