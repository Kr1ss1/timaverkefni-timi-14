import './App.css'
import Header from './components/Header'
import MenuItem from './components/MenuItem'

function App() {
  

  return (
    <main>
    <div className="Header">
      <Header name="KaffiKóði" slogan="Kafihús kóðara" />
    </div>
    <div className="Menu">
      <MenuItem name="Karamellu Frappe" description="Sætt og fullt af rjóma og slatta af karamellu" price={1280} />
      <MenuItem name="Heitt súkkulaði" description=" Brætt súkkulaði og mjólk, toppað með rjóma og súkkulapði spænum" price={980} />
      <MenuItem name="Espresso Skot" description="Kraftmikið skot fullt af koffíni og er algjör bragðbomba" price={580} isVegan />
    </div>
    </main>
  )
}

export default App

