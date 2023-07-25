import { MyLayout } from "@/components";
import { invoke } from "@tauri-apps/api/tauri";
import { Button } from "antd";
import "./App.scss";



function App() {
  const readExcel = async () => {
    const jsonStr = await invoke("read_japan_population");
    const popluation = JSON.parse((jsonStr || "{}") as string);
    console.log(popluation);
  };

  return (
    <div>
      <MyLayout>
        <Button type="primary" onClick={readExcel}>
          Read Excel
        </Button>
      </MyLayout>
    </div>
  );
}

export default App;
