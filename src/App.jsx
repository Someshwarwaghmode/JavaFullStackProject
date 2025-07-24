import './App.css'
import NavigationBar from './customer/comp/navigation/NavigationBar'
import HomePage from './customer/comp/pages/HomePage'
import ProductDetailesPage from './customer/comp/pages/ProductDetailesPage'
import ProductList from './customer/comp/productList/ProductList'
// import HomePageCard from './customer/components/HomePageSection/HomePageCard'
// import MainCarousel from './customer/components/HomePageSection/SlideBanner'
// import Navigation from './customer/components/Navigation/Navigation'
// import HomePage from './customer/components/pages/HomePage'
// import HomePage from './customer/components/HomePage/HomePage'
function App() {
  return (
    <div>
        <NavigationBar/>
        <HomePage/>
        <ProductDetailesPage/>
        <ProductList/>
    </div>
  )
}

export default App
