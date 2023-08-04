//  Glue between view and model
// controller perform i/o operation
// data exchange btw 
import productoperation from "../services/Product-operation.js";
 async function loadpizzas(){
    const pizza = await productoperation.loadProducts();
    console.log('Pizzas are ', pizza);
      
        for(let pizzaa of pizza){
                preparePizzaCard(pizzaa);
            }
            
        }
        // old method 
//         const rowdiv=document.getElementById('load data');
//         let pizzal=pizza.length;
//         for(let i=0;i<pizzal;i++){
//        const col=document.createElement('div');
//        col.classList.add('col-4');
//        col.innnerHTML=`
//        <div class="card" >
//        <img src="${pizza[index].url}" class="card-img-top" alt="...">
//        <div class="card-body">
//          <h5 class="card-title">${pizza[index].name}</h5>
//          <p class="card-text">${pizza[index].desc}</p>
//          <a href="#" class="btn btn-primary">Go somewhere</a>
//        </div>
//      </div>
// `;

// rowdiv.appendChild(col);
// new method ::
function addToCart(){
    // this - keyword (Current calling object reference)
    console.log('Add to Cart Called...', this);
    const currentButton = this; 
    const pizzaId = currentButton.getAttribute('product-id');
    console.log('Pizza Id is ', pizzaId);
    productoperation.search(pizzaId);
    printBasket();
  }
  
  function printBasket(){
    const cartProducts = productoperation.getProductsInCart();
    const basket = document.querySelector('#basket');
    basket.innerHTML = '';
    for(let product of cartProducts){
        const li = document.createElement('li');  // dom 
        li.innerText = `${product.name} and  ${product.price}`;
        basket.appendChild(li);
    }
  }
  
function preparePizzaCard(pizzaa){       // using dom ::document 
        const outputDiv = document.querySelector('#output');
        const colDiv = document.createElement('div');
        colDiv.className = 'col-4';
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.style = "width: 18rem;";
        colDiv.appendChild(cardDiv);
        const img = document.createElement('img');
        img.src = pizzaa.url;
        img.className = 'card-img-top';
        cardDiv.appendChild(img);
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardDiv.appendChild(cardBody);
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.innerText = pizzaa.name;
        const pTag = document.createElement('p');
        pTag.className = 'card-text';
        pTag.innerText = pizzaa.desc;
        const button = document.createElement('button');
        button.setAttribute('product-id', pizzaa.id);
        button.addEventListener('click', addToCart);// Event Bind
        button.innerText = 'Add to Cart';
        button.className = 'btn btn-primary';
        cardBody.appendChild(h5);
        cardBody.appendChild(pTag);
        cardBody.appendChild(button);
        outputDiv.appendChild(colDiv);
    }

        




loadpizzas();

