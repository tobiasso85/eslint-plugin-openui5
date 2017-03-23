# eslint-plugin-openui5

openui5 static code checks

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-openui5`:

```
$ npm install eslint-plugin-openui5 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-openui5` globally.

## Usage

Add `openui5` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "openui5"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "openui5/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





