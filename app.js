class TrafficLight {
    constructor(maxSpeed, time_till_next_change, latitude, longitude) {
        this.maxSpeed = maxSpeed;
        this.time_till_next_change = time_till_next_change;
        this.lat = latitude;
        this.long = longitude;

        this.timer = Math.floor(Math.random() * 10);
        this.red_time = this.timer;
        this.green_time = this.timer;
        this.color = "green";
        this.changeTrafficLight();
        // setTimeout(() => { console.log("world"); }, 10000)
    }
    changeTrafficLight = () => {
        setInterval(() => {
            if (this.color === "green"){
                if (this.green_time > 0){
                    this.green_time -= 1;
                }
                else if(this.green_time == 0){
                    this.color = "red";
                    this.green_time = this.timer;
                }
            }
            else{
                if(this.red_time > 0){
                    this.red_time -= 1;
                }
                else if(this.red_time == 0){
                    this.color = "green";
                    this.red_time = this.timer;
                }
            }
        }
            , 1000);
    }

    getTrafficLightStatus = () => {
        console.log('location', this.lat, this.long);
        console.log('the traffic light will be ' + this.color + ' for the next ' + (this.color=="green" ? this.green_time : this.red_time))
    }
}

const d = new TrafficLight(maxSpeed = 60, time_till_next_change = 8, latitude = 56, longitude = 32)

change_traffic_light = () => {
    setInterval(() => {
      d.getTrafficLightStatus()
    }
        , 1000);
}
change_traffic_light()