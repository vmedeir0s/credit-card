import { FormProps } from "../types"

function Form({ handleInputChange, data, handleSubmitForm, isFormValid }: FormProps) {
  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col bg-sky-100">
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="cardNumber">
        Card Number
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={data.cardNumber}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="date">
        Expiration date (mm/yy)
        <input
          type="text"
          id="date"
          name="date"
          value={data.date}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="code">
        CVC code
        <input
          type="text"
          id="code"
          name="code"
          value={data.code}
          onChange={handleInputChange}
        />
      </label>
      <button disabled={!isFormValid}>Cadastrar</button>
    </form>
  )
}

export default Form;