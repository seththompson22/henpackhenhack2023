from nicegui import ui
import webbrowser

def set_background(color: str) -> None:
    ui.query('body').style(f'background-color: {color}')

ui.query('body').style('background-color: #76b5c5')
ui.label(text = "Welcome: Create Your Hen Pack").style('color: #F4F4F4; font-weight: 100; font-size: 600%')

#def open_link():

ui.button('Create Your Pack!', on_click=lambda: ui.notify('center'), color='#002b80').style('color: #F4F4F4; font-weight: 3000; font-size: 200%')

ui.run()