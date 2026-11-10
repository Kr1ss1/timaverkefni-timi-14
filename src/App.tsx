import './App.css'
import Header from './components/Header'
import MenuItem from './components/MenuItem'
import MenuSection from './components/MenuSection'
import Footer from './components/Footer'

const drinks = [
  { id: 1, name: "Latte", description: "Espresso með flóaðri mjólk", price: 690 },
  { id: 2, name: "Haframjólkurlatte", description: "Með haframjólk", price: 740, isVegan: true },
  { id: 3, name: "Karamellu Frappe", description: "Með karamellu og rjóma", price: 1280 },
  { id: 4, name: "Heitt súkkulaði", description: "Súkkulaði með rjóma", price: 980, emoji: "🍫" },
  { id: 5, name: "Espresso Skot", description: "Sterkt og kraftmikið", price: 580, isVegan: true },
]

const food = [
  { id: 1, name: "Smjördeigshorn", description: "Nýbakað og stökkt croissant", price: 590, emoji: "🥐" },
  { id: 2, name: "Samloka", description: "Súrdeigsbrauð með skinku, osti og pestói", price: 1490, emoji: "🥪" },
  { id: 3, name: "Kanilsnúður", description: "Mjúkur snúður með kanil og glassúr", price: 650, emoji: "🌀" },
  { id: 4, name: "Hummus vefja", description: "Vefja með hummus, grænmeti og spínati", price: 1390, emoji: "🌯", isVegan: true },
]

function App() {
  return (
    <main>
      <div className="Header">
        <Header name="KaffiKóði" slogan="Kafihús kóðara" />
      </div>
      <div className="Menu">
        <MenuSection title="Drykkir">
          {drinks.map((drink) => (
            <MenuItem
              key={drink.id}
              name={drink.name}
              description={drink.description}
              price={drink.price}
              isVegan={drink.isVegan}
              emoji={drink.emoji}
            />
          ))}
        </MenuSection>
        <MenuSection title="Matur">
          {food.map((dish) => (
            <MenuItem
              key={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              isVegan={dish.isVegan}
              emoji={dish.emoji}
            />
          ))}
        </MenuSection>
      </div>
      <Footer address="Laugavegur 1, 101 Reykjavík" openingHours="Virka daga 7–18, helgar 9–17" />
    </main>
  )
}

export default App
