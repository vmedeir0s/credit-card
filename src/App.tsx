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

  // const [savedCards, setSavedCards] = useState<CreditCardData[]>([])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
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
    <main className="bg-slate-300 h-[calc(100lvh)] p-3">
      <div className="bg-white flex flex-col p-3 rounded-md shadow-md">
        <div className="bg-slate-600 rounded-md p-2">
          <h2 className="font-bold text-white text-2xl">{`Bem vindo: ${data.name}`}</h2>
          <h2 className="font-bold text-white text-2xl">{`Seu novo cartão: ${data.cardNumber}`}</h2>
        </div>
        <section>
          <Form
            data={data}
            handleSubmitForm={handleSubmit}
            handleInputChange={handleChange}
            isFormValid={isFormValid}
          />
        </section>
      </div>
      <div>
        <div>
          <h2>Cartões cadastrados</h2>
        </div>
        <section />
      </div>
    </main>
  )
}

export default App
