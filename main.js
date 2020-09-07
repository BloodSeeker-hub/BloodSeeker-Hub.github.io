window.onload = function(){
    getCovidStats();
}

function getCovidStats(){
    fetch("https://coronavirus-19-api.herokuapp.com/countries/Philippines")
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data);
        let cases = data.cases;
        let deaths = data.deaths;
        let recovered = data.recovered;
        let active = data.active;
        let critical = data.critical;

        document.getElementById('active').innerHTML = active.toLocaleString('en');
        document.getElementById('critical').innerHTML = critical.toLocaleString('en');
        document.getElementById('case').innerHTML = cases.toLocaleString('en');
        document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
        document.getElementById('recovered').innerHTML = recovered.toLocaleString('en');
    })
    .catch(function(){console.log("error")})
}

