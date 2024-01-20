
import './App.css'
import init from '@wasm-lib/flowy_wasm';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TestsList from "./tests/TestsList.tsx";
import SyncTest from "./tests/SyncTest.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TestsList />
    ),
  },
  {
    path: "sync_test",
    element: <SyncTest />,
  },
]);

void init();

function App() {

  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
