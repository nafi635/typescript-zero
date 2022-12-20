import {Circle} from './shapes'   // We can import it if we export the respected class
import {Circle as CircleShape} from './shapes' // Aliases on the import


let circle = new CircleShape(1);
console.log(circle.radius);
