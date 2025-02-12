import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import Summary from "./pages/Summary";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import PieTemplate from "./pages/PieTemplate";
import { BarTemplate, BarSidebar, BarReportTitle } from "./pages/BarTemplate";
import CardsTemplate from "./pages/CardsTemplate";
import ListTemplate from "./pages/ListTemplate";
import TableTemplate from "./pages/TableTemplate";
import { TemplateConfig } from "./pages/TemplateConfig";
import Dashboard from "./pages/Dashboard";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="summary" element={<Summary />} />
              <Route path="piechart" element={<PieTemplate />} />
              <Route path="barchart" element={<BarTemplate />}>
                <Route path="chart" element={<BarSidebar />} />
                <Route path="title" element={<BarReportTitle />} />
              </Route>
              <Route path="cards" element={<CardsTemplate />} />
              <Route path="list" element={<ListTemplate />} />
              <Route path="table" element={<TableTemplate />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="templates/:component" element={<TemplateConfig />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
