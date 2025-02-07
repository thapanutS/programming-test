Clone the repository:
    git clone <repository-url>
    cd <repository-folder>

Install dependencies:
    npm install

Install TypeScript globally (if not installed):
    npm install -g typescript

Install ts-node for running TypeScript files directly:
    npm install -g ts-node

Running the Code
Compile TypeScript
To compile the TypeScript file into JavaScript:
    tsc getClockAngle.ts
    tsc getQuestionPart.ts

Run JavaScript
After compilation, you can run the JavaScript files:
    node getClockAngle.js
    node getQuestionPart.js

Directly Run TypeScript with ts-node
Alternatively, you can run the TypeScript file directly without manual compilation using ts-node:
    ts-node getClockAngle.ts
    ts-node getQuestionPart.ts