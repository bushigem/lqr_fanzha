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

# 基本防骗知识页面
@app.route("/basic")
def basic():
    return render_template("basic.html")  # 确保 basic.html 存在

# 经典案例分析页面
@app.route("/cases")
def cases():
    return render_template("cases.html")  # 确保 cases.html 存在

# 防骗工具推荐页面
@app.route("/tools")
def tools():
    return render_template("tools.html")  # 确保 tools.html 存在

# 启动应用程序
if __name__ == "__main__":
    app.run(debug=True)
