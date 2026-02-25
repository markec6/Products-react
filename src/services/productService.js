import axios from "axios";

class productService {
  static getALlProducts = () => axios.get('https://dummyjson.com/products?limit=9')
  static getSingleProducts = (id) => axios.get(`https://dummyjson.com/products/${id}`) // ovako prosledjujemo id u useEffect
  // napravili smo 2 requesta (za sve proizvode), (za jedan prozivod)
}

export default productService