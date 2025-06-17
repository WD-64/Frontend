async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayProducts() {
  const products = await fetchProducts();
  console.log(products);

  const productContainer = document.getElementById('product-container');

  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('w-36');

    const productImg = document.createElement('img');
    productImg.src = product.image;

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.title;

    productCard.appendChild(productImg);
    productCard.appendChild(productTitle);
    productContainer.appendChild(productCard);
  });
}

displayProducts();

// const arrowfunc = async () => {}
