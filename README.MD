# ICBC Proxy API

A proxy API for interacting with ICBC (Insurance Corporation of British Columbia) services.

> [!CAUTION]
> 
> ## ⚠️ IMPORTANT DISCLAIMER
>
> **USE THIS SOFTWARE AT YOUR OWN RISK**
>
> This project is not affiliated with, endorsed by, or in any way officially connected to ICBC (Insurance Corporation of British Columbia).
>
> - The use of automation tools to interact with ICBC services may be prohibited.
> - Your ICBC account may be blocked or suspended if you use this software.
> - The author is not responsible for any damage, loss, or consequences of any kind resulting from the use of this software.
> - This software is provided for educational purposes only. Use of this software to interact with ICBC services may violate their terms of service.
>
> By using this software, you acknowledge that you understand these risks and agree to take full responsibility for any consequences that may arise from its use.

## Description

This project provides a Node.js-based proxy API that interfaces with ICBC's services. It includes endpoints for user login, retrieving available appointments, and finding nearest positions.

## Features

- User authentication
- Available appointment retrieval
- Nearest position lookup
- CORS support
- Logging middleware

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dipakparmar/icbc-proxy-api.git
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage

### Development

To run the server in development mode with hot reloading:

```bash
pnpm run dev
```

### Production

To build and start the server for production:

```bash
pnpm start
```

### Testing

Run the test suite:

```bash
pnpm test
```

## API Endpoints

- `POST /login`: User authentication
- `POST /availableAppointments`: Retrieve available appointments
- `POST /nearestPositions`: Find nearest positions

For detailed API documentation, please refer to the individual route files in the `src/routes` directory.

## Configuration

The base URL for the ICBC API can be configured in `src/config.ts`.

## Dependencies

- Express
- Axios
- CORS
- Morgan (for logging)
- TypeScript

For a full list of dependencies, see `package.json`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## Legal

This project is not affiliated with, endorsed by, or in any way officially connected to ICBC (Insurance Corporation of British Columbia). ICBC and any related names are registered trademarks of their respective owners.
