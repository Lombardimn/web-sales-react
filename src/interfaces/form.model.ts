type Delivery = 'Si' | 'No'

interface FormUserProps {
  userName: string
  contactUser: string
  addressUser: string
  delivery: Delivery
}

interface FormProductProps {
  productName: string
  format: string
  price: number
  quantity: number
}

interface MainFormProps {
  formUser: FormUserProps
  formProduct: FormProductProps
  formProducts: FormProductProps[]
}

const EmptyMainForm: MainFormProps = {
  formUser: {
    userName: "",
    contactUser: "",
    addressUser: "",
    delivery: "No",
  },
  formProduct: {
    productName: "",
    format: "",
    price: 0,
    quantity: 0,
  },
  formProducts: [], // Inicialmente vacío
}

export { EmptyMainForm }

export type { MainFormProps, FormUserProps, FormProductProps }