// Create Header
const header = document.createElement('header');
header.style.textAlign = 'center';
header.style.padding = '20px';
header.style.backgroundColor = '#0056b3';
header.style.color = 'white';
header.style.fontSize = '2em';
header.innerHTML = 'E-Commerce Store';
document.body.appendChild(header);

// Create Main Container for Cards
const cardContainer = document.createElement('div');
cardContainer.style.display = 'flex';
cardContainer.style.flexWrap = 'wrap';
cardContainer.style.justifyContent = 'center';
cardContainer.style.margin = '20px';
document.body.appendChild(cardContainer);

// Products
const products = [
    {
        image: 'https://i.pinimg.com/originals/2d/66/40/2d66401be0d495df88778a225a7b32be.jpg',
        title: 'Product 1',
        description: 'Description for Product 1',
        price: '$299.99'
    },
    {
        image: 'https://i.pinimg.com/736x/23/bc/23/23bc23e52b4ffe90a4531ff48af06a3f.jpg',
        title: 'Product 2',
        description: 'Description for Product 2',
        price: '$399.99'
    },
    {
        image: 'https://i.pinimg.com/736x/36/ea/f4/36eaf4af31310c7447354fd575136921.jpg',
        title: 'Product 3',
        description: 'Description for Product 3',
        price: '$849.99'
    },
    {
        image: 'https://i.pinimg.com/originals/52/72/11/527211c7e751e6e1b35bef039ccc7dce.jpg',
        title: 'Product 4',
        description: 'Description for Product 4',
        price: '$949.99'
    }
];

// Loop through products to create cards
products.forEach(product => {
    const card = document.createElement('div');
    
    // Set base styles for each card
    card.style.border = '1px solid #ddd';
    card.style.borderRadius = '8px';
    card.style.width = '200px';
    card.style.margin = '10px';
    card.style.padding = '10px';
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    card.style.backgroundColor = '#fff';
    card.style.transition = 'transform 0.2s, box-shadow 0.2s';
    card.style.overflow = 'hidden';

    // Add hover effect
    card.onmouseover = function() {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    };
    card.onmouseout = function() {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    };

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="width: 100%; border-radius: 8px 8px 0 0;">
        <h2 style="font-size: 1.5em; margin: 10px 0;">${product.title}</h2>
        <p style="font-size: 1em; color: #555;">${product.description}</p>
        <p style="font-weight: bold; color: #007bff;">${product.price}</p>
        <button style="
            background-color: #007bff; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            padding: 10px; 
            font-size: 1em; 
            transition: background-color 0.3s;">
            Buy Now
        </button>
    `;

    // Add button hover effect
    const button = card.querySelector('button');
    button.onmouseover = function() {
        button.style.backgroundColor = '#0056b3'; // Darker blue on hover
    };
    button.onmouseout = function() {
        button.style.backgroundColor = '#007bff'; // Original blue
    };

    cardContainer.appendChild(card);
});

// Create Footer
const footer = document.createElement('footer');
footer.style.textAlign = 'center';
footer.style.padding = '20px';
footer.style.backgroundColor = '#0056b3';
footer.style.color = 'white';
footer.style.fontSize = '1em';
footer.innerHTML = '&copy; 2024 E-Commerce Store. All rights reserved.';
document.body.appendChild(footer);