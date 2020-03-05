run-server:
	cd client && npm run build && cd -
	cd server && npm start && cd -

run-client:
	cd client && npm start && cd -
