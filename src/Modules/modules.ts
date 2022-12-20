import {Circle} from '../Objects/shapes'   // We can import it if we export the respected class
import {Circle as CircleShape} from '../Objects/shapes' // Aliases on the import


let circle = new CircleShape(1);
console.log(circle.radius);
