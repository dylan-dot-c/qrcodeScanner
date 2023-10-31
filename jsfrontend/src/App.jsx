import './App.css'
import Html5QrcodePlugin from './components/Html5QrcodeScanner'
function App() {

  
  const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
        alert(decodedResult)
        alert(decodedText)
    };

    return (
        <div className="App">
          <h1>Hello WOrld</h1>
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    );

}

export default App
