# Lightdm-cyan

A still heavily-WIP theme for [lightdm-webkit2-greeter](git@github.com:TLATER/lightdm-cyan.git).

## Installation

While this is an npm project, it still has to be installed to
`$PREFIX/web-greeter/themes/`. This appears to be impossible to set up
with npm configuration, hence the project includes a minimal
`Makefile`.

The project can be built and installed using:

``` shell
PREFIX=/usr/local/ make install
```

If `PREFIX` is not specified, it defaults to `/usr/share`.
