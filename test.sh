#!/bin/bash

ContinueToPush(){
	echo Continue to push? y or n

	read TOPUSH

	if [ "$TOPUSH" = "y" ]; then
		echo "yes"
	elif [ "$TOPUSH" = "n" ]; then
		echo "no"
	else
		echo "Invalid input, please try again."
		ContinueToPush
	fi
}

Title(){
	TITLE_LENGTH=${#1}
	
	Bar TITLE_LENGTH
	echo " | ${1} |"
	Bar TITLE_LENGTH
}

Bar(){
	printf " +-"
	
	for ((i=0; i<${1}; i++))
	do
		printf -- "-%.0s"
	done
	
	echo "-+"
}

Title "GIT ADD . --VERBOSE"