// Product model(Blue print) 
// just Structure
// pizza objects :: id,name,desc,price

class Product{
    constructor(id,name,desc,price,url){
        // this :: keyword contains current calling object reference 
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.url=url;
        this.isAddedInCart = false;
    }
}
export default Product