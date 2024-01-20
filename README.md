# React + Jest + Wasm

This is a simple example of how to use WebAssembly in a React application. The wasm module is written in Rust and compiled with wasm-pack.

# Development

## Install dependencies

```bash
pnpm install
```

## How to build wasm

```bash

pnpm run wasm:build

```

## How to test

Use cypress tests is the recommended way, because the browser is more similar to the environment where the application will run.

### Unit tests with Cypress (Recommended)

This will run the tests in the browser.

- test: run the tests in the background
- test:open: open the browser and run the tests

```bash
// Build the wasm module
pnpm run wasm:build

// Start the dev server
pnpm run dev --host

// Run the tests
pnpm run test

// or
pnpm run test:open
```

### Unit tests with wasm-pack

```bash
cd flowy-wasm

// if you want to run the tests in the browser

// brew install chromedriver
wasm-pack test --headless --chrome

// or
// brew install geckodriver
wasm-pack test --headless --firefox


```
## How to write tests

### Cypress Tests

The tests are located in the `cypress/integration` folder. The tests are written in TypeScript

```typescript
// cypress/integration/flowy.spec.ts

describe('Flowy', () => {
  it('should render the flowy canvas', () => {
    const text_route = '/test_add'
    cy.visit(text_route);
    
    // Get the input element
    cy.get('#flowy-first-number').type('1');
    cy.get('#flowy-second-number').type('2');
    cy.get('#flowy-add').click();
    
    // Get the output element
    cy.get('#flowy-output').should('have.value', '3');
    
    // Clear the input
    cy.get('#flowy-first-number').clear();
    cy.get('#flowy-second-number').clear();
    
    // Repeat the process for the other operations
    // ...
  })
})
```

### Wasm-pack Tests

The tests are located in the `flowy-wasm/tests` folder. The tests are written in Rust and use the `#[wasm_bindgen_test]` macro to interact with the wasm module.

```rust

// flowy-wasm/tests/add.rs

#[wasm_bindgen_test]
fn test_add() {
    let result = add(1, 2);
    assert_eq!(result, 3);
}

```