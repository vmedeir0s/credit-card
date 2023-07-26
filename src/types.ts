export type CreditCardData = {
  name: string;
  cardNumber: string;
  date: string;
  code: string;
}

export type FormProps = {
  data: CreditCardData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: () => void;
  isFormValid: boolean;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export type CardType = {
  data: CreditCardData;
  getBandeiraLogo: (data: CreditCardData) => string;
}