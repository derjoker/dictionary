filter crawler error and filter out retries & redirect to `downloads.log`

```sh
node download.js | tee >(grep -e 'error: CRAWLER Error Error' | grep -v 'retries left' > downloads.log)
```