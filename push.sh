#!/bin/bash
# if permission change needed: chmod 0755 <scriptname>.sh

# Examples: 
#   $ ./push.sh
#   $ ./push.sh custom commit msg
#   $ ./push.sh updated README.md

# Variables:
USERNAME=reddtoric
REPO=reddtoric.github.io


# Functinos:
Hr(){
	echo ""
	for ((i=0; i<80; i++))
	do
		printf -- "-%.0s"
	done
	echo ""
}

Title(){
	length=${#1}
	
	TitleBar length
	echo " | ${1} |"
	TitleBar length
}

TitleBar(){
	printf " +-"
	
	for ((i=0; i<${1}; i++))
	do
		printf -- "-%.0s"
	done
	
	echo "-+"
}


GitBranch(){
	echo ""
	Title "PUSHING TO ..."
	git branch
}

GitAdd(){
	Title "GIT ADD . --VERBOSE"
	git add . -v
}

GitStatus(){
	Title "GIT STATUS"
	git status
}

GitCommit(){
	#if no custom one received from cmdline argument, use default commit msg 
	if [ "$#" -eq 0 ]
	then
		Title "GIT COMMIT -M 'UPDATE'"
		git commit -m "update"
		
	#else use the custom commit msg from cmdline argument
	elif [ "$#" -gt 0 ]
	then
		Title "GIT COMMIT -M '"$*"'"
		git commit -m "$*"
	fi
}

GitPush(){
	Title "GIT PUSH --REPO https://$USERNAME@github.com/$USERNAME/$REPO.git"
	git push --repo https://$USERNAME@github.com/$USERNAME/$REPO.git
}

ConfirmPush(){
	Title "Continue to push? y or n"

	read TOPUSH

	if [ "$TOPUSH" = "y" ]; then
		GitPush
	elif [ "$TOPUSH" = "n" ]; then
		echo ">>> DID NOT PUSH."
	else
		echo ">>> Invalid input, please try again."
		ConfirmPush
	fi
}


# Main
GitBranch
Hr
GitAdd
Hr
GitStatus
Hr
GitCommit
Hr
ConfirmPush