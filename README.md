Repository for reproducing https://github.com/XeroAPI/xero-node/issues/281.

## Running

Create a `config.json` file containing:

```
{
    "appType": "private",
    "consumerKey": "<key>",
    "consumerSecret": "<secret>",
    "callbackUrl": null,
    "privateKeyPath": "<path-to-private-key>"
}
```

Install dependencies with `npm install`, and then run with `npm start`.
