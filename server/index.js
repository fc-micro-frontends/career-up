const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const AUTH0_DOMAIN = "dev-vcrmf0xuep020tri.us.auth0.com";

server.use(middlewares);
server.use(async (req, res, next) => {
  if (await isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});
server.get("/user", (req, res) => {
  res.jsonp({
    ...req.user,
    view_count: 249,
    update_count: 100,
    courses: [
      { courseId: 1, done: true },
      { courseId: 4, done: false },
    ],
  });
});

server.get("/my-network", (req, res) => {
  res.jsonp({
    connectionCount: 811,
    contactCount: 3724,
    eventCount: 0,
    pageCount: 0,
    user: req.user,
  });
});

server.use(jsonServer.bodyParser);
server.post("/posts", (req, res, next) => {
  req.body.createdAt = new Date().toISOString();
  req.body.author = {
    name: req.user.name,
    email: req.user.email,
    picture: req.user.picture,
  };
  next();
});

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});

async function isAuthorized(req) {
  try {
    const Authorization = req.headers.authorization;

    const res = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
      headers: {
        Authorization,
      },
    });

    const json = await res.json();

    req.user = json;

    return true;
  } catch (e) {
    return false;
  }
}
