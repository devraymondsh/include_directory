# include_directory

[![Continuous Integration](https://github.com/devraymondsh/include_directory/actions/workflows/main.yml/badge.svg)](https://github.com/devraymondsh/include_directory/actions/workflows/main.yml)
[![license](https://img.shields.io/github/license/devraymondsh/include_directory.svg)](LICENSE)
[![Crates.io](https://img.shields.io/crates/v/include_directory.svg)](https://crates.io/crates/include_directory)
[![Docs.rs](https://docs.rs/include_directory/badge.svg)](https://docs.rs/include_directory/)

An evolution of the `include_str!()` and `include_bytes!()` macros for embedding
an entire directory tree into your binary.

This is a fork of the `include_dir` crate which gathers files' mimetype at compile-time that can be accessed at run-time.

Rendered Documentation:
- [master](https://devraymondsh.github.io/include_directory)
- [Latest Release](https://docs.rs/include_directory/)

## Getting Started

The `include_directory!()` macro works very similarly to the normal `include_str!()`
and `include_bytes!()` macros. You pass the macro a file path and assign the
returned value to some `static` variable.

```rust
use include_directory::{include_directory, Dir};

static PROJECT_DIR: Dir = include_directory!("$CARGO_MANIFEST_DIR");

// of course, you can retrieve a file by its full path
let lib_rs = PROJECT_DIR.get_file("src/lib.rs").unwrap();

// you can get the mimetype by doing
let mimetype = lib_rs.mimetype();

// you can also inspect the file's contents
let body = lib_rs.contents_utf8().unwrap();
assert!(body.contains("SOME_INTERESTING_STRING"));

// you can search for files (and directories) using glob patterns
#[cfg(feature = "glob")]
{
    let glob = "**/*.rs";
    for entry in PROJECT_DIR.find(glob).unwrap() {
        println!("Found {}", entry.path().display());
    }
}
```

## Features

- Embed a directory tree into your binary at compile time
- Find a file in the embedded directory
- Search for files using a glob pattern (requires the `globs` feature)
- Gather file's mimetype at compile-time
- File metadata (requires the `metadata` feature)

To-Do list:

- Compression?
