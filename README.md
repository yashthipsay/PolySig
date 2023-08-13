# POLYSIG DECENTRALIZED SERVICES (PDS)

Welcome to the PolySig World, where seamless transactions with reduced gas fees are made possible through cutting-edge technology. Powered by one of the most efficient APIs in the world, PolySig offers an exceptional user experience backed by the Optimism Mainnet. This advanced blockchain infrastructure ensures faster throughput and more cost-effective transactions than ever before.

## App Overview

PolySig introduces a suite of applications aimed at revolutionizing how you engage with the blockchain. At the forefront of these innovations is the multi-signature transaction functionality, redefining security and efficiency through pre-coded approval methods.

### PolySig Wallet

The cornerstone of PolySig's offerings is the multi-signature wallet. Designed to facilitate swift transactions even when multiple owners need to provide their approval, this wallet harnesses the enhanced throughput capabilities of the base mainnet. By seamlessly merging the power of Optimism's Mainnet with the security of the Ethereum Blockchain, PolySig Wallet provides unparalleled transaction speed and reliability.

### PolySig Swap

PolySig Swap introduces an advanced swapping mechanism that utilizes the 0x Proxy Contract to determine equivalent token prices. Through the integration of Optimism-enabled throughput, this feature enables transactions that outpace traditional blockchains using optimistic rollups. The integration of real-time data retrieval, facilitated by The Graph API, further enhances the swap experience by providing up-to-date information about top Uniswap pools.

### Real-time Insights

Stay informed with real-time data using the Etherscan and Covalent APIs. These integrations empower you with the ability to make informed decisions based on accurate, up-to-date information. Covalent API's robust data retrieval capabilities identify the most optimal liquidity pools for efficient token swapping.

# Getting Started

Follow these steps to start leveraging the power of PolySig:

1. Clone the project repository using the following command:
   ```sh
   git clone <repository_url>
   ```

2. Navigate to the 'chain' directory and install the required dependencies:
   ```sh
   cd chain
   npm install
   yarn hardhat node
   yarn hardhat run scripts/01-deploy-multisig.ts
   yarn hardhat run scripts/02-deploy-ccip.ts
   ```

3. Move to the 'webapp' directory and initiate the development server:
   ```sh
   cd ../webapp
   npm run dev
   ```

4. Import a Hardhat node using Metamask to interact with the PolySig ecosystem.

# Start Transacting

With the setup complete, you're now empowered to utilize the multi-signature wallet and swapping features of PolySig. Enjoy efficient, secure, and seamless transactions like never before.

**Experience the future of decentralized services with PolySig. Kudos to a new era of blockchain efficiency!**