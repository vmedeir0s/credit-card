import React, { useState } from "react"
import './App.css'
import Form from "./components/Form"
import { CreditCardData } from "./types"

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setData({
      name: "",
      cardNumber: "",
      date: "",
      code: ""
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

    <main className="bg-gray-900 h-[calc(100dvh)] flex items-center justify-center">
      <Form
        data={data}
        handleSubmitForm={handleSubmit}
        handleInputChange={handleChange}
        isFormValid={isFormValid}
        handleKeyDown={handleKeyDown}
      />
    </main>
  )
}

export default App
