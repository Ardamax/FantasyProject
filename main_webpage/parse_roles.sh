#!/bin/bash

role=$1
grep ",$role," short_output.csv | cut -f2 -d, > temp.txt
