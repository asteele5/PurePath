class Restaurant{
    //walking  
    constructor(name, price, cuisine, 
        meat, healthScore, height1, height2, commuteTime, waitTime) {
            this.name = name; 
            this.price = price; 
            this.cuisine = cuisine;  
            this.meat = meat;  
            this.healthScore = healthScore; 
            this.height1 = height1; 
            this.height2 = height2;
            this.commuteTime = commuteTime;  
            this.waitTime = waitTime; 
            const susScore = {
                getSusScore() {
                    count = 55; 
                    if (meat.equals("vegetarian")) {
                        count += 10; 
                    } 
                    if (meat.equals("vegan")) {
                        count += 20; 
                    } 
                    if (meat.equals("halal")) {
                        count += 5; 
                    }
                    count += (healthScore * 0.1); 
                    return Math.trunc(count); 
                }
            }
            const convScore = {
                getConvScore() {
                    count = 100; 
                    heightDiff = height2 - height1; 
                    count -= (height2 - height1) * 0.4; 
                    count -= commuteTime * 0.3; 
                    return Math.trunc(count);
                }
            }
            const avg = (susScore + convScore) / 2; 
        }
    //taking bus or marta 
    constructor(name, price, cuisine, meat, 
        healthScore, nearestStop, commuteTime) {
            this.name = name; 
            this.price = price; 
            this.cuisine = cuisine;  
            this.meat = meat;  
            this.healthScore = healthScore; 
            this.nearestStop = nearestStop; 
            this.commuteTime = commuteTime; 
            const susScore = {
                getSusScore() {
                    count = 55 - (commuteTime * 0.2); 
                    if (meat.equals("vegetarian")) {
                        count += 5; 
                    } 
                    if (meat.equals("vegan")) {
                        count += 10; 
                    } 
                    if (meat.equals("halal")) {
                        count += 2.5; 
                    }
                    count += (healthScore * 0.1); 
                    return Math.trunc(count); 
                }
            }
            const convScore = {
                getConvScore() {
                    count = 10; 
                    n = 0; 
                    while (commuteTime > 10) {
                        commuteTime /= 10; 
                        n++; 
                    }
                    count -= (commuteTime + n) * 0.3; 
                    return Math.trunc(count);
                }
            }
            const avg = (susScore + convScore) / 2; 
    }
}







