class TrafficLight {
    constructor(id) {
        this.id = id;
        this.maxSpeed = Math.floor(Math.random()*10)*10;
        this.lat = Math.random()*100;
        this.long = Math.random()*100;
        this.time = Math.floor(Math.random() * 10) + 15;
        this.red_time = this.time;
        this.green_time = this.time;
        this.save_time = this.green_time;
        this.color = "green";
        this.counter = 0 //number of cars that drive in red traffic light
        this.total_counter = 0 //number of cars that drive in this traffic light section

        this.carsDriveInRed();
        this.carsDriveInThisTrafficLightSection();
        this.changeTrafficLight();
        setInterval(() => {
            this.counter = 0;
            this.total_counter =0;
        }, 1000 * 60 * 10);
        
        //setTimeout(() => { this.changeTrafficLight(); }, 1000)
    }
    changeTrafficLight = () => {
        setInterval(() => {
            if (this.color === "green") {
                if (this.green_time > 0) {
                    this.green_time -= 1;
                }
                else if (this.green_time == 0) {
                    this.color = "red";
                    this.green_time = this.save_time;
                    this.save_time = this.red_time;
                }
            }
            else {
                if (this.red_time > 0) {
                    this.red_time -= 1;
                }
                else if (this.red_time == 0) {
                    this.color = "green";
                    this.red_time = this.save_time;
                    this.save_time = this.green_time;
                }
            }
        }
            , 1000);
    }

    carsDriveInRed = () => {
        setInterval(() => {
            this.counter += Math.floor(Math.random() * 3);
        }, 1000 * 60);
    }

    carsDriveInThisTrafficLightSection = () => {
        setInterval(() => {
            this.total_counter += Math.floor(Math.random() * 100);
        }, 1000 * 30);
    }

    getTrafficLightStatus = () => {
        console.log('Number of cars driving in red light in the past 10 minutes ' + this.counter);
        console.log('Number of cars driving in this traffic light section ' + this.total_counter);
        console.log('the traffic light will be ' + this.color + ' for the next ' + (this.color == "green" ? this.green_time : this.red_time))
    }
    
    getJsonFile = () => {
        const time = this.color == "green" ? this.green_time : this.red_time;
        return {
            "latitude" : this.lat,
            "longitude": this.long,
            "timer" : time,
            "color" : this.color,
            "life_time" : this.time
        }
    };
}

const firstTrafficLight = new TrafficLight(maxSpeed = 60, latitude = 56, longitude = 32)

change_traffic_light = () => {
    setInterval(() => {
        firstTrafficLight.getJsonFile()
    }
        , 1000);
}
change_traffic_light()


let http = require('./app');



module.exports = TrafficLight;
// post: lat, long, timer, color;