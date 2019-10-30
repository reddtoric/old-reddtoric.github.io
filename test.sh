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

ContinueToPush