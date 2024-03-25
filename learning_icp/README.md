# learning_icp

Welcome to learning_icp project.

This project was created to practice Full Stack Web3 Development ( Motoko & React.s). In this simple project, users can add records to the phonebook and list them on the screen.

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --clean --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Please copy and paste the learning_icp frontend url (e.g.,  http://###.#.#.#:####/?canisterId=############) that you see on your terminal to your browser.

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

If you are making frontend changes, you can start a development server with

```bash
npm start
```
Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

