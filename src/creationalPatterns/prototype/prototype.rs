#[derive(Clone)]

struct Rectangle {
  pub width: f32,
  pub height: f32,
}

fn main() {
  // Create a prototype rectangle
  let prototype = Rectangle {
    width: 10.0,
    height: 5.0,
  };

  // Clone the prototype to create new instances
  let mut rectangle1 = prototype.clone();
  rectangle1.width = 5.5;
  let mut rectangle2 = prototype.clone();
  rectangle2.height = 10.0;

  // Display the properties of the cloned rectangles
  println!("Rectangle 1: {}, {}", rectangle1.width, rectangle1.height);
  println!("Rectangle 2: {}, {}", rectangle2.width, rectangle2.height);
}
