interface FormUserProps {
  userName: string
  contactUser: string
  addressUser: string
  delivery: 'Si' | 'No'
}

interface FormProductProps {
  productName: string
  price: number
  quantity: number
}

interface MainFormProps {
  formUser: FormUserProps
  formProduct: FormProductProps
}

export type { MainFormProps}