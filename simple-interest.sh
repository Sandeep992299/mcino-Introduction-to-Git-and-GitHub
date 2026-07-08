#!/bin/bash
# Simple Interest Calculator

echo "Enter Principal Amount:"
read principal
echo "Enter Rate of Interest:"
read rate
echo "Enter Time Period (in years):"
read time

interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
total=$(echo "scale=2; $principal + $interest" | bc)

echo "Principal: $principal"
echo "Rate: $rate%"
echo "Time: $time years"
echo "Simple Interest: $interest"
echo "Total Amount: $total"
