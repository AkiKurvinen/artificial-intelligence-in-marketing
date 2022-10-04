import pandas as pd

df = pd.read_csv('data/supermarket.csv')
df.replace({'t': '1'}, regex=True, inplace=True)
df.replace({'f': '0'}, regex=True, inplace=True)
df.iloc[:,:-1] = df.iloc[:,:-1].apply(pd.to_numeric, errors='coerce', axis=1)

# Unfortunately, not all departments are named, so let's get rid of them
df = df[df.columns.drop(list(df.filter(regex='depart')))]


# get col names for later use
cols = ''
for col in df.columns:
    cols += f'{col}, '
print (col)
