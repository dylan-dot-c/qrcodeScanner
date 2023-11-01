// import { set, useSchema } from 'sanity';
import './App.css'
import Html5QrcodePlugin from './components/Html5QrcodeScanner'
import { useState, useEffect } from 'react';
// import axios from "axios"
import {client, getProduct} from './sanity'
function App() {

  const [codes, setCodes] = useState([])


  
  const onNewScanResult = async (decodedText, decodedResult) => {
        // handle decoded results here
        setCodes((prev) => {
          const copy = [...prev]
          copy.push(decodedText)
          return copy
        })
        console.log("Data?")
        const data = await getProduct(decodedText)
        if(data.length > 0) {
          console.log(data.name, data.price, data.barcode)
        }
        setCodes((prev) => {
          const copy = [...prev]
          copy.push(decodedText)
          if(data.length > 0) {
          console.log(data[0].name, data[0].price, data[0].barcode)
          copy.push(`${data[0].name} ${data[0].price} ${data[0].barcode}`)
        }
          return copy
        })
        console.log(data)
        // alert(decodedResult)
        console.log(decodedResult)
        alert(decodedText)


    };

    return (
        <div className="App">
          <h1>Hello WOrld</h1>
            <div style={{maxWidth: "500px", margin: "auto"}}>
              <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
            </div>
            <ul>

            {

              
              codes.map((code, i) => {
                return <li key={i}>{code}</li>
              })
            }
            </ul>
        </div>
    );

}

export default App
