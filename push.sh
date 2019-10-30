#!/bin/bash
# if permission change needed: chmod 0755 <scriptname>.sh

# examples: 
#   $ ./push.sh
#   $ ./push.sh custom commit msg
#   $ ./push.sh updated README.md

# variables:
USERNAME=reddtoric
REPO=reddtoric.github.io


# functinos:
GitBranch(){
	echo ""
	echo " +----------------+"
	echo " | PUSHING TO ... |"
	echo " +----------------+"
	git branch
	echo ""
	echo "------------------------------"
}

GitAdd(){
	echo ""
	echo " +---------------------+"
	echo " | GIT ADD . --VERBOSE |"
	echo " +---------------------+"
	git add . -v
}

GitStatus(){
	echo ""
	echo "------------------------------"
	echo ">>>  GIT STATUS"
	git status
}

GitCommit(){
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
}

GitPush(){
	echo ""
	echo "------------------------------"
	echo ">>> GIT PUSH --REPO https://$USERNAME@github.com/$USERNAME/$REPO.git"
	git push --repo https://$USERNAME@github.com/$USERNAME/$REPO.git
}

ConfirmPush(){
	echo ">>> Continue to push? y or n"

	read TOPUSH

	if [ "$TOPUSH" = "y" ]; then
		GitPush
	elif [ "$TOPUSH" = "n" ]; then
		echo ">>> DID NOT PUSH."
	else
		echo "Invalid input, please try again."
		ConfirmPush
	fi
}

# Main
GitBranch
GitAdd
GitStatus
GitCommit
ConfirmPush