# Contributing to MCPBastion

Thanks for taking the time to contribute.

## Ground rules

- Keep changes small and focused - one topic per pull request.
- Every change must keep `cargo test` and the console tests green.
- Match the existing formatting (`cargo fmt`, `tsc --noEmit`).

## Development

```bash
# gateway (Rust)
cd gateway && cargo test

# console (TypeScript)
cd console && npm install && npm run build && npm test
```

## Reporting problems

Open an issue with the exact command you ran, the expected behaviour and the
observed output. For security problems, see `SECURITY.md` instead.
