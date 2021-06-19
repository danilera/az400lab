#!/bin/sh

[ -z "$@" ] && nginx -g 'daemon off;' || $@

