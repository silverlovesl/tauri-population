import { MyLayout } from '@/components';
import './App.scss';
import { Compose, OrganizaionProvider } from './providers';

function App() {
  // const readExcel = async () => {
  //   const selectedPath = await open({
  //     multiple: false,
  //     filters: [{ name: 'Excel', extensions: ['png', 'jpeg', 'xlsx'] }],
  //   });
  //   console.log(selectedPath);
  //   const jsonStr = await invoke('read_excel_data', { path: selectedPath });
  //   const popluation = JSON.parse((jsonStr || '{}') as string);
  //   console.log(popluation);
  // };

  // const fetchContries = async () => {
  //   const jsonStr = await invoke('fetch_countries');
  //   console.log(jsonStr);
  //   const countries = JSON.parse((jsonStr || '[]') as string);
  //   console.log(countries);
  // };

  return (
    <div>
      <Compose components={[OrganizaionProvider]}>
        <MyLayout></MyLayout>
      </Compose>
    </div>
  );
}

export default App;
