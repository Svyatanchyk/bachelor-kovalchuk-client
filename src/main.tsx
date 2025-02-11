import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { routes } from "./constants/appRoutes.tsx";
import { fetchCountries, fetchLanguages } from "./services/countriesService.ts";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

queryClient.prefetchQuery({
  queryKey: ["countries"],
  queryFn: fetchCountries,
  staleTime: Infinity,
});

queryClient.prefetchQuery({
  queryKey: ["languages"],
  queryFn: fetchLanguages,
  staleTime: Infinity,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
