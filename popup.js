document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('decode').addEventListener('click', function() {
      const token = document.getElementById('token').value;
      const result = document.getElementById('result');
      
      try {
        const decodedToken = JSON.stringify(JSON.parse(atob(token.split('.')[1])), null, 2);
        result.innerText = decodedToken;
      } catch (error) {
        result.innerText = 'Incorrect token.';
      }
    });
  });
  