# Help Center

How to run the app? 

## Prerequisites
- Node.js
- MySQL

## Steps

1. Clone the repository
    `git clone https://github.com/realanupreet/help-center.git`
2. Change directory
    `cd help-center`
3. Install Dependencies `npm install`
4. Make a copy of `.env.example` and rename it to `.env`
5. Add credentials in `.env` file example
   ```bash
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=
    MYSQL_DATABASE=help_center

    PORT=3000```
6. Also add credentials in `backend/.env` file the same way `DATABASE_URL="mysql://root:@127.0.0.1:3306/help_center?schema=public"`
4. Start frontend `npm start:frontend`
5. Open a second terminal window and start backend `npm start:backend`
6. Open [http://localhost:5173](http://localhost:5173) to view frontend in the browser.
7. Open [http://localhost:3000](http://localhost:3000) to view backend in the browser or test routes.

