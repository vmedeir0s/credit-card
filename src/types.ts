export type CreditCardData = {
  name: string;
  cardNumber: string;
  date: string;
  code: string;
}

export type FormProps = {
  data: CreditCardData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
}