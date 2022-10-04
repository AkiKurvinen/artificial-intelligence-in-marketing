import sys

fin = open('csv_result-supermarket.csv', "rt")
fout = open("supermarket.csv", "wt")

for line in fin:
    fout.write(line.replace('?', 'f'))
fin.close()
fout.close()