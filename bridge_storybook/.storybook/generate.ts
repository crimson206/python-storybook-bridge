import axios from 'axios';
import { exec } from 'child_process';
import { writeFileSync } from 'fs';

// URL of the OpenAPI JSON
const apiUrl = 'http://localhost:8080/openapi.json';

// Function to fetch OpenAPI JSON and generate TypeScript client
async function generateTypeScriptClient() {
    try {
        // Fetch the OpenAPI JSON
        const response = await axios.get(apiUrl);
        const apiData = response.data;

        // Write the OpenAPI JSON to a temporary file
        const tempFileName = 'api-schema.json';
        writeFileSync(tempFileName, JSON.stringify(apiData), 'utf-8');

        // Command to generate TypeScript client
        const generateCommand = `openapi-generator-cli generate -i ${tempFileName} -g typescript-axios -o ./src/stories/ts-client`;

        // Execute the command
        exec(generateCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log('TypeScript client generated successfully!');
        });
    } catch (error) {
        console.error('Failed to fetch OpenAPI JSON:', error);
    }
}

// Run the function
export default generateTypeScriptClient
