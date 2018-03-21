function WeatherInfoController($http) {

    this.optimTemp = 21;
    this.optimHum = 50;
    this.ctime = moment().format('Do MMMM YYYY');
    console.log('time is', this.ctime);

    this.bw = [];

    // functions that call the DB and return the data.
    this.dbCall = () => {
        $http.get('http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=ddc11a632a20bb9c94d49a9709f4a1a7')         .then( (response) => {
            console.log('inside prom', response.data);
            return response.data;
        }, err => {
            console.log('error :', err);
        }).then((data) => {
            this.bw = data.list;
            this.thelist = this.bw.sort((a,b) => {
                return (a.main.temp === b.main.temp) ? Math.abs(this.optimHum - a.main.humidity) - Math.abs(this.optimHum - b.main.humidity) : Math.abs(this.optimTemp - a.main.temp) - Math.abs(this.optimTemp - b.main.temp);
            });
            console.log(this.thelist);
        });
    };

    this.dbCall();


}

app.component('weatherInfo', {
    templateUrl: 'weather-info/weather-info.html',
    controller: WeatherInfoController,
    controllerAs: 'vm'
});