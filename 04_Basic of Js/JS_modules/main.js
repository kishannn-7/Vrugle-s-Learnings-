import { Greeting } from "./kishan.js";

import Nobody from "./kishan.js";  // Default import (you can name it whatever you want)
import { city } from "./kishan.js";  // Named import (names must match)



const Main = function main() {
    console.log(Greeting(Nobody));
    console.log(city);
    
    console.log(Nobody);
    Nobody.photoSrc = "https://example.com/photo.jpg";
    console.log(Nobody);
};

Main();