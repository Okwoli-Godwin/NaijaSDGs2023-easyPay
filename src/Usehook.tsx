
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import Swal from "sweetalert2";

interface Customer {
  email: string;
  phone_number: string;
  name: string;
}

interface Customizations {
  title: string;
  description: string;
  logo: string;
}

interface Config {
  public_key: string;
  tx_ref: number;
  amount: number;
  currency: string;
  payment_options: string;
  customer: Customer;
  customizations: Customizations;
}

export default function App() {
  const config: Config = {
    public_key: 'FLWPUBK_TEST-0f4a6722cc16d123de7d2141cd6567c6-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Credit Wallet',
    callback: (response: any) => {
      console.log(response);
      Swal.fire({
        icon: response.status === 'successful' ? 'success' : 'error',
        title: response.status === 'successful' ? 'Payment Successful!' : 'Payment Unsuccessful!',
        text: response.status === 'successful' ? 'Your payment was successful.' : 'There was an issue with your payment.',
      });
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <button style={{backgroundColor: "#716DF2", width: "180px", height: "45px", borderRadius: "3px", color: "#fff"}}>
        <FlutterWaveButton {...fwConfig} />
      </button>
    </div>
  );
}
