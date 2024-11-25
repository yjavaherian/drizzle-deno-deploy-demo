# A minimal repo showcasing mysql2 problem with Deno Deploy

## steps to reproduce:

1. run `deno task start`.
2. visit `http://localhost:8000` you should see:
``` json
{"id":1,"name":"Deno Deploy + Drizzle Demo 🦕","description":"hello world"}

```
3. deploy with `deployctl deploy`, you should see an error like this:

``` bash
√ Found 4 assets.
√ Uploaded 4 new assets.
× Deployment failed.
error: The deployment failed: BOOT_FAILURE

Failed to resolve module "mysql2" from "file:///node_modules/.deno/drizzle-orm@0.36.4/node_modules/drizzle-orm/mysql2/driver.js"

```

* NOTE: database is setup with the help of https://filess.io


resources:
- https://docs.deno.com/deploy/manual/
- https://orm.drizzle.team/docs/get-started-mysql
- https://deno.com/blog/build-database-app-drizzle
