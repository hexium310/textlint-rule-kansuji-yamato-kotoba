"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var report = context => {
  var {
    Syntax,
    RuleError,
    report,
    getSource
  } = context;
  return {
    [Syntax.Str](node) {
      var text = getSource(node);
      var matches = text.matchAll(/\dつ/g);

      if (!matches) {
        return;
      }

      [...matches].forEach(match => {
        report(node, new RuleError("\u300C".concat(match[0], "\u300D\u304C\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059\u3002"), {
          index: match.index
        }));
      });
    }

  };
};

var _default = report;
exports.default = _default;
//# sourceMappingURL=index.js.map