#!/bin/bash
#if permission change needed: chmod 0755 <scriptname>.sh

#examples: 
#   $ ./push.sh
#   $ ./push.sh custom commit msg
#   $ ./push.sh updated README.md

#variables:
USERNAME=reddtoric
REPO=reddtoric.github.io


echo ""
echo " +-------------------+"
echo " | PUSHING TO MASTER |"
echo " +-------------------+"

echo ""
echo "------------------------------"
echo ">>>  GIT ADD . --VERBOSE"
git add . -v

echo ""
echo "------------------------------"
echo ">>>  GIT STATUS"
git status

echo ""
echo "------------------------------"
#if no custom one received from cmdline argument, use default commit msg 
if [ "$#" -eq 0 ]
then
    echo ">>>  GIT COMMIT -M 'UPDATE'"
    git commit -m "update"
    
#else use the custom commit msg from cmdline argument
elif [ "$#" -gt 0 ]
then
    echo ">>>  GIT COMMIT -M '"$*"'"
    git commit -m "$*"
fi

echo ""
echo "------------------------------"
echo ">>> GIT PUSH --REPO https://$USERNAME@github.com/$USERNAME/$REPO.git"
git push --repo https://$USERNAME@github.com/$USERNAME/$REPO.git