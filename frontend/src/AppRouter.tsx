import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { NotFound, PurchasesPages } from "@/pages"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to='/purchases' />,
    },
    {
      path: '/purchases',
      element: <PurchasesPages />,
    },
    {
      path: '/confirmation',
      element: <h1>Confirmation</h1>,
    },
    {
      path: '*',
      element: <NotFound/>,
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
    }
  }
)

const AppRouter = () => {
  return ( 
    <RouterProvider 
      router={router}
      future={{
        v7_startTransition: true,
      }} 
    />
  )
}

export { AppRouter }