#!/usr/bin/env bash

set -euo pipefail #ensures script does not continue to run after one of the lines returned error code

frontend_up() {
  curl -fsS http://localhost:4200/ &> /dev/null #get this resource, -f - fail fast with no output on server errors, -s - silent, -S - combined with -s it shows error messages on failure
}

run_kill() {
  kill "$(lsof -sTCP:LISTEN -ti tcp:4200)" &> /dev/null || true #lsof - lists all open files, -sTCP:LISTEN - lists only network files with TCP state LISTEN, -t - produces output with process identifiers only and no header, so that the output may be piped to kill, -i - selects files whose Internet address matches the specified address
}

run_kill

until ! frontend_up; do
  run_kill
  sleep 1
done

