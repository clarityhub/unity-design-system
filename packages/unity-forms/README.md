# @clarityhub/unity-forms

> Clarity Hub Unity Design System implementation of JSONSchema

## Usage

The `@clarityhub/unity-forms` package is implemented using React, Emotion, and JSONSchema:

Installation:

```sh
npm i --save @clarityhub/unity-forms
```

To Use:

```js
import FormFromSchema from '@clarityhub/unity-forms/lib/FormFromSchema;

const form = (
    <FormFromSchema
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onSubmit={onSubmit}
        submitting={submitting}
        submitText="Send" // optional
    />
)
```