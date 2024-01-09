from flask import Flask, request, render_template
import requests

app = Flask(__name__)

@app.route('/') 
def formPage():
    return render_template('form.html') # 打開form.html

@app.route("/submit", methods=['POST']) 
def submit():
    if request.method == 'POST':
        form_data = request.form

        # id 會自動生成
        new_data = {
            "gender": form_data['gender'],
            "age":form_data['age'],
            "area": form_data['area'],
            "time":form_data['time'],
            "nightmarket":form_data['nightmarket'],
            "tidy":form_data['tidy'],
            "food":form_data['food'],
            "price":form_data['price'],
            "traffic":form_data['traffic'],
            "ent":form_data['ent'],
            "trait":form_data['trait'],
            "comment":form_data['comment'],
        }
        params = {}
        url = "http://localhost:3000/records"
        result = requests.post(url, params=params, json=new_data)  # 執行 post 讓資料從後端送到 json server
        print(result.status_code)   # 成功的回應約200
        print(result.content)
        return render_template('form.html', confirm = "上傳成功") # if 成功則 print 上傳成功
 
if __name__ == "__main__":
    app.run()


# import os
# import requests

# from flask import (Flask, redirect, render_template, request,
#                    send_from_directory, url_for)

# app = Flask(__name__)


# @app.route('/')
# def index():
#    print('Request for index page received')
#    return render_template('index.html')

# @app.route('/favicon.ico')
# def favicon():
#     return send_from_directory(os.path.join(app.root_path, 'static'),
#                                'favicon.ico', mimetype='image/vnd.microsoft.icon')

# @app.route('/hello', methods=['POST'])
# def hello():
#    name = request.form.get('name')

#    if name:
#        print('Request for hello page received with name=%s' % name)
#        return render_template('hello.html', name = name)
#    else:
#        print('Request for hello page received with no name or blank name -- redirecting')
#        return redirect(url_for('index'))
   
# @app.route("/submit", methods=['POST']) 
# def submit():
#     if request.method == 'POST':
#         form_data = request.form

#         # id 會自動生成
#         new_data = {
#             "gender": form_data['gender'],
#             "age":form_data['age'],
#             "area": form_data['area'],
#             "time":form_data['time'],
#             "nightmarket":form_data['nightmarket'],
#             "tidy":form_data['tidy'],
#             "food":form_data['food'],
#             "price":form_data['price'],
#             "traffic":form_data['traffic'],
#             "ent":form_data['ent'],
#             "trait":form_data['trait'],
#             "comment":form_data['comment'],
#         }
#         params = {}
#         url = "http://localhost:3000/records"
#         result = requests.post(url, params=params, json=new_data)  # 執行 post 讓資料從後端送到 json server
#         print(result.status_code)   # 成功的回應約200
#         print(result.content)
#         return render_template('index.html', confirm = "上傳成功") # if 成功則 print 上傳成功

# if __name__ == '__main__':
#    app.run()
