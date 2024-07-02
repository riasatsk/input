To use @riasatsk/input in your project, you need to install it via npm or yarn. Ensure you have Node.js installed on your machine.

Using npm
bash
Copy code
npm install @riasatsk/input
Using yarn
bash
Copy code
yarn add @riasatsk/input
Usage
Here's a quick guide on how to use @riasatsk/input to read user input from the command line.

Basic Example
This example demonstrates how to use the package to prompt the user for their name:

Create a JavaScript file (e.g., index.js).

Add the following code:

javascript
Copy code
const input = require('@riasatsk/input');

async function main() {
  const name = await input('What is your name? ');
  console.log(`Hello, ${name}!`);
}

main();
Run the script:

bash
Copy code
node index.js
Output:

plaintext
Copy code
What is your name? John
Hello, John!
