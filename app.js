// app.js
document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-container');
  
    // Sample data (will be replaced by admin panel data)
    const investments = [
      {
        tag: 'Real Estate',
        image: 'real_estate.jpg',
        title: 'Luxury Apartments in New York',
        location: 'New York, USA',
        description: 'Investment opportunity in luxury apartments in downtown New York.',
        totalPrice: '$500,000',
        getPrice: '$50,000',
        securityType: 'Equity',
        investmentMultiple: 'x2.5',
        maturity: '5 years',
        minInvestment: '$5,000'
      },
      {
        tag: 'Renewable Energy',
        image: 'solar_farm.jpg',
        title: 'Solar Farm in California',
        location: 'California, USA',
        description: 'Join the green revolution by investing in solar farms.',
        totalPrice: '$1,000,000',
        getPrice: '$200,000',
        securityType: 'Debt',
        investmentMultiple: 'x3',
        maturity: '7 years',
        minInvestment: '$10,000'
      }
    ];
  
    // Dynamically insert cards
    investments.forEach(investment => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      card.innerHTML = `
        <img src="${investment.image}" alt="${investment.tag}">
        <h3 class="card-title">${investment.title}</h3>
        <p class="card-location">${investment.location}</p>
        <p class="card-description">${investment.description}</p>
        <div class="card-details">
          <p>Total Price: ${investment.totalPrice}</p>
          <p>Get Price: ${investment.getPrice}</p>
          <p>Security Type: ${investment.securityType}</p>
          <p>Investment Multiple: ${investment.investmentMultiple}</p>
          <p>Maturity: ${investment.maturity}</p>
          <p>Min Investment: ${investment.minInvestment}</p>
        </div>
        <button>Invest Now</button>
      `;
      
      cardsContainer.appendChild(card);
    });
  });
  