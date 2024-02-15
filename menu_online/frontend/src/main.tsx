import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {GlobalStyled} from './styles/global.ts'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>  
    <GlobalStyled/>  
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
    <ToastContainer/>
  </QueryClientProvider>
);
