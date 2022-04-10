var TrafficLight = require('./app');

class TrafficLights {
    constructor() {
        this.trafficLights = []
        let i = 0
        while (i < 20) {
            this.trafficLights.push(new TrafficLight(i));
            i += 1;

        }
    }
    getJsonFile = (id) => {
        return this.trafficLights[id].getJsonFile()
    }
}
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
