//Constructor function
function Cylinder(cylHeight, cylDiameter) {
    this.cylHeight = cylHeight;
    this.cylDiameter = cylDiameter;
    this.volume = function () {
        var cylRadius = cylDiameter/2;
        return Math.pi * 2 * this.cylHeight * cylRadius;
    }
}

for (i = 0; i < 2 ; i++) {
    document.querySelectorAll(".input")[i].addEventListener("change", function() {
    }

var cyl1Height = document.querySelector(".inputHeight").value;
console.log(cyl1Height);
        var cyl1Diameter = document.querySelector(".inputDiameter").value;
        console.log(cyl1Diameter);
        var cyl1 = new Cylinder(cyl1Height, cyl1Diameter);
        document.querySelector(".result").innerHTML = cyl1.volume;
    })
