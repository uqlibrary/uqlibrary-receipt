#!/bin/bash

echo "Setting up tests for branch: ${CI_BRANCH}"

if [ ${CI_BRANCH} != "gh-pages" ]; then
    npm install -g bower web-component-tester
    bower install

    echo "Running tests for branch: ${CI_BRANCH}"
    wct
fi;