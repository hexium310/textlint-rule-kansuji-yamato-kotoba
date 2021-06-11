import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();

tester.run("kansuji-yamato-kotoba", rule, {
  valid: [
    "日本語の数詞は難しい",
    "一つのみかん",
    "一文で読点は三つ以上使わないほうが良い。",
  ],
  invalid: [
    // single match
    {
      text: "りんご1つ",
      errors: [
        {
          message: "「1つ」が使われています。",
          line: 1,
          column: 4,
        },
      ],
    },
    // multiple match
    {
      text: '2つ目と3つ目の項目を見る。',
      errors: [
        {
          message: "「2つ」が使われています。",
          line: 1,
          column: 1,
        },
        {
          message: "「3つ」が使われています。",
          line: 1,
          column: 5,
        },
      ],
    },
    {
      text: `8つの尾を持つ蛇
尾を9つ持つ狐`,
      errors: [
        {
          message: "「8つ」が使われています。",
          line: 1,
          column: 1,
        },
        {
          message: "「9つ」が使われています。",
          line: 2,
          column: 3,
        },
      ],
    },
  ],
});
