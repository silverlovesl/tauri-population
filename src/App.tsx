import { MyLayout } from '@/components';
import { invoke } from '@tauri-apps/api';
import { open } from '@tauri-apps/api/dialog';
import { Button } from 'antd';
import './App.scss';

function App() {
  const readExcel = async () => {
    const selectedPath = await open({
      multiple: false,
      filters: [{ name: 'Excel', extensions: ['png', 'jpeg', 'xlsx'] }],
    });
    console.log(selectedPath);
    const jsonStr = await invoke('read_excel_data', { path: selectedPath });
    const popluation = JSON.parse((jsonStr || '{}') as string);
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
