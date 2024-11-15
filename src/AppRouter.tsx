import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { PurchasesPages, RoutesWithNotFound } from "@/pages"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path='/' element={<Navigate to='/purchases' />} />
        <Route path='/purchases' element={<PurchasesPages />} />
        <Route path='/confirmation' element={<h1>Confirmation</h1>} />
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}

export { AppRouter }