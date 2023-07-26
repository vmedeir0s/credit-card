import { CreditCardData, FormProps } from "../types"

import visaLogo from '../assets/images/VisaLogo.svg'
import mastercardLogo from '../assets/images/MastercardLogo.svg'
import eloLogo from '../assets/images/EloLogo.svg'
import { Card } from "./Card"

function Form({ handleInputChange, data, handleSubmitForm, isFormValid, handleKeyDown }: FormProps) {
  function getBandeiraLogo(data: CreditCardData) {
    if (data.cardNumber[0] === "4") {
      return visaLogo
    }
    else if (data.cardNumber[0] === "5") {
      return mastercardLogo
    }
    else return eloLogo
  }

  return (
    <div className="bg-gray-800 h-[420px] flex flex-col p-7 rounded ring-1 ring-gray-700 w-[700px] max-lg:w-full max-lg:h-full text-gray-200">
      <div className="flex max-lg:flex-col-reverse max-lg:items-center items-center justify-between h-4/5 max-lg:justify-around ">
        <form className="flex flex-col w-[calc(45%)] max-sm:w-full gap-2">
          <fieldset className="flex flex-col font-semibold w-full">
            <label htmlFor="cardNumber">
              Número do cartão
            </label>
            <input className="bg-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-600 rounded p-3 ring-1 ring-gray-700 w-full"
              type="string"
              id="cardNumber"
              name="cardNumber"
              value={data.cardNumber}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              maxLength={19}
              autoComplete="one-time-code"
            />
          </fieldset>
          <fieldset className="flex flex-col font-semibold w-full">
            <label htmlFor="name">
              Nome do titular
            </label>
            <input className="bg-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-600 rounded p-3 ring-1 ring-gray-700 w-full"
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              placeholder="Nome como está no cartão"
              maxLength={22}
              autoComplete="one-time-code"
            />
          </fieldset>
          <div className="flex justify-between">
            <fieldset className="flex flex-col font-semibold w-2/4">
              <label htmlFor="date">
                Validade
              </label>
              <input className="bg-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-600 rounded p-3 ring-1 ring-gray-700 w-full"
                type="text"
                id="date"
                name="date"
                value={data.date}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="mm/aa"
                maxLength={5}
                autoComplete="off"
              />
            </fieldset>
            <fieldset className="flex flex-col font-semibold w-5/12">
              <label htmlFor="code">
                CVC
              </label>
              <input className="bg-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-600 rounded p-3 ring-1 ring-gray-700 w-full"
                type="text"
                id="code"
                name="code"
                value={data.code}
                onChange={handleInputChange}
                placeholder="***"
                maxLength={3}
                autoComplete="off"
              />
            </fieldset>
          </div>
        </form>
        <Card getBandeiraLogo={getBandeiraLogo} data={data} />
      </div>
      <button
        className="py-4 bg-purple-600 rounded shadow text-white font-semibold disabled:opacity-50 enabled:hover:bg-purple-500"
        disabled={!isFormValid}
        onClick={handleSubmitForm}
      >
        Adicionar Cartão
      </button>
    </div>
  )
}

export default Form;
