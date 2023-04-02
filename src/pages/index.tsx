import Home from "./homePage";
import { RecoilRoot } from "recoil";
import { ConfigProvider } from "antd";

export default function index() {
  return (
    <RecoilRoot>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#002AC0",
          },
        }}
      >
        <Home />
      </ConfigProvider>
    </RecoilRoot>
  );
}
