function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, parseInt('10', 10)); // Correct: String is converted to number before the function call.