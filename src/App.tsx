import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import Welcome from "./components/Welcome";

function App() {

  return (
    <>
        {/* <Welcome name="Jun" /> */}
        {/* <UserCard name='Anthony' age={25} /> */}
        <ProductCard productName="Rice" price={10} inStock={true}/>
        <ProductCard productName="Rice" price={10} inStock={false}/>
    </>
  )
}

export default App
