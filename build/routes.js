

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _movies = require('./routes/movies');

const _movies2 = _interopRequireDefault(_movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = function routes(router) {
  router.get('/movies', _movies2.default);
  return router;
};
exports.default = routes;
// # sourceMappingURL=routes.js.map
