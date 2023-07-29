fetch('https://agenciamanadah.com.br/apiteste/dados.php')
.then((result) => {
    result.json()
})
.then(console.log)