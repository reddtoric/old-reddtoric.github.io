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
	printf "\n"
	for i in {1..60}
	do
		printf -- "-%.0s"
	done
	printf "\n\n"
}

Title(){
	length=${#1}
	
	TitleBar length
	echo " | ${1} |"
	TitleBar length
}

Title2Rows(){
	length=${#1}
	length2=${#2}
	
	if [ "$length" -gt "$length2" ]
	then
		TitleBar length
		printf " | ${1} |\n"
		
		printf " | ${2}"
		Repeater " " length-length2
		printf " |\n"
		TitleBar length

	else
		TitleBar length2
		printf " | ${1}"
		Repeater " " length2-length
		printf " |\n"
		
		printf " | ${2} |\n"
		TitleBar length2
	fi
}

TitleBar(){
	printf " +-"
	
	for ((i=0; i<${1}; i++))
	do
		printf -- "-%.0s"
	done
	
	echo "-+"
}

Repeater(){
	for ((i=0; i<${2}; i++))
	do
		printf -- "${1}%.0s"
	done
}

Info(){
	Title "INFO"
	echo "Username: ${USERNAME}"
	echo "Repo: ${REPO}"
}

GitBranch(){
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
	Title2Rows "GIT PUSH --REPO" "https://$USERNAME@github.com/$USERNAME/$REPO.git"
	git push --repo https://$USERNAME@github.com/$USERNAME/$REPO.git
	echo ""
	Title "PUSH COMPLETED"
}

ConfirmPush(){
	echo ">>> Continue to push? y or n"

	read TOPUSH
	
	echo ""

	if [ "$TOPUSH" = "y" ]; then
		GitPush
	elif [ "$TOPUSH" = "n" ]; then
		Title "DID NOT PUSH"
	else
		echo ">>> Invalid input, please try again."
		ConfirmPush
	fi
}


# Main
Info
Hr
GitBranch
Hr
GitAdd
Hr
GitStatus
Hr
GitCommit
Hr
ConfirmPush