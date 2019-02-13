# gas-linebot-template

This is a template to develop LINE bot using google apps script(GAS).
It contains a circleCI config file. Your merged code will be automatically deployed to GAS if you bond this repository to a circleCI project.

## How to use

```
## Fork this repository!
$ git clone git@github.com:<your account>/gas-linebot-template.git testbot
$ cd testbot
$ npm i @google/clasp -g
$ clasp login
## login at browser
$ clasp create
$ clasp push
$ clasp open
## deploy as web app
$ clasp pull
## bond the repository to a circleCI project
## setting your LINE bot
## setting circleCI environment variables
## $CLASPRC_JSON is
$ cat ~/.clasprc.json | pbcopy
## $CLASP_JSON is
$ cat ./.clasp.json | pbcopy
## $DEPLOY_ID is
$ clasp deployments | grep 'web app meta-version' | awk '{print $2}' | pbcopy
## $LINE_ACCESS_TOKEN is line bot access token
## Hacking!
$ git add
$ git commit
$ git push
# Enjoy!
```

# License
Copyright (c) 2019 naokisekiguchi

Licensed under the MIT License
