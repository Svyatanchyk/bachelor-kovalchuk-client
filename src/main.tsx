import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { routes } from "./constants/appRoutes.tsx";
import { fetchCountries, fetchLanguages } from "./services/countriesService.ts";
import { fetchGooleFonts } from "./services/googleFontsService.ts";
import { CreativeSettingsContextProvider } from "./context/CreativeSettings.tsx";
import { CreativeContentContextProvider } from "./context/ContentSettings.tsx";
import { CreativeContextProvider } from "./context/CreativesContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

queryClient.prefetchQuery({
  queryKey: ["countries"],
  queryFn: fetchCountries,
});

queryClient.prefetchQuery({
  queryKey: ["languages"],
  queryFn: fetchLanguages,
});

queryClient.prefetchQuery({
  queryKey: ["googleFonts"],
  queryFn: fetchGooleFonts,
});

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <UserProvider>
      <CreativeContextProvider>
        <CreativeContentContextProvider>
          <CreativeSettingsContextProvider>
            <RouterProvider router={router} />
          </CreativeSettingsContextProvider>
        </CreativeContentContextProvider>
      </CreativeContextProvider>
    </UserProvider>
  </QueryClientProvider>
  // </StrictMode>
);
