const server = require('./api/server');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n** Ye be docked on port ${port} **\n`));
