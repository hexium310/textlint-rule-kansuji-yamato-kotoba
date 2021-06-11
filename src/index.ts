import { TextlintRuleModule } from "@textlint/types";

const report: TextlintRuleModule = (context) => {
  const { Syntax, RuleError, report, getSource } = context;

  return {
    [Syntax.Str](node) {
      const text = getSource(node);
      const matches = text.matchAll(/\dつ/g);

      if (!matches) {
        return;
      }

      [...matches].forEach((match) => {
        report(node, new RuleError(`「${match[0]}」が使われています。`, {
          index: match.index,
        }));
      });
    },
  };
};

export default report;
