# MatthewFBullock-BlogSpot
Blog extension for matthewfbullock.com. Written in React

## Development

### 1. Install dependencies

```
cd client/
npm install

cd ../api
npm install
```

### 2. Run services

```
cd $PROJECT_ROOT/api/
npm start
```

In another terminal:

```
cd $PROJECT_ROOT/client/
npm start
```

Site runs on http://localhost:3000

API runs on http://localhost:9000

## Production

Services are dockerized for production deployment. A convenience script (`run.sh`) is included for local production testing.

```
./run.sh
```

Site runs on http://localhost

API runs on http://localhost:9000