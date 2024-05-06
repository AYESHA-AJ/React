import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  //for amount
  const [amount, setAmount] = useState(0)
  //to select currency type
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  //for result
  const [convertedAmount,setConvertedAmount]=useState(0)
  //our own custom hooks
  //getting all data
  const currencyInfo = useCurrencyInfo(from)
//getting all keys from objects
  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
 
  return (
    <div
        className="w-full h-screen flex "
       
    >
      <div
        className="w-1/2 h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600')`
      }} >

      </div>
        <div className="w-1/2 h-full flex justify-center items-center bg-pink-100">
            <div className="w-full max-w-md h-2/3 border border-gray-500 rounded-lg p-12 backdrop-blur-md bg-black/30 flex justify-center items-center">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mt-1.5 mb-1">
                        <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency)=>setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={to}
                amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
