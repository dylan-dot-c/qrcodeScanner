import './App.css'
import Html5QrcodePlugin from './components/Html5QrCodePlugin'

function App() {

  const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
        alert(decodedResult)
        alert(decodedText)
    };

    return (
        <div className="App">
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
