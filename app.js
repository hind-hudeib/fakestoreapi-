

class Product {
    constructor(title, price, description, image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}


const products = [];

// retrieve data from API and create objects
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // create 20 product objects from retrieved data and push to array
        for (let i = 0; i < 20; i++) {
            const productData = data[i];
            const product = new Product(
                productData.title,
                productData.price,
                productData.description,
                productData.image
            );
            products.push(product);
        }

        // loop through array and render each product card in the main section
        const containerDiv = document.querySelector('.grid-container');

        containerDiv.innerHTML = products.map(product => {
            return `
        <div class="card p-2 m-1 align-items-center">
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <span>$${product.price}</span>
          <p>${product.description}</p>
        </div>`;
        }).join('');
    })


    .catch(error => {
        console.error('Error retrieving products:', error);
    });




