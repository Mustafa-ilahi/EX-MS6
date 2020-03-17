function Volume(height,diameter){
    this.height= height;
    this.diameter = diameter;
    this.radius = this.diameter/2;
    this.result = this.height* Math.pow(this.radius,2)* Math.PI; 
    document.write("<h3>" + "Volume: " + "</h3>");
    document.write("<h3>" + this.result + "</h3>");
}
var height1 = prompt("Enter Height 1:");
var diameter1 = prompt("Enter Diameter 1:");
var height2 = prompt("Enter Height 2:");
var diameter2 = prompt("Enter Diameter 2:");
var height3 = prompt("Enter Height 3:");
var diameter3 = prompt("Enter Diameter 3:");
var height4 = prompt("Enter Height 4:");
var diameter4 = prompt("Enter Diameter 4:");
var volume1 = new Volume(height1,diameter1);
var volume2 = new Volume(height2,diameter2);
var volume3 = new Volume(height3,diameter3);
var volume4 = new Volume(height4,diameter4);
