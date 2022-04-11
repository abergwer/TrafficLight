var TrafficLight = require('./app');

class TrafficLights {
    constructor() {
        this.trafficLights = []
        let i = 0
        while (i < 20) {
            this.trafficLights.push(new TrafficLight(i));
            i += 1;
        }
        this.trafficLights[0].lat = 31.979440;
        this.trafficLights[0].long = 34.7793;
        this.trafficLights[0].time = 20;
        this.trafficLights[0].green_time = 10;
        this.trafficLights[0].red_time = 10;
    }
    getJsonFile = (id) => {
        return this.trafficLights[id].getJsonFile()
    }
    getJsonFileOfAllTrafficLights = () => {
        let result = [];
        let i = 0;
        this.trafficLights.forEach(element => {
            result.push({"id": element.id, "cars_pass_in_red" : element.counter, "total_cars_in_the_past_10_minutes" : element.total_counter})
        });
        const jsonString = JSON.stringify(Object.assign({}, result));
        return jsonString;
    }
}
//temp code

//end temp code
let a = new TrafficLights();
console.log(a.getJsonFile(1));

const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors());


app.get("/traffic", (req, res) => {
    const id = req.query.id;
    res.send(a.getJsonFile(id))
})

app.get("/home", (req, res) => {
    res.send(a.getJsonFileOfAllTrafficLights())
})

app.listen(3001, ()=> {console.log("listening")})


// app.get("/traffic", (req, res) => {
//     const id = req.query.id;
//     console.log(id)
//     res.send("Hi")
// })
