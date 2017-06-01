#!/usr/bin/env bash

ng build --env=prod -base /blog_api/ \
    && rm -rf ./docs/ \
    && cp -r ./dist/ ./docs/
#    && git checkout -- docs/CNAME \
