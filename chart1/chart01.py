import pandas as pd
from pytrends.request import TrendReq 
import json
import numpy as np
import plotly.express as px

#=============================================
pytrend = TrendReq(hl='zh-TW', tz=-480) 
#2d
kws=[
    ["逢甲夜市","中壢夜市","中原夜市","士林夜市"],
    ["寧夏夜市","饒河夜市","瑞豐夜市","羅東夜市"],
    ["臨江夜市","花園夜市","六合夜市","廟口夜市"],
    ["東大門夜市","文化路夜市","台東夜市","華西街夜市"],
    ["湳雅夜市","桃園夜市","城隍廟夜市","一中街夜市"],
    ["龍燈夜市","精誠夜市","草鞋墩夜市","虎尾夜市"],
    ["嘉樂福夜市","瑞峰夜市","墾丁大街"]
]

places = [] #1d
for i in kws:
    places.extend(i)

pytrend.build_payload(kw_list=kws[0], cat=0, timeframe='today 12-m', geo='TW', gprop='')
df=pytrend.interest_over_time()
df.drop(columns=['isPartial'], inplace=True)
numOfRows = df.shape[0] 
numOfCols = df.shape[1]


base = df['逢甲夜市'][0]

print(df)
#print(base)
kw_list=[]
for i in range(1,7):
    kw_list=kws[i]+['逢甲夜市']
    pytrend.build_payload(kw_list, cat=0, timeframe='today 12-m', geo='TW', gprop='')
    print(kw_list)
    data = pytrend.interest_over_time() #取得的資料
    data.drop(columns=['isPartial'], inplace=True)
    #print(data)
    
    #整數化
    for nm in kws[i]:
        data[nm].apply(lambda x: x*1000)
    
    #處理資料
    mul = base / data['逢甲夜市'][0]
    #print("mul = ",mul)
    for times in range(numOfRows):
        for nm in kws[i]:
            if nm == '逢甲夜市':
                continue
            
            #data[nm][times]= tmp*mul
            data[nm].iloc[times] = int(data[nm][times]*mul)
            #data['date'].iloc[times] = data['date'].iloc[times][:10]
    #data.drop(columns=['isPartial'], inplace=True)
    data.drop(columns=['逢甲夜市'], inplace=True)
    print(data)
    df=pd.merge(data, df, on='date', how='outer')
    

df = df.reset_index(drop=False) 
print(df)

data02 = {x: 0 for x in places}
print(data02)
print(df)
for x in places:
    data02[x]=df[x].sum()/30

#print(type(df))
data_string02 = str(data02)

#----------------------------------- json ---------------------------------

preload = json.loads(df.to_json(orient='table'))['data']
print(json.dumps(preload, ensure_ascii=False))


for i in range(numOfRows):
    preload[i]["date"] = preload[i]["date"][:10]

print(preload)



nmdata_string = str(preload).replace("},", "},\n") #preload是list
nmdata_string = nmdata_string.replace("{", "{\n\t") 
nmdata_string = nmdata_string.replace("[", "[\n") 
nmdata_string = nmdata_string.replace("]", "\n]") 
nmdata_string = str(nmdata_string).replace("\'", "\"")

print(nmdata_string)
with open('data/data.json', 'w') as file:
    file.write(nmdata_string) 

data_string02 = data_string02.replace("\'", "\"")

with open('data/data02.json', 'w') as file:
    file.write('[\n'+data_string02+'\n]') 

nmdata_string = nmdata_string.replace("-", "/") 
with open('data/data03.json', 'w') as file:
    file.write(nmdata_string) 

#================== flask =================================

from flask import Flask, request, render_template
import requests

app = Flask(__name__)

@app.route('/') 
def formPage():
    return render_template('index.html') # 打開form.html

@app.route("/play", methods=['POST']) 
def play():
    if request.method == 'POST':
        print("success")
        #return render_template('.html', confirm = "按鈕成功") # if 成功則 print 上傳成功

if __name__ == "__main__":
    app.run()

#=========================catch coordinate======================


#print(places)

URL = []
for i in places:
    URL.append("https://www.google.com/maps/place?q=" + i)
#print(URL)

coordination_dict=dict()

import requests
from bs4 import BeautifulSoup
response = requests.get(URL[0])
soup = BeautifulSoup(response.text, "html.parser")
print(soup)
text = soup.prettify()
print(text)
 
    #ws.append(num_data) #將經緯度存到Excel裡

def STR_to_NUM(data):
    line = tuple(data.split(','))
    num1 = float(line[1])
    num2 = float(line[2])
    line = [num1, num2]
    return line
    #print(line)

def coordination(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    text = soup.prettify() #text 包含了html的內容
    initial_pos = text.find(";window.APP_INITIALIZATION_STATE")
    #尋找;window.APP_INITIALIZATION_STATE所在位置
    data = text[initial_pos+36:initial_pos+85] #將其後的參數進行存取
    #print(data)
    num_data = STR_to_NUM(data)
    return num_data

for i in URL:
    #print(i)
    initial_pos = i.find('=')
    nm=i[initial_pos+1:]
    nm_coor=coordination(i)
    coordination_dict[nm]='{\"lon\":'+str(nm_coor[0])+',\n\"lat\":'+str(nm_coor[1]+"},")
    #wb.save('nm_coordinate.csv') 

print(coordination_dict)

coordination_string = str(coordination_dict)
coordination_string = coordination_string.replace("\'", "\"")
#coordination_string = coordination_string.replace("夜市", "夜市")
#coordination_string = coordination_string.replace("],", "},")


with open("data/nm_coordinate.json", "w", encoding='utf-8') as outfile: 
   outfile.write("[{\n"+coordination_string+"\n}]") 

    