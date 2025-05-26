import EmailForm from "./components/EmailForm";
import NameForm from "./components/NameForm";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import Welcome from "./components/Welcome";

function App() {

  return (
    <>
        {/* <Welcome name="Jun" /> */}
        {/* <UserCard name='Anthony' age={25} /> */}
        {/* <ProductCard productName="Rice" price={10} inStock={true}/>
        <ProductCard productName="Rice" price={10} inStock={false}/> */}
        {/* <NameForm /> */}
        <EmailForm />
    </>
  )
}

export default App
