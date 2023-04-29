from bottle import Bottle, run

app = Bottle()


@app.route("/henpackhenhack2023")
def hello():
    return "Hello World!"


run(app, host="localhost", port=8080)
# run the program, then go to the link:
# http://localhost:8080/henpackhenhack2023
