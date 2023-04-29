from bottle import Bottle, run, error

app = Bottle()

@app.route('/hello')
def hello():
    return "Hello World!"

@error(404)
def error404(error):
    return 'Nothing here, sorry'

run(app, host='localhost', port=8080)
# run the program, then go to the link:
# http://localhost:8080/hello