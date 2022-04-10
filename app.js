class TrafficLight {
    constructor(maxSpeed, time_till_next_change, latitude, longitude) {
        this.maxSpeed = maxSpeed;
        this.time_till_next_change = time_till_next_change;
        this.lat = latitude;
        this.long = longitude;

        this.red_time = Math.floor(Math.random() * 10);
        this.green_time = Math.floor(Math.random() * 10);
        this.save_time = this.green_time;
        this.color = "green";
        this.counter = 0 //number of cars that drive in red traffic light
        this.total_counter = 0 //number of cars that drive in this traffic light section
        console.log(this.counter)
        this.carsDriveInRed();
        this.carsDriveInThisTrafficLightSection();
        setTimeout(() => { this.resetNumberOfCarsCounter(() => { this.counter = 0 }); }, 1000 * 60 * 10);
        setTimeout(() => { () => { this.total_counter = 0 }; }, 1000 * 60 * 10);
        //this.changeTrafficLight();
        setTimeout(() => { this.changeTrafficLight(); }, 1000)
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
}

const firstTrafficLight = new TrafficLight(maxSpeed = 60, time_till_next_change = 8, latitude = 56, longitude = 32)

change_traffic_light = () => {
    setInterval(() => {
        firstTrafficLight.getTrafficLightStatus()
    }
        , 1000);
}
change_traffic_light()