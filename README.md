# Introduction

This [Swagger-UI](https://github.com/swagger-api/swagger-ui) plugin allows to display multiple collapsible sections between the documentation's info and the paths list.

It works by wrapping the `InfoContainer` component to inject custom components.

# Installation

```
npm i swagger-ui-plugin-extra-description
```

# Usage

Add the plugin in the configuration object of SwaggerUI, and provides a list of sections like this :

```js
import { ExtraDescriptionPluginFactory } from 'swagger-ui-plugin-extra-description';

SwaggerUI({
  // ...
  plugins: [
    ExtraDescriptionPluginFactory([
      {
        title: "Important section",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...",
        forceOpen: true
      }, {
        title: "Changelog",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ..."
      }
    ]
  ]
})
```

Once the plugin has been applied, two components will be accessible if needed : `ExtraDescriptions` and `ExtraDescription`
