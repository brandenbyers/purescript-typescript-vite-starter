# purescript-typescript-vite-starter

## Overview

This project is a starter template for integrating PureScript with TypeScript using Vite as the build tool. It allows for development in PureScript, with the compiled output integrated into a TypeScript project. The Vite configuration is tailored to handle PureScript files and bundle them for browser usage.

## Getting Started

Prerequisites
Before you start, ensure you have PureScript, and Spago installed.

```
npm install -g purescript spago@next
```
and then

```
npm i
```

## Workflow

### Starting the Development Server:

Use the following command to start the Vite development server:

```
npm run dev
```

This will watch for changes in PureScript (.purs) files and recompile them.

## Project Structure

`src/`

This directory contains the PureScript Main.purs file, which gets bundled as a browser module during development.
pure.js and pure.d.ts:

PureScript code is compiled to pure.js. Corresponding TypeScript type declarations are manually maintained in pure.d.ts.
Configuration Files

`vite.config.js`

Configures Vite to integrate PureScript by watching for changes in .purs files and recompiling them.

## Notes

Currently, TypeScript type declarations for PureScript code are updated manually. Keep the pure.d.ts file in sync with your PureScript code changes.