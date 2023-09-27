// Token generation function
function generateToken(availableDigits) {
    let token = '';
    for (let i = 0; i < 16; i++) {
      const randomDigit = availableDigits[Math.floor(Math.random() * availableDigits.length)];
      token += randomDigit;
      if (i % 4 === 3 && i < 15) {
        token += '-';
      }
    }
    return token;
  }
  
// Luhn algorithm for token validation function
function isTokenValid(token) {
    const digits = token.replace(/-/g, '').split('').map(Number);
    let sum = 0;
    let double = false;
    // Iterate through the digits from right to left
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = digits[i];
      if (double) {
        digit *= 2;
        // If doubling results in a two-digit number, subtract 9
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      double = !double;
    }
    // The token is valid if the sum is a multiple of 10
    return sum % 10 === 0;
  }
  

module.exports = { generateToken, isTokenValid };
