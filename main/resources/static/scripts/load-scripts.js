(function () {
  fetch('./navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    fetch('./footer.html')
          .then(res => res.text())
          .then(data => {
            document.getElementById('footer').innerHTML = data;
            const scriptsToLoad = [
                
              "./scripts/navbar.js"

            ];

            scriptsToLoad.forEach(src => {
              const script = document.createElement("script");
              script.src = `${src}?v=${Math.random().toString(36).substring(2, 8)}`;
              document.body.appendChild(script);
            });
          });
    
  });
  
  })();