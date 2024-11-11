async function payWithPaypal() {
    try {
      const response = await fetch('http://localhost:3001/api/paypal/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: '50.00' }) // Example amount
      });
      const data = await response.json();
      window.location.href = data.links[1].href; // Redirect to PayPal approval URL
    } catch (error) {
      console.error('Error with PayPal payment:', error);
    }
  }
  
  async function payWithKlarna() {
    try {
      const response = await fetch('http://localhost:3001/api/klarna/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: '50.00' }) // Example amount
      });
      const data = await response.json();
      alert(data.message); // Simulate Klarna response
    } catch (error) {
      console.error('Error with Klarna payment:', error);
    }
  }
  
  async function applyForFinancialAid() {
    try {
      const response = await fetch('http://localhost:3001/api/fafsa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      alert(data.approved ? 'Financial Aid Approved!' : 'Financial Aid Denied');
    } catch (error) {
      console.error('Error with FAFSA simulation:', error);
    }
  }
  