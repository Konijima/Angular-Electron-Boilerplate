const ts = require('typescript');
const path = require('path');
const fs = require('fs');

function generateTypeDefinitions(folderPath, outputFile) {
  // Read the specific folder
  const files = fs.readdirSync(folderPath).filter((file) => file.endsWith('.ts'));

  // Create a TypeScript program with the specific folder's files
  const program = ts.createProgram(files.map((file) => path.join(folderPath, file)), {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.CommonJS,
    declaration: true,
    emitDeclarationOnly: true,
    outDir: folderPath,
  });

  // Collect generated declaration files content
  const declarations = [];

  // Custom writeFile callback to collect generated declaration files
  const writeFileCallback = (filePath, data, writeByteOrderMark, onError, sourceFiles) => {
    if (filePath.endsWith('.d.ts')) {
      // Remove prefixed keywords (export, declare, const)
      const cleanedData = data.replace(/(export|declare|const)\s+/g, '');
      declarations.push(cleanedData);
    } else {
      fs.writeFileSync(filePath, data, { encoding: 'utf8', flag: 'w' });
    }
  };

  // Emit the TypeScript program, which generates the declaration files
  program.emit(undefined, writeFileCallback);

  // Concatenate declarations and wrap them inside the global Window interface
  const wrappedDeclarations = `
// Generated by apiDeclaration.js script - DO NOT EDIT MANUALLY
// Last update: ${new Date().toISOString()}
declare global {
  interface Window {
${declarations.map((decl) => '    ' + decl.replace(/\n/g, '\n    ')).join('\n')}
  }
}

export {};`;

  // Write the concatenated declarations to the output file
  fs.writeFileSync(outputFile, wrappedDeclarations, 'utf8');
}

// Usage example
const folderPath = path.resolve(__dirname, 'electron', 'API');
const outputFile = path.resolve(__dirname, 'src', 'electron.d.ts');
generateTypeDefinitions(folderPath, outputFile);

console.log('[electron.d.ts] has been updated successfully!');
