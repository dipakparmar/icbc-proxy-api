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

### Login

- **Endpoint**: `POST /login`
- **Description**: Authenticate user and retrieve token
- **Request Body**:
  ```json
  {
    "drvrLastName": "YourLastName",
    "licenceNumber": "YourLicenceNumber",
    "keyword": "YourKeyword"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "token": "your_auth_token",
    "hashedParam": "hashed_param_for_future_requests",
    "data": { ... }
  }
  ```

> [!NOTE]
> Token is only valid for 30 minutes. Use the `hashedParam` for future requests. If the token expires, you can use /login endpoint to get a new `token` and `hashedParam`.

### Available Appointments

- **Endpoint**: `POST /availableAppointments`
- **Description**: Retrieve available appointments
- **Authentication**: Required (Include `?auth=your_hashed_param` in the URL)
- **Request Body**: (Example, update with your own data)
  ```json
  {
    "aPosID": 133, // can be found in the response of the nearestPositions endpoint
    "examType": "5-R-1", // 5-R-1 = Road Test Class 5, 7-R-1 = Road Test Class 7
    "examDate": "2024-10-16", // YYYY-MM-DD
    "ignoreReserveTime": false,
    "prfDaysOfWeek": "[0,1,2,3,4,5,6]", // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    "prfPartsOfDay": "[0,1]", // 0 = AM, 1 = PM
    "lastName": "YourLastName",
    "licenseNumber": "YourLicenceNumber"
  }
  ```
- **Response**: Array of `AppointmentSlot` objects

### Nearest Positions

- **Endpoint**: `POST /nearestPositions`
- **Description**: Find nearest positions
- **Authentication**: Required (Include `?auth=your_hashed_param` in the URL)
- **Request Body**:
  ```json
  {
    "lng": -120.3391667, // Longitude
    "lat": 50.6755556, // Latitude
    "examType": "5-R-1", // 5-R-1 = Road Test Class 5, 7-R-1 = Road Test Class 7
    "startDate": "2024-10-16" // YYYY-MM-DD
  }
  ```
- **Response**: Array of `NearestPosition` objects

For detailed API documentation, please refer to the individual route files in the [./src/routes](./src/routes/) directory.

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
