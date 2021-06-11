# textlint-rule-kansuji-yamato-kotoba

[WIP]
A textlint rule for Japanese numerals with 大和言葉.
This rule force you to use 漢数字 instead of Arabic numerals in case of using つ as 助数詞.

## Install

Install from GitHub with [npm](https://www.npmjs.com/):

```
npm install hexium310/textlint-rule-kansuji-yamato-kotoba#master
```

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "kansuji-yamato-kotoba": true
    }
}
```

Via CLI

```
textlint --rule kansuji-yamato-kotoba README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © 
