from flask import Flask, render_template

app = Flask(__name__)

# 首页
@app.route("/")
def home():
    return render_template("index.html")

# 关于我们页面
@app.route("/about")
def about():
    return render_template("about.html")

# 防骗技巧页面
@app.route("/tips")
def tips():
    return render_template("tips.html")

@app.route("/tips/basic")
def tips_basic():
    return render_template("basic.html")  # 创建对应的 basic.html 模板

@app.route("/tips/cases")
def tips_cases():
    return render_template("cases.html")  # 创建对应的 cases.html 模板

@app.route("/tips/tools")
def tips_tools():
    return render_template("tools.html")  # 创建对应的 tools.html 模板


# 启动应用程序
if __name__ == "__main__":
    app.run(debug=True)
