# Worst Fix Ever — v8

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/Maulidian14/worst-fix-v8/rank.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/Maulidian14/worst-fix-v8/reward.svg)](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Entry for the [Worst Fix Ever: Funniest Commit Message](https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) competition on make.fun — a one-line commit message for a bug fix that made everything worse.

## The entry

```
fix: removed the bug and the feature it was holding up
```

## How it works

`main.ts` writes the commit message to `/output/entry.txt`. It resolves paths from its own file location, so the run does not depend on the working directory, and it checks the entry against the competition gate (1–100 characters) before writing.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
