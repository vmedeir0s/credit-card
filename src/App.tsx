import React, { useState } from "react"
import './App.css'
import Form from "./components/Form"
import { CreditCardData } from "./types"
import Swal from 'sweetalert2'

function App() {
  const [data, setData] = useState<CreditCardData>({
    name: "",
    cardNumber: "",
    date: "",
    code: ""
  })

  const [keylistener, setKeyListener] = useState("")

  // const [savedCards, setSavedCards] = useState<CreditCardData[]>([])

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    setKeyListener(event.key)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
    if (keylistener !== 'Backspace') {
      if (data.cardNumber.length === 3 || data.cardNumber.length === 8 || data.cardNumber.length === 13) {
        setData((prev) => ({
          ...data,
          cardNumber: prev.cardNumber + ' '
        }))
      }
      if (data.date.length == 1) {
        setData((prev) => ({
          ...data,
          date: prev.date + '/'
        }))
      }
    }
  }

  function handleSubmit() {
    console.log("aconteceu")
    Swal.fire({
      title: "Dados salvos com sucesso!",
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    })
  }

  function validateForm() {
    const isCodeValid = data.code.length === 3;

    const regex = /[a-z]+/i;

    const isNameValid = regex.test(data.name);

    return isCodeValid && isNameValid;
  }

  const isFormValid = validateForm();
  return (
    <main className="bg-gray-900 h-[calc(100dvh)] flex flex-col items-center justify-center max-sm:bg-gray-800 gap-1">
      <Form
        data={data}
        handleSubmitForm={handleSubmit}
        handleInputChange={handleChange}
        isFormValid={isFormValid}
        handleKeyDown={handleKeyDown}
      />
      <footer>
        <a href="https://www.linkedin.com/in/vmedeiros/" target="_blank" rel="noopener noreferrer"><p className="text-zinc-500 hover:text-zinc-400">Desenvolvido por Vinicius de Medeiros</p></a>
      </footer>
    </main>
  )
}

export default App
