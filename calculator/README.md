# Calculator Smart Contract

This smart contract is an actor that performs basic calculator functions. It supports operations like addition, subtraction, multiplication, division, and clearing.

## Features

- Basic Operations: Addition, subtraction, multiplication, and division
- Clear Function: Resets the calculator value
- Asynchronous Operations: Operations can be performed in parallel
- Division by Zero Check: Prevents division by zero error
## Usage

- `hucre`: Holds the current value of the calculator. Operations are performed on this variable.

- `toplama(s: Int)`: Adds the current value to `s`.
- `cikarma(s: Int)`: Subtracts `s`from the current value.
- `carpma(s: Int)`: Multiplies the current value by `s`.
- `bolme(s: Int)`:Divides the current value by `s`. If `s` is zero, returns null.
- `temizle()`:  Resets the current value of the calculator to zero.
