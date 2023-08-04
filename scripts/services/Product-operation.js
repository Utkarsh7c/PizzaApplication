// perform CRUD:Create-Read-Update-Delete Operation, sort ,delete 
// export default fun 
import Product from "../models/Product.js";
import  doNetworkCall from "./api-client.js";
const productoperation={
     products:[], // Key:value
     search(pizzaId){
         const product = this.products.
         find(currentProduct=>currentProduct.id==pizzaId);
         console.log('Product Found ', product);
         product.isAddedInCart = true;
         console.log('Array ', this.products);
     },
     getProductsInCart(){
         const productInBasket = this.products.filter(product=>product.isAddedInCart);
         return productInBasket;
     },
 
     async loadProducts(){
       const pizzas=  await doNetworkCall();
       const   pizzaarray=pizzas['Vegetarian'];
       const productsArray=pizzaarray.map(pizza=>{
            const currentpizza=new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url)
            return currentpizza;
       })
       console.log('********Product Array ', productsArray);
       this.products = productsArray;
       return productsArray;  // Wrap in Promise
   },
    sortProducts(){
  
    }
}
export default productoperation;