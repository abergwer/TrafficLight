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
}
//temp code

//end temp code
let a = new TrafficLights();
console.log(a.getJsonFile(1));

const express = require('express');
const req = require('express/lib/request');
const app = express()

app.get("/traffic", (req, res) => {
    const id = req.query.id;
    res.send(a.getJsonFile(id))
})

app.listen(3000)


// app.get("/traffic", (req, res) => {
//     const id = req.query.id;
//     console.log(id)
//     res.send("Hi")
// })
