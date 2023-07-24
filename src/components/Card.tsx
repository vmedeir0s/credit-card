import contactlessLogo from '../assets/images/ContactlessPayment.svg'
import shieldLogo from '../assets/images/ShieldCheck.svg'
import { CardType } from "../types"

export function Card({ getBandeiraLogo, data }: CardType) {
  return (
    <div className="flex flex-col h-full justify-center items-center w-80 max-lg:h-60 gap-5">
      <div className="flex flex-col justify-between w-80 rounded-md bg-gradient-to-br from-gray-800 via-purple-700 to-teal-600 shadow border border-gray-700 max-lg:h-[168px] max-lg:w-[280px] p-4 h-44">
        <div className="flex justify-between">
          <img src={getBandeiraLogo(data)} alt="cardLogo" />
          <img src={contactlessLogo} alt="contaclessLogo" />
        </div>
        <div className="justify-stretch">{data.cardNumber ? data.cardNumber : "**** **** **** ****"}</div>
        <div className="flex justify-between">
          <div>{data.name ? data.name.toUpperCase() : "Seu nome aqui"}</div>
          <div>{data.date ? data.date : " ** / **"}</div >
        </div>
      </div>
      <div className="flex gap-3">
        <img src={shieldLogo} alt="shield-check-logo" />
        <p>Seus dados estão seguros</p>
      </div>
    </div>
  )
}