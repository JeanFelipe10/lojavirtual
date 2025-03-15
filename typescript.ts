interface Shape {
  name: string;
  getArea(): number;
}

class Circle implements Shape {
  name: string;
  radius: number;

  constructor(radius: number) {
    this.name = "Círculo";
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5); // Raio = 5
console.log(`${myCircle.name} - Área: ${myCircle.getArea().toFixed(2)}`);

// código aula teste
